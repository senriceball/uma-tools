import { h, render } from 'preact';
import { useState, useMemo, useEffect, useRef } from 'preact/hooks';
import { Text, IntlProvider } from 'preact-i18n';
import { Record } from 'immutable';
import { SortedSet } from 'immutable-sorted';
import * as d3 from 'd3';

import { CourseHelpers } from '../uma-skill-tools/CourseData';
import { RaceSolver } from '../uma-skill-tools/RaceSolver';
import { RaceSolverBuilder } from '../uma-skill-tools/RaceSolverBuilder';
import { Mood, GroundCondition, Weather, Season, Time, Grade } from '../uma-skill-tools/RaceParameters';

import { Language, LanguageSelect, useLanguageSelect } from '../components/Language';
import { SkillList, Skill } from '../components/SkillList';
import { RaceTrack, TrackSelect, RegionDisplayType } from '../components/RaceTrack';
import { HorseState, HorseDef, horseDefTabs } from '../components/HorseDef';
import { TRACKNAMES_ja, TRACKNAMES_en } from '../strings/common.ts';

import skillnames from '../uma-skill-tools/data/skillnames.json';

import './app.css';

function id(x) { return x; }

function GroundSelect(props) {
	return (
		<select class="groundSelect" value={props.value} onInput={(e) => props.set(+e.currentTarget.value)}>
			<option value="1">良</option>
			<option value="2">稍重</option>
			<option value="3">重</option>
			<option value="4">不良</option>
		</select>
	);
}

function WeatherSelect(props) {
	function click(e) {
		e.stopPropagation();
		if (!('weather' in e.target.dataset)) return;
		props.set(+e.target.dataset.weather);
	}
	return (
		<div class="weatherSelect" onClick={click}>
			{Array(4).fill(0).map((_,i) =>
				<img src={`/uma-tools/icons/utx_ico_weather_0${i}.png`}
					class={i+1 == props.value ? 'selected' : ''} data-weather={i+1} />)}
		</div>
	);
}

function SeasonSelect(props) {
	function click(e) {
		e.stopPropagation();
		if (!('season' in e.target.dataset)) return;
		props.set(+e.target.dataset.season);
	}
	return (
		<div class="seasonSelect" onClick={click}>
			{Array(5).fill(0).map((_,i) =>
				<img src={`/uma-tools/icons/utx_txt_season_0${i}.png`}
					class={i+1 == props.value ? 'selected' : ''} data-season={i+1} />)}
		</div>
	);
}

function Histogram(props) {
	const {data, width, height} = props;
	const axes = useRef(null);
	const xH = 20;
	const yW = 40;

	const x = d3.scaleLinear().domain(
		data[0] == 0 && data[data.length-1] == 0
			? [-1,1]
			: [Math.min(0,Math.floor(data[0])),Math.ceil(data[data.length-1])]
	).range([yW,width-yW]);
	const bucketize = d3.bin().value(id).domain(x.domain()).thresholds(x.ticks(30));
	const buckets = bucketize(data);
	const y = d3.scaleLinear().domain([0,d3.max(buckets, b => b.length)]).range([height-xH,xH]);

	useEffect(function () {
		const g = d3.select(axes.current);
		g.selectAll('*').remove();
		g.append('g').attr('transform', `translate(0,${height - xH})`).call(d3.axisBottom(x));
		g.append('g').attr('transform', `translate(${yW},0)`).call(d3.axisLeft(y));
	}, [data, width, height]);

	const rects = buckets.map((b,i) =>
		<rect key={i} fill="#2a77c5" stroke="black" x={x(b.x0)} y={y(b.length)} width={x(b.x1) - x(b.x0)} height={height - xH - y(b.length)} />
	);
	return (
		<svg id="histogram" width={width} height={height}>
			<g>{rects}</g>
			<g ref={axes}></g>
		</svg>
	);
}

class RaceParams extends Record({
	mood: 2 as Mood,
	ground: GroundCondition.Good,
	weather: Weather.Sunny,
	season: Season.Spring,
	time: Time.Midday,
	grade: Grade.G1
}) {}

const DEFAULT_COURSE_ID = 10101;
const DEFAULT_SAMPLES = 2000;

