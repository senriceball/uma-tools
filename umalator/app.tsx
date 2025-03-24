import { h, Fragment, render } from 'preact';
import { useState, useReducer, useMemo, useEffect, useRef, useCallback } from 'preact/hooks';
import { Text, IntlProvider } from 'preact-i18n';
import { Record } from 'immutable';
import * as d3 from 'd3';

import { CourseHelpers } from '../uma-skill-tools/CourseData';
import { RaceSolver } from '../uma-skill-tools/RaceSolver';
import { RaceSolverBuilder } from '../uma-skill-tools/RaceSolverBuilder';
import { Mood, GroundCondition, Weather, Season, Time, Grade } from '../uma-skill-tools/RaceParameters';

import { Language, LanguageSelect, useLanguageSelect } from '../components/Language';
import { SkillList, Skill, STRINGS_en as SKILL_STRINGS_en } from '../components/SkillList';
import { RaceTrack, TrackSelect, RegionDisplayType } from '../components/RaceTrack';
import { HorseState, SkillSet, HorseDef, horseDefTabs } from '../components/HorseDef';
import { TRACKNAMES_ja, TRACKNAMES_en } from '../strings/common.ts';

import skillnames from '../uma-skill-tools/data/skillnames.json';
import skill_meta from '../skill_meta.json';

function skillmeta(id: string) {
	// handle the fake skills (e.g., variations of Sirius unique) inserted by make_skill_data with ids like 100701-1
	return skill_meta[id.split('-')[0]];
}

import './app.css';

function id(x) { return x; }

function binSearch(a: number[], x: number) {
	let lo = 0, hi = a.length - 1;
	if (x < a[0]) return 0;
	if (x > a[hi]) return hi - 1;
	while (lo <= hi) {
		const mid = Math.floor((lo + hi) / 2);
		if (x < a[mid]) {
			hi = mid - 1;
		} else if (x > a[mid]) {
			lo = mid + 1;
		} else {
			return mid;
		}
	}
	return Math.abs(a[lo] - x) < Math.abs(a[hi] - x) ? lo : hi;
}

function TimeOfDaySelect(props) {
	function click(e) {
		e.stopPropagation();
		if (!('timeofday' in e.target.dataset)) return;
		props.set(+e.target.dataset.timeofday);
	}
	// + 2 because for some reason the icons are 00-02 (noon/evening/night) but the enum values are 1-4 (morning(?) noon evening night)
	return (
		<div class="timeofdaySelect" onClick={click}>
			{Array(3).fill(0).map((_,i) =>
				<img src={`/uma-tools/icons/utx_ico_timezone_0${i}.png`} title={SKILL_STRINGS_en.skilldetails.time[i+2]}
					class={i+2 == props.value ? 'selected' : ''} data-timeofday={i+2} />)}
		</div>
	);
}

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
				<img src={`/uma-tools/icons/utx_ico_weather_0${i}.png`} title={SKILL_STRINGS_en.skilldetails.weather[i+1]}
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
				<img src={`/uma-tools/icons/utx_txt_season_0${i}.png`} title={SKILL_STRINGS_en.skilldetails.season[i+1]}
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

function VelocityLines(props) {
	const axes = useRef(null);
	const data = props.data;
	const x = d3.scaleLinear().domain([0,props.courseDistance]).range([0,props.width]);
	const y = data && d3.scaleLinear().domain([0,d3.max(data.v, v => d3.max(v))]).range([props.height,0]);
	useEffect(function () {
		if (axes.current == null) return;
		const g = d3.select(axes.current);
		g.selectAll('*').remove();
		g.append('g').attr('transform', `translate(${props.xOffset},${props.height+5})`).call(d3.axisBottom(x));
		if (data) {
			g.append('g').attr('transform', `translate(${props.xOffset},4)`).call(d3.axisLeft(y));
		}
	}, [props.data, props.width, props.height]);
	const colors = ['#2a77c5', '#c52a2a'];
	return (
		<Fragment>
			<g transform={`translate(${props.xOffset},5)`}>
				{data && data.v.map((v,i) =>
					<path fill="none" stroke={colors[i]} stroke-width="2.5" d={
						d3.line().x(j => x(data.p[i][j])).y(j => y(v[j]))(data.p[i].map((_,j) => j))
					} />
				)}
			</g>
			<g ref={axes} />
		</Fragment>
	);
}

const NO_SHOW = Object.freeze([
	'10011', '10012', '10016', '10021', '10022', '10026', '10031', '10032', '10036',
	'10041', '10042', '10046', '10051', '10052', '10056', '10061', '10062', '10066',
	'40011',
	'20061', '20062', '20066'
]);

class RaceParams extends Record({
	mood: 2 as Mood,
	ground: GroundCondition.Good,
	weather: Weather.Sunny,
	season: Season.Spring,
	time: Time.Midday,
	grade: Grade.G1
}) {}

