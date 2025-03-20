import { h, render } from 'preact';
import { useState, useMemo, useEffect } from 'preact/hooks';
import { Text, IntlProvider } from 'preact-i18n';

import { CourseHelpers } from '../uma-skill-tools/CourseData';
import { RaceSolver } from '../uma-skill-tools/RaceSolver';
import { RaceSolverBuilder } from '../uma-skill-tools/RaceSolverBuilder';

import { Language, LanguageSelect, useLanguageSelect } from '../components/Language';
import { SkillList, Skill } from '../components/SkillList';
import { RaceTrack, TrackSelect, RegionDisplayType } from '../components/RaceTrack';
import { HorseState, HorseDef, horseDefTabs } from '../components/HorseDef';
import { TRACKNAMES_ja, TRACKNAMES_en } from '../strings/common.ts';

import skillnames from '../uma-skill-tools/data/skillnames.json';

import './app.css';

function App(props) {
	//const [language, setLanguage] = useLanguageSelect();
	const [courseId, setCourseId] = useState(10101);
	const [skillsOpen, setSkillsOpen] = useState(false);
	const [results, setResults] = useState([]);

	const course = useMemo(() => CourseHelpers.getCourse(courseId), [courseId]);

	const [uma1, setUma1] = useState(() => new HorseState());
	const [uma2, setUma2] = useState(() => new HorseState());

	const strings = {skillnames: {}, tracknames: TRACKNAMES_en};
	const langid = +(props.lang == 'en');
	Object.keys(skillnames).forEach(id => strings.skillnames[id] = skillnames[id][langid]);

	function doComparison() {
		const nsamples = 2000;
		const base = new RaceSolverBuilder(nsamples)
			.course(course)
			.seed(2615953739);
		const compare = base.fork();
		base.horse(uma1);
		compare.horse(uma2);
		uma1.skills.forEach(id => base.addSkill(id));
		uma2.skills.forEach(id => compare.addSkill(id));
		base.withAsiwotameru();
		compare.withAsiwotameru();
		const a = base.build(), b = compare.build();
		const diff = [];
		for (let i = 0; i < nsamples; ++i) {
			const s1 = a.next().value as RaceSolver;
			const s2 = b.next().value as RaceSolver;

			while (s1.pos < course.distance) {
				s1.step(1/15);
			}
			while (s2.accumulatetime.t < s1.accumulatetime.t) {
				s2.step(1/15);
			}

			diff.push((s1.pos - s2.pos) / 2.5);
		}
		diff.sort((a,b) => a - b);
		setResults(diff);
	}

	const mid = Math.floor(results.length / 2);
	const median = results.length % 2 == 0 ? (results[mid-1] + results[mid]) / 2 : results[mid];
	const mean = results.reduce((a,b) => a+b) / results.length;

	return (
		<Language.Provider value={props.lang}>
			<IntlProvider definition={strings}>
				<div id="topPane">
					<RaceTrack courseid={courseId} width="960" height="220" />
					<div id="runPane">
						<button id="run" onClick={doComparison} tabindex={1}>COMPARE</button>
					</div>
					<div id="buttonsRow">
						<TrackSelect courseid={courseId} setCourseid={setCourseId} tabindex={2} />
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
									<th>{results[0].toFixed(2)}</th>
									<th>{results[results.length-1].toFixed(2)}</th>
									<th>{mean.toFixed(2)}</th>
									<th>{median.toFixed(2)}</th>
								</tr>
							</tbody>
						</table>
						<div id="histogram">
						</div>
					</div>
				}
				<div id="experimentsWrapper">
					<HorseDef title="Umamusume 1" state={uma1} setState={setUma1} courseDistance={course.distance} tabstart={() => 4} />
					<HorseDef title="Umamusume 2" state={uma2} setState={setUma2} courseDistance={course.distance} tabstart={() => 4 + horseDefTabs()} />
				</div>
			</IntlProvider>
		</Language.Provider>
	);
}

render(<App lang="en-ja" />, document.getElementById('app'));