async function serialize(courseId: number, nsamples: number, racedef: RaceParams, uma1: HorseState, uma2: HorseState) {
	const json = JSON.stringify({
		courseId,
		nsamples,
		racedef: racedef.toJS(),
		uma1: uma1.toJS(),
		uma2: uma2.toJS()
	});
	const enc = new TextEncoder();
	const stringStream = new ReadableStream({
		start(controller) {
			controller.enqueue(enc.encode(json));
			controller.close();
		}
	});
	const zipped = stringStream.pipeThrough(new CompressionStream('gzip'));
	const reader = zipped.getReader();
	let buf = new Uint8Array();
	let result;
	while ((result = await reader.read())) {
		if (result.done) {
			return encodeURIComponent(btoa(String.fromCharCode(...buf)));
		} else {
			buf = new Uint8Array([...buf, ...result.value]);
		}
	}
}

async function deserialize(hash) {
	const zipped = atob(decodeURIComponent(hash));
	const buf = new Uint8Array(zipped.split('').map(c => c.charCodeAt(0)));
	const stringStream = new ReadableStream({
		start(controller) {
			controller.enqueue(buf);
			controller.close();
		}
	});
	const unzipped = stringStream.pipeThrough(new DecompressionStream('gzip'));
	const reader = unzipped.getReader();
	const decoder = new TextDecoder();
	let json = '';
	let result;
	while ((result = await reader.read())) {
		if (result.done) {
			try {
				const o = JSON.parse(json);
				return {
					courseId: o.courseId,
					nsamples: o.nsamples,
					racedef: new RaceParams(o.racedef),
					uma1: new HorseState(o.uma1).set('skills', SortedSet(o.uma1.skills)),
					uma2: new HorseState(o.uma2).set('skills', SortedSet(o.uma2.skills))
				};
			} catch (_) {
				return {
					courseId: DEFAULT_COURSE_ID,
					nsamples: DEFAULT_SAMPLES,
					racedef: new RaceParams(),
					uma1: new HorseState(),
					uma2: new HorseState()
				};
			}
		} else {
			json += decoder.decode(result.value);
		}
	}
}

