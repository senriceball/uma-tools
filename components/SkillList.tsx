import { h, Fragment, cloneElement } from 'preact';
import { useState, useContext } from 'preact/hooks';
import { IntlProvider, Text } from 'preact-i18n';

import * as Parser from '../uma-skill-tools/ConditionParser';
import * as Matcher from '../uma-skill-tools/tools/ConditionMatcher';
import { SkillRarity } from '../uma-skill-tools/RaceSolver.ts';

import { Language } from './Language';

import './SkillList.css';

import skills from '../uma-skill-tools/data/skill_data.json';
import skillmeta from '../skill_meta.json';

const STRINGS_ja = Object.freeze({'skillfilters': Object.freeze({
	'white': '白スキル',
	'gold': '金スキル',
	'pink': '進化スキル',
	'unique': '固有スキル',
	'inherit': '継承した固有スキル',
	'nige': '逃げ',
	'senkou': '先行',
	'sasi': '差し',
	'oikomi': '追込',
	'short': '短距離',
	'mile': 'マイル',
	'medium': '中距離',
	'long': '長距離',
	'turf': '芝',
	'dirt': 'ダート',
	'phase0': '序盤',
	'phase1': '中盤',
	'phase2': '終盤',
	'phase3': 'ラストスパート',
	'finalcorner': '最終コーナー',
	'finalstraight': '最終直線'
})});

const STRINGS_en = Object.freeze({'skillfilters': Object.freeze({
	'white': 'White skills',
	'gold': 'Gold skills',
	'pink': 'Evolved skills',
	'unique': 'Unique skills',
	'inherit': 'Inherited uniques',
	'nige': 'Runner',
	'senkou': 'Leader',
	'sasi': 'Betweener',
	'oikomi': 'Chaser',
	'short': 'Short',
	'mile': 'Mile',
	'medium': 'Medium',
	'long': 'Long',
	'turf': 'Turf',
	'dirt': 'Dirt',
	'phase0': 'Opening leg',
	'phase1': 'Middle leg',
	'phase2': 'Final leg',
	'phase3': 'Last spurt',
	'finalcorner': 'Final corner',
	'finalstraight': 'Final straight'
})});

function C(s: string) {
	return Parser.parseAny(Parser.tokenize(s), {conditions: Matcher.mockConditions});
}

const filterOps = Object.freeze({
	'nige': [C('running_style==1')],
	'senkou': [C('running_style==2')],
	'sasi': [C('running_style==3')],
	'oikomi': [C('running_style==4')],
	'short': [C('distance_type==1')],
	'mile': [C('distance_type==2')],
	'medium': [C('distance_type==3')],
	'long': [C('distance_type==4')],
	'turf': [C('ground_type==1')],
	'dirt': [C('ground_type==2')],
	'phase0': [C('phase==0'), C('phase_random==0'), C('phase_firsthalf_random==0'), C('phase_laterhalf_random==0')],
	'phase1': [C('phase==1'), C('phase>=1'), C('phase_random==1'), C('phase_firsthalf_random==1'), C('phase_laterhalf_random==1')],
	'phase2': [C('phase==2'), C('phase>=2'), C('phase_random==2'), C('phase_firsthalf_random==2'), C('phase_laterhalf_random==2'), C('phase_firstquarter_random==2'), C('is_lastspurt==1')],
	'phase3': [C('phase==3'), C('phase_random==3'), C('phase_firsthalf_random==3'), C('phase_laterhalf_random==3')],
	'finalcorner': [C('is_finalcorner==1'), C('is_finalcorner_laterhalf==1'), C('is_finalcorner_random==1')],
	'finalstraight': [C('is_last_straight==1'), C('is_last_straight_onetime==1')]
});

const parsedConditions = {};
Object.keys(skills).forEach(id => {
	parsedConditions[id] = skills[id].alternatives.map(ef => Parser.parse(Parser.tokenize(ef.condition), {conditions: Matcher.mockConditions}));
});

function matchRarity(id, testRarity) {
	const r = skills[id].rarity;
	switch (testRarity) {
	case 'white':
		return r == SkillRarity.White;
	case 'gold':
		return r == SkillRarity.Gold;
	case 'pink':
		return r == SkillRarity.Evolution;
	case 'unique':
		return r > SkillRarity.Gold && r < SkillRarity.Evolution;
	case 'inherit':
		return id[0] == '9';
	default:
		return true;
	}
}

const classnames = Object.freeze(['', 'skill-white', 'skill-gold', 'skill-unique', 'skill-unique', 'skill-unique', 'skill-pink']);

export function Skill(props) {
	return (
		<div class={`skill ${classnames[skills[props.id].rarity]} ${props.selected ? 'selected' : ''}`}>
			<img class="skillIcon" src={`/uma-tools/icons/${skillmeta[props.id].iconId}.png`} />
			<span class="skillName"><Text id={`skillnames.${props.id}`} /></span>
		</div>
	);
}

const iconIdPrefixes = Object.freeze({
	'1001': ['1001'],
	'1002': ['1002', '2018'],
	'1003': ['1003'],
	'1004': ['1004'],
	'1005': ['1005'],
	'1006': ['1006'],
	'2002': ['2002', '2011'],
	'2001': ['2001', '2010', '2014', '2015', '2016', '2019', '2021'],
	'2004': ['2004', '2012', '2017', '2020'],
	'2005': ['2005', '2013'],
	'2006': ['2006'],
	'2009': ['2009'],
	'3001': ['3001'],
	'3002': ['3002'],
	'3004': ['3004'],
	'3005': ['3005'],
	'3007': ['3007'],
	'4001': ['4001']
});