const DEFAULT_COURSE_ID = 10101;
const DEFAULT_SAMPLES = 500;

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
					uma1: new HorseState(o.uma1).set('skills', SkillSet(o.uma1.skills)),
					uma2: new HorseState(o.uma2).set('skills', SkillSet(o.uma2.skills))
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

function runComparison(nsamples, course, racedef, uma1, uma2, options) {
	// * 2 because that's the worst case number of runs we have to do if we always guess wrong about which uma is slower
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
	standard.withAsiwotameru(); compare.withAsiwotameru();
	if (options.usePosKeep) {
		standard.useDefaultPacer(); compare.useDefaultPacer();
	}
	const skillPos1 = new Map(), skillPos2 = new Map();
	standard.onSkillActivate((s,id) => id != 'asitame' && skillPos1.set(id, [s.pos, 0]))
	standard.onSkillDeactivate((s,id) => id != 'asitame' && (skillPos1.get(id)[1] = s.pos));
	compare.onSkillActivate((s,id) => id != 'asitame' && skillPos2.set(id, [s.pos, 0]))
	compare.onSkillDeactivate((s,id) => id != 'asitame' && (skillPos2.get(id)[1] = s.pos));
	let a = standard.build(), b = compare.build();
	let sign = 1;
	const diff = [];
	let min = Infinity, max = -1, estMean, estMedian, bestMeanDiff = Infinity, bestMedianDiff = Infinity;
	let minrun, maxrun, meanrun, medianrun;
	const sampleCutoff = Math.max(Math.floor(nsamples * 0.8), nsamples - 200);
	for (let i = 0; i < nsamples; ++i) {
		const s1 = a.next().value as RaceSolver;
		const s2 = b.next().value as RaceSolver;
		const data = {t: [[], []], p: [[], []], v: [[], []], sk: [null,null]};

		while (s2.pos < course.distance) {
			s2.step(1/15);
			data.t[1].push(s2.accumulatetime.t);
			data.p[1].push(s2.pos);
			data.v[1].push(s2.currentSpeed + (s2.modifiers.currentSpeed.acc + s2.modifiers.currentSpeed.err));
		}
		data.sk[1] = new Map(skillPos2);
		skillPos2.clear();

		while (s1.accumulatetime.t < s2.accumulatetime.t) {
			s1.step(1/15);
			data.t[0].push(s1.accumulatetime.t);
			data.p[0].push(s1.pos);
			data.v[0].push(s1.currentSpeed + (s1.modifiers.currentSpeed.acc + s1.modifiers.currentSpeed.err));
		}
		// run the rest of the way to have data for the chart
		const pos1 = s1.pos;
		while (s1.pos < course.distance) {
			s1.step(1/15);
			data.t[0].push(s1.accumulatetime.t);
			data.p[0].push(s1.pos);
			data.v[0].push(s1.currentSpeed + (s1.modifiers.currentSpeed.acc + s1.modifiers.currentSpeed.err));
		}
		data.sk[0] = new Map(skillPos1);
		skillPos1.clear();

		// if `standard` is faster than `compare` then the former ends up going past the course distance
		// this is not in itself a problem, but it would overestimate the difference if for example a skill
		// continues past the end of the course. i feel like there are probably some other situations where it would
		// be inaccurate also. if this happens we have to swap them around and run it again.
		if (s2.pos < pos1) {
			[b,a] = [a,b];
			sign *= -1;
			--i;  // this one didnt count
		} else {
			const basinn = sign * (s2.pos - pos1) / 2.5;
			diff.push(basinn);
			if (basinn < min) {
				min = basinn;
				minrun = data;
			}
			if (basinn > max) {
				max = basinn;
				maxrun = data;
			}
			if (i == sampleCutoff) {
				diff.sort((a,b) => a - b);
				estMean = diff.reduce((a,b) => a + b) / diff.length;
				const mid = Math.floor(diff.length / 2);
				estMedian = mid > 0 && diff.length % 2 == 0 ? (diff[mid-1] + diff[mid]) / 2 : diff[mid];
			}
			if (i >= sampleCutoff) {
				const meanDiff = Math.abs(basinn - estMean), medianDiff = Math.abs(basinn - estMedian);
				if (meanDiff < bestMeanDiff) {
					bestMeanDiff = meanDiff;
					meanrun = data;
				}
				if (medianDiff < bestMedianDiff) {
					bestMedianDiff = medianDiff;
					medianrun = data;
				}
			}
		}
	}
	diff.sort((a,b) => a - b);
	return {results: diff, runData: {minrun, maxrun, meanrun, medianrun}};
}