function App(props) {
	//const [language, setLanguage] = useLanguageSelect();
	const [courseId, setCourseId] = useState(DEFAULT_COURSE_ID);
	const [skillsOpen, setSkillsOpen] = useState(false);
	const [results, setResults] = useState([]);
	const [racedef, setRaceDef] = useState(() => new RaceParams());
	const [nsamples, setSamples] = useState(DEFAULT_SAMPLES);

	function racesetter(prop) {
		return (value) => setRaceDef(racedef.set(prop, value));
	}

	const course = useMemo(() => CourseHelpers.getCourse(courseId), [courseId]);

	const [uma1, setUma1] = useState(() => new HorseState());
	const [uma2, setUma2] = useState(() => new HorseState());

	useEffect(function () {
		if (window.location.hash) {
			deserialize(window.location.hash.slice(1)).then(o => {
				setCourseId(o.courseId);
				setSamples(o.nsamples);
				setRaceDef(o.racedef);
				setUma1(o.uma1);
				setUma2(o.uma2);
			});
		}
	}, []);

	function copyStateUrl(e) {
		e.preventDefault();
		serialize(courseId, nsamples, racedef, uma1, uma2).then(hash => {
			const url = window.location.protocol + '//' + window.location.host + window.location.pathname;
			window.navigator.clipboard.writeText(url + '#' + hash);
		});
	}

	function copyUmaToRight() {
		setUma2(uma1);
	}

	function copyUmaToLeft() {
		setUma1(uma2);
	}

	const strings = {skillnames: {}, tracknames: TRACKNAMES_en};
	const langid = +(props.lang == 'en');
	Object.keys(skillnames).forEach(id => strings.skillnames[id] = skillnames[id][langid]);

	function doComparison() {
		// * 2 because that's the worst case number of runs we have to do if we always guess wrong about
		// which uma is slower
		const standard = new RaceSolverBuilder(nsamples * 2)
			.seed(2615953739)
			.course(course)
			.mood(racedef.mood)
			.ground(racedef.ground)
			.weather(racedef.weather)
			.season(racedef.season)
			.time(racedef.time);
		const compare = standard.fork();
		standard.horse(uma1);
		compare.horse(uma2);
		uma1.skills.forEach(id => standard.addSkill(id));
		uma2.skills.forEach(id => compare.addSkill(id));
		standard.withAsiwotameru(); standard.useDefaultPacer();
		compare.withAsiwotameru(); compare.useDefaultPacer();
		let a = standard.build(), b = compare.build();
		let sign = 1;
		const diff = [];
		for (let i = 0; i < nsamples; ++i) {
			const s1 = a.next().value as RaceSolver;
			const s2 = b.next().value as RaceSolver;

			while (s2.pos < course.distance) {
				s2.step(1/15);
			}
			while (s1.accumulatetime.t < s2.accumulatetime.t) {
				s1.step(1/15);
			}

			// if `standard` is faster than `compare` then the former ends up going past the course distance
			// this is not in itself a problem, but it would overestimate the difference if for example a skill
			// continues past the end of the course. i feel like there are probably some other situations where it would
			// be inaccurate also. if this happens we have to swap them around and run it again.
			if (s2.pos < s1.pos) {
				[b,a] = [a,b];
				sign *= -1;
				--i;  // this one didnt count
			} else {
				diff.push(sign * (s2.pos - s1.pos) / 2.5);
			}
		}
		diff.sort((a,b) => a - b);
		setResults(diff);
	}

	const mid = Math.floor(results.length / 2);
	const median = results.length % 2 == 0 ? (results[mid-1] + results[mid]) / 2 : results[mid];
	const mean = results.reduce((a,b) => a+b, 0) / results.length;

	return (
		<Language.Provider value={props.lang}>
			<IntlProvider definition={strings}>
				<div id="topPane">
					<RaceTrack courseid={courseId} width="960" height="220" />
					<div id="runPane">
						<label for="nsamples">Samples:</label>
						<input type="number" id="nsamples" min="1" max="10000" value={nsamples} onInput={(e) => setSamples(+e.currentTarget.value)} />
						<button id="run" onClick={doComparison} tabindex={1}>COMPARE</button>
						<a href="#" onClick={copyStateUrl}>Copy link</a>
					</div>
					<div id="buttonsRow">
						<TrackSelect key={courseId} courseid={courseId} setCourseid={setCourseId} tabindex={2} />
						<div id="buttonsRowSpace" />
						<GroundSelect value={racedef.ground} set={racesetter('ground')} />
						<WeatherSelect value={racedef.weather} set={racesetter('weather')} />
						<SeasonSelect value={racedef.season} set={racesetter('season')} />
					</div>
				</div>
				{results.length > 0 &&
					<div id="resultsPane">
						<table id="resultsSummary">
							<tfoot>
								<tr>
									<th scope="col">Minimum</th>
									<th scope="col">Maximum</th>
									<th scope="col">Mean</th>
									<th scope="col">Median</th>
								</tr>
							</tfoot>
							<tbody>
								<tr>
									<th>{results[0].toFixed(2)}<span class="unit-basinn">バ身</span></th>
									<th>{results[results.length-1].toFixed(2)}<span class="unit-basinn">バ身</span></th>
									<th>{mean.toFixed(2)}<span class="unit-basinn">バ身</span></th>
									<th>{median.toFixed(2)}<span class="unit-basinn">バ身</span></th>
								</tr>
							</tbody>
						</table>
						<div id="resultsHelp">Positive numbers mean <strong>right</strong> is faster, negative numbers mean <strong>left</strong> is faster.</div>
						<Histogram width={500} height={333} data={results} />
					</div>
				}
				<div id="experimentsWrapper">
					<HorseDef key={uma1.outfitId} title="Umamusume 1" state={uma1} setState={setUma1} courseDistance={course.distance} tabstart={() => 4} />
					<div id="copyUmaButtons">
						<div id="copyUmaToRight" onClick={copyUmaToRight} />
						<div id="copyUmaToLeft" onClick={copyUmaToLeft} />
					</div>
					<HorseDef key={uma2.outfitId} title="Umamusume 2" state={uma2} setState={setUma2} courseDistance={course.distance} tabstart={() => 4 + horseDefTabs()} />
				</div>
			</IntlProvider>
		</Language.Provider>
	);
}

render(<App lang="en-ja" />, document.getElementById('app'));