const groups_filters = Object.freeze({
	'rarity': ['white', 'gold', 'pink', 'unique', 'inherit'],
	'icontype': ['1001', '1002', '1003', '1004', '1005', '1006', '4001', '2002', '2001', '2004', '2005', '2006', '2009', '3001', '3002', '3004', '3005', '3007'],
	'strategy': ['nige', 'senkou', 'sasi', 'oikomi'],
	'distance': ['short', 'mile', 'medium', 'long'],
	'surface': ['turf', 'dirt'],
	'location': ['phase0', 'phase1', 'phase2', 'phase3', 'finalcorner', 'finalstraight']
});

export function SkillList(props) {
	const lang = useContext(Language);
	const [ids, setIds] = useState(props.ids);
	const [selectedSet, setSelectedSet] = useState(() => new Map(Array.from(props.selected).map(id => [skillmeta[id].groupId, id])));
	const active = {}, setActive = {};
	Object.keys(groups_filters).forEach(group => {
		active[group] = {};
		setActive[group] = {};
		groups_filters[group].forEach(filter => {
			const [active_, setActive_] = useState(group == 'icontype');
			active[group][filter] = active_;
			setActive[group][filter] = setActive_;
		});
	});

	function toggleSelected(e) {
		const se = e.target.closest('div');
		if (!se.classList.contains('skill')) return;
		e.stopPropagation();
		const id = se.parentElement.dataset.skillid;
		const groupId = skillmeta[id].groupId;
		const selected = selectedSet.get(groupId) == id;
		const newSelected = new Map(selectedSet.entries());
		if (selected) {
			newSelected.delete(groupId);
		} else {
			newSelected.set(groupId, id);
		}
		setSelectedSet(newSelected);
		props.setSelected(new Set(newSelected.values()));
	}

	function updateFilters(e) {
		if (e.target.tagName != 'BUTTON') return;
		e.stopPropagation();
		const group = e.target.parentElement.dataset.filterGroup;
		const filter = e.target.dataset.filter;
		if (group == 'icontype') {
			if (groups_filters.icontype.every(f => active.icontype[f])) {
				groups_filters.icontype.forEach(f => f != filter && setActive.icontype[f](active.icontype[f] = false));
			} else {
				setActive.icontype[filter](active.icontype[filter] = !active.icontype[filter]);
				if (!groups_filters.icontype.some(f => active.icontype[f])) {
					groups_filters.icontype.forEach(f => setActive.icontype[f](active.icontype[f] = true));
				}
			}
		} else {
			setActive[group][filter](active[group][filter]);
			Object.keys(active[group]).forEach(k => setActive[group][k](active[group][k] = !active[group][k] && k == filter))
		}
		setIds(props.ids.filter(id => Object.keys(groups_filters).every(group => {
				const check = groups_filters[group].filter(f => active[group][f]);
				if (check.length == 0) return true;
				if (group == 'rarity') return check.some(f => matchRarity(id, f));
				else if (group == 'icontype') return check.some(f => iconIdPrefixes[f].some(p => skillmeta[id].iconId.startsWith(p)));
				return check.some(f => filterOps[f].some(op => parsedConditions[id].some(alt => Matcher.treeMatch(op, alt))));
			})
		));
	}

	function FilterGroup(props) {
		return <div data-filter-group={props.group}>{props.children.map(c => cloneElement(c, {group: props.group}))}</div>;
	}

	function FilterButton(props) {
		return <button data-filter={props.filter} class={`filterButton ${active[props.group][props.filter] ? 'active' : ''}`}><Text id={`skillfilters.${props.filter}`} /></button>
	}
	
	function IconFilterButton(props) {
		return <button data-filter={props.type} class={`iconFilterButton ${active[props.group][props.type] ? 'active': ''}`} style={`background-image:url(/uma-tools/icons/${props.type}1.png)`}></button>
	}

	const items = ids.map(id => <li key={id} data-skillid={id}><Skill id={id} selected={selectedSet.get(skillmeta[id].groupId) == id} /></li>);

	return (
		<IntlProvider definition={lang == 'ja' ? STRINGS_ja : STRINGS_en}>
			<div class="filterGroups" onClick={updateFilters}>
				<FilterGroup group="rarity">
					<FilterButton filter="white" />
					<FilterButton filter="gold" />
					<FilterButton filter="pink" />
					<FilterButton filter="unique" />
					<FilterButton filter="inherit" />
				</FilterGroup>
				<FilterGroup group="icontype">
					{groups_filters['icontype'].map(t => <IconFilterButton type={t} />)}
				</FilterGroup>
				<FilterGroup group="strategy">
					<FilterButton filter="nige" />
					<FilterButton filter="senkou" />
					<FilterButton filter="sasi" />
					<FilterButton filter="oikomi" />
				</FilterGroup>
				<FilterGroup group="distance">
					<FilterButton filter="short" />
					<FilterButton filter="mile" />
					<FilterButton filter="medium" />
					<FilterButton filter="long" />
				</FilterGroup>
				<FilterGroup group="surface">
					<FilterButton filter="turf" />
					<FilterButton filter="dirt" />
				</FilterGroup>
				<FilterGroup group="location">
					<FilterButton filter="phase0" />
					<FilterButton filter="phase1" />
					<FilterButton filter="phase2" />
					<FilterButton filter="phase3" />
					<FilterButton filter="finalcorner" />
					<FilterButton filter="finalstraight" />
				</FilterGroup>
			</div>
			<ul class="skillList" onClick={toggleSelected}>{items}</ul>
		</IntlProvider>
	);
}