const EMPTY_RESULTS_STATE = {courseId: DEFAULT_COURSE_ID, results: [], runData: null, chartData: null, displaying: ''};
function updateResultsState(state: typeof EMPTY_RESULTS_STATE, o: number | string | {results: any, runData: any}) {
	if (typeof o == 'number') {
		return {
			courseId: o,
			results: [],
			runData: null,
			chartData: null,
			displaying: ''
		};
	} else if (typeof o == 'string') {
		return {
			courseId: state.courseId,
			results: state.results,
			runData: state.runData,
			chartData: state.runData[o],
			displaying: o
		};
	} else {
		return {
			courseId: state.courseId,
			results: o.results,
			runData: o.runData,
			chartData: o.runData.meanrun,
			displaying: 'meanrun'
		};
	}
}

function App(props) {
	//const [language, setLanguage] = useLanguageSelect();
	const [skillsOpen, setSkillsOpen] = useState(false);
	const [racedef, setRaceDef] = useState(() => new RaceParams());
	const [nsamples, setSamples] = useState(DEFAULT_SAMPLES);
	const [usePosKeep, togglePosKeep] = useReducer((b,_) => !b, true);
	const [{courseId, results, runData, chartData, displaying}, setSimState] = useReducer(updateResultsState, EMPTY_RESULTS_STATE);
	const setCourseId = setSimState;
	const setResults = setSimState;
	const setChartData = setSimState;

	function racesetter(prop) {
		return (value) => setRaceDef(racedef.set(prop, value));
	}

	const course = useMemo(() => CourseHelpers.getCourse(courseId), [courseId]);

	const [uma1, setUma1] = useState(() => new HorseState());
	const [uma2, setUma2] = useState(() => new HorseState());
	const [currentIdx, setCurrentIdx] = useState(0);

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
		setResults(runComparison(nsamples, course, racedef, uma1, uma2, {usePosKeep}));
	}

	function rtMouseMove(pos) {
		if (chartData == null) return;
		document.getElementById('rtMouseOverBox').style.display = 'block';
		const x = pos * course.distance;
		const i0 = binSearch(chartData.p[0], x), i1 = binSearch(chartData.p[1], x);
		document.getElementById('rtV1').textContent = chartData.v[0][i0].toFixed(2) + ' m/s  t=' + chartData.t[0][i0].toFixed(2) + ' s';
		document.getElementById('rtV2').textContent = chartData.v[1][i1].toFixed(2) + ' m/s  t=' + chartData.t[1][i1].toFixed(2) + ' s';
	}

	function rtMouseLeave() {
		document.getElementById('rtMouseOverBox').style.display = 'none';
	}

	const mid = Math.floor(results.length / 2);
	const median = results.length % 2 == 0 ? (results[mid-1] + results[mid]) / 2 : results[mid];
	const mean = results.reduce((a,b) => a+b, 0) / results.length;

	const colors = [
		{stroke: 'rgb(42, 119, 197)', fill: 'rgba(42, 119, 197, 0.7)'},
		{stroke: 'rgb(197, 42, 42)', fill: 'rgba(197, 42, 42, 0.7)'}
	];
	const skillActivations = chartData == null ? [] : chartData.sk.flatMap((a,i) => {
		return a.keys().flatMap(id => {
			if (NO_SHOW.indexOf(skillmeta(id).iconId) > -1) return [];
			else return [{
				type: RegionDisplayType.Textbox,
				color: colors[i],
				text: skillnames[id][0],
				regions: [{start: a.get(id)[0], end: a.get(id)[1]}]
			}];
		}).toArray();
	});

	const umaTabs = (
		<Fragment>
			<div class={`umaTab ${currentIdx == 0 ? 'selected' : ''}`} onClick={() => setCurrentIdx(0)}>Umamusume 1</div>
			<div class={`umaTab ${currentIdx == 1 ? 'selected' : ''}`} onClick={() => setCurrentIdx(1)}>Umamusume 2</div>
		</Fragment>
	);

	return (
		<Language.Provider value={props.lang}>
			<IntlProvider definition={strings}>
				<div id="topPane" class={chartData ? 'hasResults' : ''}>
					<RaceTrack courseid={courseId} width={960} height={240} xOffset={20} yOffset={15} yExtra={20} mouseMove={rtMouseMove} mouseLeave={rtMouseLeave} regions={skillActivations}>
						<VelocityLines data={chartData} courseDistance={course.distance} width={960} height={250} xOffset={20} />
						<g id="rtMouseOverBox" style="display:none">
							<text id="rtV1" x="25" y="10" fill="#2a77c5" font-size="10px"></text>
							<text id="rtV2" x="25" y="20" fill="#c52a2a" font-size="10px"></text>
						</g>
					</RaceTrack>
					<div id="runPane">
						<label for="nsamples">Samples:</label>
						<input type="number" id="nsamples" min="1" max="10000" value={nsamples} onInput={(e) => setSamples(+e.currentTarget.value)} />
						<div>
							<label for="poskeep">Simulate pos keep</label>
							<input type="checkbox" id="poskeep" checked={usePosKeep} onClick={togglePosKeep} />
						</div>
						<button id="run" onClick={doComparison} tabindex={1}>COMPARE</button>
						<a href="#" onClick={copyStateUrl}>Copy link</a>
					</div>
					<div id="buttonsRow">
						<TrackSelect key={courseId} courseid={courseId} setCourseid={setCourseId} tabindex={2} />
						<div id="buttonsRowSpace" />
						<TimeOfDaySelect value={racedef.time} set={racesetter('time')} />
						<div>
							<GroundSelect value={racedef.ground} set={racesetter('ground')} />
							<WeatherSelect value={racedef.weather} set={racesetter('weather')} />
						</div>
						<SeasonSelect value={racedef.season} set={racesetter('season')} />
					</div>
				</div>
				{results.length > 0 &&
					<div id="resultsPaneWrapper">
						<div id="resultsPane">
							<table id="resultsSummary">
								<tfoot>
									<tr>
										{Object.entries({
											minrun: ['Minimum', 'Set chart display to the run with minimum bashin difference'],
											maxrun: ['Maximum', 'Set chart display to the run with maximum bashin difference'],
											meanrun: ['Mean', 'Set chart display to a run representative of the mean bashin difference'],
											medianrun: ['Median', 'Set chart display to a run representative of the median bashin difference']
										}).map(([k,label]) =>
											<th scope="col" class={displaying == k ? 'selected' : ''} title={label[1]} onClick={() => setChartData(k)}>{label[0]}</th>
										)}
									</tr>
								</tfoot>
								<tbody>
									<tr>
										<td>{results[0].toFixed(2)}<span class="unit-basinn">バ身</span></td>
										<td>{results[results.length-1].toFixed(2)}<span class="unit-basinn">バ身</span></td>
										<td>{mean.toFixed(2)}<span class="unit-basinn">バ身</span></td>
										<td>{median.toFixed(2)}<span class="unit-basinn">バ身</span></td>
									</tr>
								</tbody>
							</table>
							<div id="resultsHelp">Negative numbers mean <strong style="color:#2a77c5">Umamusume 1</strong> is faster, positive numbers mean <strong style="color:#c52a2a">Umamusume 2</strong> is faster.</div>
							<Histogram width={500} height={333} data={results} />
						</div>
						<div id="skillTables">
							{chartData.sk[0].size > 0 &&
								<table>
									<caption style="color:#2a77c5">Umamusume 1</caption>
									<tbody>
										{chartData.sk[0].entries().map(([id,pos]) =>
											<tr>
												<td>{skillnames[id][0]}</td>
												<td>{`${pos[0].toFixed(2)} m – ${pos[1].toFixed(2)} m`}</td>
											</tr>).toArray()}
									</tbody>
								</table>}
							{chartData.sk[1].size > 0 &&
								<table>
									<caption style="color:#c52a2a">Umamusume 2</caption>
									<tbody>
										{chartData.sk[1].entries().map(([id,pos]) =>
											<tr>
												<td>{skillnames[id][0]}</td>
												<td>{`${pos[0].toFixed(2)} m – ${pos[1].toFixed(2)} m`}</td>
											</tr>).toArray()}
									</tbody>
								</table>}
						</div>
					</div>
				}
				<div id="currentUma">
					<div class={currentIdx == 0 ? 'selected' : ''}>
						<HorseDef key={uma1.outfitId} state={uma1} setState={setUma1} courseDistance={course.distance} tabstart={() => 4}>
							{umaTabs}
						</HorseDef>
					</div>
					<div class={currentIdx == 1 ? 'selected' : ''}>
						<HorseDef key={uma2.outfitId} state={uma2} setState={setUma2} courseDistance={course.distance} tabstart={() => 4}>
							{umaTabs}
						</HorseDef>
					</div>
				</div>
			</IntlProvider>
		</Language.Provider>
	);
}
				/*<div id="experimentsWrapper">
					<HorseDef key={uma1.outfitId} title="Umamusume 1" state={uma1} setState={setUma1} courseDistance={course.distance} tabstart={() => 4} />
					<div id="copyUmaButtons">
						<div id="copyUmaToRight" onClick={copyUmaToRight} />
						<div id="copyUmaToLeft" onClick={copyUmaToLeft} />
					</div>
					<HorseDef key={uma2.outfitId} title="Umamusume 2" state={uma2} setState={setUma2} courseDistance={course.distance} tabstart={() => 4 + horseDefTabs()} />
				</div>*/

render(<App lang="en-ja" />, document.getElementById('app'));
