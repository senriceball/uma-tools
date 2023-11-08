import { h, render } from 'preact';
import { useState } from 'preact/hooks';
import { Text, IntlProvider } from 'preact-i18n';

import { Language, LanguageSelect, defaultLanguage } from '../components/Language';
import { SkillList } from '../components/SkillList';
import { RaceTrack, TrackSelect, RegionDisplayType } from '../components/RaceTrack';

import skills from '../uma-skill-tools/data/skill_data.json';
import skillnames from '../uma-skill-tools/data/skillnames.json';

import { Region, RegionList } from '../uma-skill-tools/Region';
import { CourseData, CourseHelpers } from '../uma-skill-tools/CourseData';
import { HorseParameters, Strategy, Aptitude } from '../uma-skill-tools/HorseTypes';
import { buildSkillData, conditionsWithActivateCountsAsRandom } from '../uma-skill-tools/RaceSolverBuilder';
import { ImmediatePolicy } from '../uma-skill-tools/ActivationSamplePolicy';
import { immediate, noopImmediate } from '../uma-skill-tools/ActivationConditions';

const horse = Object.freeze({
	speed: 2000,
	stamina: 2000,
	power: 2000,
	guts: 2000,
	wisdom: 2000,
	strategy: Strategy.Nige,
	distanceAptitude: Aptitude.S,
	surfaceAptitude: Aptitude.A,
	strategyAptitde: Aptitude.A,
	rawStamina: 2000
});

function baseSpeed(distance: number) {
	return 20.0 - (distance - 2000) / 1000.0;
}

const conditions = Object.freeze(Object.assign({}, conditionsWithActivateCountsAsRandom, {
	accumulatetime: immediate({
		filterGte(regions: RegionList, t: number, course: CourseData, _: HorseParameters) {
			// obviously we can't know this condition without actually running the race, and the actual distance traveled depends on the uma's strategy, power stat,
			// skills (opening leg accel skills), and other things that aren't available in a static environment like here. so intead guess approximately how far we
			// travel in t seconds by just using the course base speed.
			// this will typically be a bit high since umas need to accelerate and non-nige strategies have lower than 1.0 StrategyPhaseCoefficient for phase 0
			// except for oonige in which case it could be a bit low since their phase 0 speed is so high
			const estimate = new Region(baseSpeed(course.distance) * t, course.distance);
			return regions.rmap(r => r.intersect(estimate));
		}
	}),
	running_style: noopImmediate
}));

function regionsForSkill(course: CourseData, skillId: string) {
	const wholeCourse = new RegionList();
	wholeCourse.push(new Region(0, course.distance));
	try {
    	const sd = buildSkillData(horse, course, wholeCourse, conditions, skillId);
    	if (sd == null) return {type: RegionDisplayType.Immedate, regions: []};
    	return {
    		type: sd.samplePolicy == ImmediatePolicy ? RegionDisplayType.Immediate : RegionDisplayType.Regions,
    		regions: sd.regions
    	};
	} catch (e) {
	    return {type: RegionDisplayType.Immedate, regions: []};
	}
}

const DefaultCourseId = 10805;

function App(props) {
	const [language, setLanguage] = useState(defaultLanguage());
	const [courseId, setCourseId] = useState(DefaultCourseId);
	const [selectedSkills, setSelectedSkills] = useState(new Set());

	const skilldefs = {skillnames: {}};
	const langid = +(language == 'en');
	Object.keys(skillnames).forEach(id => skilldefs.skillnames[id] = skillnames[id][langid]);
	const course = CourseHelpers.getCourse(courseId);
	return (
		<Language.Provider value={language}>
			<IntlProvider definition={skilldefs}>
				<LanguageSelect language={language} setLanguage={setLanguage} />
				<TrackSelect courseid={courseId} setCourseid={setCourseId} />
				<RaceTrack courseid={courseId} width="800" height="220" regions={Array.from(selectedSkills).map(id => regionsForSkill(course, id))} />
				<SkillList ids={Object.keys(skills)} selected={selectedSkills} setSelected={setSelectedSkills} />
			</IntlProvider>
		</Language.Provider>
	);
}

render(<App lang="ja" />, document.getElementById('app'));
