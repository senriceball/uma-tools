import { h, Fragment } from 'preact';
import { useState, useMemo, useEffect, useId } from 'preact/hooks';
import { IntlProvider, Text, Localizer } from 'preact-i18n';
import Autocomplete from 'accessible-autocomplete/preact';
import { Record, Set as ImmSet } from 'immutable';
import { SortedSet } from 'immutable-sorted';

import { SkillList, Skill, ExpandedSkillDetails } from '../components/SkillList';

import { HorseParameters } from '../uma-skill-tools/HorseTypes.ts';

import './HorseDef.css';
import '../node_modules/accessible-autocomplete/dist/accessible-autocomplete.min.css';

import umas from '../umas.json';
import icons from '../icons.json';
import skills from '../uma-skill-tools/data/skill_data.json';

const umaAltIds = Object.keys(umas).flatMap(id => Object.keys(umas[id].outfits));
const umaNamesForSearch = {};
umaAltIds.forEach(id => {
	const u = umas[id.slice(0,4)];
	umaNamesForSearch[id] = (u.outfits[id] + ' ' + u.name[1]).toUpperCase().replace(/\./g, '');
});
function suggestUma(query, populateResults) {
	const q = query.toUpperCase().replace(/\./g, '');
	populateResults(umaAltIds.filter((k) => umaNamesForSearch[k].indexOf(q) > -1));
}

function renderSelection(oid) {
	return oid ? umas[oid.slice(0,4)].name[1] : '';
}

function renderSuggestion(oid) {
	const uid = oid.slice(0,4);
	return `<div class="umaSuggestion"><img src="${icons[uid]}"><span>${umas[uid].outfits[oid]} ${umas[uid].name[1]}</span></div>`;
}

export function UmaSelector(props) {
	const inputId = useId();
	const randomMob = useMemo(() => `/uma-tools/icons/mob/trained_mob_chr_icon_${8000 + Math.floor(Math.random() * 624)}_000001_01.png`, []);
	const u = props.value && umas[props.value.slice(0,4)];
	// TODO write my own autocomplete component that lets you do basic things like pass a tab index to it
	useEffect(() => document.getElementById(inputId).tabIndex = props.tabindex, [props.tabindex]);
	useEffect(function () {
		// AHAHAHA IM LOSING MY GOD DAMN MIND AHAHA
		// CANT EVEN MODIFY THE DAMN SOURCE TO FIX THE THING, NOT SURE WHY
		// SPENT SO MUCH TIME ON THIS GOD AWFUL AUTOCOMPLETE COMPONENT WHAT A MISTAKE
		if (u) window.requestAnimationFrame(() => {
			(document.getElementById(inputId) as HTMLInputElement).value = u.name[1];
			window.requestAnimationFrame(function hahalolxd() {
				const e = document.getElementById(inputId + '__listbox');
				if (e.classList.contains('autocomplete__menu--visible')) {
					e.classList.replace('autocomplete__menu--visible', 'autocomplete__menu--hidden');
					e.blur();
				}
				else window.requestAnimationFrame(hahalolxd);
			});
		});
	}, [props.value]);
	function focus() {
		const input = document.getElementById(inputId) as HTMLInputElement;
		input.select();
		input.click();
		// THIS DID IN FACT DRIVE ME TO MADNESS HOW COULD YOU GUESS
		window.requestAnimationFrame(function fuckeverything() {
			const e = document.getElementById(inputId + '__listbox');
			if (e.classList.contains('autocomplete__menu--hidden')) {
				e.classList.replace('autocomplete__menu--hidden', 'autocomplete__menu--visible');
			}
		});
	}
	return (
		<div class="umaSelector">
			<div class="umaSelectorIconsBox" onClick={focus}>
				<img src={props.value ? icons[props.value] : randomMob} />
				<img src="/uma-tools/icons/utx_ico_umamusume_00.png" />
			</div>
			<div class="umaEpithet"><span>{props.value && u.outfits[props.value]}</span></div>
			<Autocomplete id={inputId} inputClasses="umaSelectInput" source={suggestUma}
				showAllValues={true} confirmOnBlur={false} onConfirm={props.select}
				templates={{suggestion: renderSuggestion, inputValue: renderSelection}} />
		</div>
	);
}

function rankForStat(x: number) {
	if (x > 1200) {
		// over 1200 letter (eg UG) goes up by 100 and minor number (eg UG8) goes up by 10
		return 18 + Math.floor((x - 1200) / 100) * 10 + Math.floor(x / 10) % 10;
	} else if (x >= 1150) {
		return 17; // SS+
	} else if (x >= 1100) {
		return 16; // SS
	} else if (x >= 400) {
		// between 400 and 1100 letter goes up by 100 starting with C (8)
		return 8 + Math.floor((x - 400) / 100);
	} else {
		// between 1 and 400 letter goes up by 50 starting with G+ (0)
		return Math.floor(x / 50);
	}
}

export function Stat(props) {
	return (
		<div class="horseParam">
			<img src={`/uma-tools/icons/statusrank/ui_statusrank_${(100 + rankForStat(props.value)).toString().slice(1)}.png`} />
			<input type="number" min="1" max="1999" value={props.value} tabindex={props.tabindex} onInput={(e) => props.change(+e.currentTarget.value)} />
		</div>
	);
}

const APTITUDES = Object.freeze(['S','A','B','C','D','E','F','G']);
export function AptitudeIcon(props) {
	const idx = 7 - APTITUDES.indexOf(props.a);
	return <img src={`/uma-tools/icons/utx_ico_statusrank_${(100 + idx).toString().slice(1)}.png`} />;
}

export function AptitudeSelect(props){
	const [open, setOpen] = useState(false);
	function setAptitude(e) {
		e.stopPropagation();
		props.setA(e.currentTarget.dataset.horseAptitude);
		setOpen(false);
	}
	return (
		<div class="horseAptitudeSelect" tabindex={props.tabindex} onClick={() => setOpen(!open)} onBlur={setOpen.bind(null, false)}>
			<span><AptitudeIcon a={props.a} /></span>
			<ul style={open ? "display:block" : "display:none"}>
				{APTITUDES.map(a => <li key={a} data-horse-aptitude={a} onClick={setAptitude}><AptitudeIcon a={a} /></li>)}
			</ul>
		</div>
	);
}

export function StrategySelect(props) {
	return (
		<select class="horseStrategySelect" value={props.s} tabindex={props.tabindex} onInput={(e) => props.setS(e.currentTarget.value)}>
			<option value="Nige">逃げ</option>
			<option value="Senkou">先行</option>
			<option value="Sasi">差し</option>
			<option value="Oikomi">追込</option>
			<option value="Oonige">大逃げ</option>
		</select>
	);
}

const nonUniqueSkills = Object.keys(skills).filter(id => skills[id].rarity < 3 || skills[id].rarity > 5);

function assertIsSkill(sid: string): asserts sid is keyof typeof skills {
	console.assert(skills[sid] != null);
}

function uniqueSkillForUma(oid: typeof umaAltIds[number]): keyof typeof skills {
	const i = +oid.slice(1, -2), v = +oid.slice(-2);
	const sid = (100000 + 10000 * (v - 1) + i * 10 + 1).toString();
	assertIsSkill(sid);
	return sid;
}

export class HorseState extends Record({
	outfitId: '',
	speed: 1850,
	stamina: 1200,
	power: 1500,
	guts: 1200,
	wisdom: 1300,
	strategy: 'Senkou',
	distanceAptitude: 'S',
	surfaceAptitude: 'A',
	strategyAptitude: 'A',
	skills: SortedSet<keyof typeof skills>()
}) {}

let totalTabs = 0;
export function horseDefTabs() {
	return totalTabs;
}

export function HorseDef(props) {
	const {state, setState} = props;
	const [skillPickerOpen, setSkillPickerOpen] = useState(false);
	const [expanded, setExpanded] = useState(() => ImmSet());

	const tabstart = props.tabstart();
	let tabi = 0;
	function tabnext() {
		if (++tabi > totalTabs) totalTabs = tabi;
		return tabstart + tabi - 1;
	}

	const umaId = state.outfitId;
	const selectableSkills = useMemo(() => nonUniqueSkills.filter(id => skills[id].rarity != 6 || id.startsWith(umaId)), [umaId]);

	function setter(prop: keyof HorseState) {
		return (x) => setState(state.set(prop, x));
	}
	const setSkills = setter('skills');

	function setUma(id) {
		setState(
			state.set('outfitId', id)
				.set('skills', state.skills.filter(id => skills[id].rarity < 3).add(uniqueSkillForUma(id)))
		);
	}

	function openSkillPicker(e) {
		e.stopPropagation();
		setSkillPickerOpen(true);
	}

	function setSkillsAndClose(ids) {
		setSkills(SortedSet(ids));
		setSkillPickerOpen(false);
	}

	function handleSkillClick(e) {
		e.stopPropagation();
		const se = e.target.closest('.skill, .expandedSkill');
		if (se == null) return;
		if (e.target.classList.contains('skillDismiss')) {
			setSkills(state.skills.delete(se.dataset.skillid))
		} else if (se.classList.contains('expandedSkill')) {
			setExpanded(expanded.delete(se.dataset.skillid));
		} else {
			setExpanded(expanded.add(se.dataset.skillid));
		}
	}

	useEffect(function () {
		window.requestAnimationFrame(() =>
			document.querySelectorAll('.horseExpandedSkill').forEach(e => {
				(e as HTMLElement).style.gridRow = 'span ' + Math.ceil((e.firstChild as HTMLElement).offsetHeight / 64);
			})
		);
	}, [expanded]);

	const skillList = useMemo(function () {
		const u = uniqueSkillForUma(umaId);
		return Array.from(state.skills).map(id =>
			expanded.has(id)
				? <li key={id} class="horseExpandedSkill">
					  <ExpandedSkillDetails id={id} distanceFactor={props.courseDistance} dismissable={id != u} />
				  </li>
				: <li key={id} style="">
					  <Skill id={id} selected={false} dismissable={id != u} />
				  </li>
		);
	}, [state.skills, umaId, expanded, props.courseDistance]);

	return (
		<div class="horseDef">
			<div class="horseDefHeader">{props.title}</div>
			<UmaSelector value={umaId} select={setUma} tabindex={tabnext()} />
			<div class="horseParams">
				<div class="horseParamHeader"><img src="/uma-tools/icons/status_00.png" /><span>Speed</span></div>
				<div class="horseParamHeader"><img src="/uma-tools/icons/status_01.png" /><span>Stamina</span></div>
				<div class="horseParamHeader"><img src="/uma-tools/icons/status_02.png" /><span>Power</span></div>
				<div class="horseParamHeader"><img src="/uma-tools/icons/status_03.png" /><span>Guts</span></div>
				<div class="horseParamHeader"><img src="/uma-tools/icons/status_04.png" /><span>Wisdom</span></div>
				<Stat value={state.speed} change={setter('speed')} tabindex={tabnext()} />
				<Stat value={state.stamina} change={setter('stamina')} tabindex={tabnext()} />
				<Stat value={state.power} change={setter('power')} tabindex={tabnext()} />
				<Stat value={state.guts} change={setter('guts')} tabindex={tabnext()} />
				<Stat value={state.wisdom} change={setter('wisdom')} tabindex={tabnext()} />
			</div>
			<div class="horseAptitudes">
				<div>
					<span>Surface aptitude:</span>
					<AptitudeSelect a={state.surfaceAptitude} setA={setter('surfaceAptitude')} tabindex={tabnext()} />
				</div>
				<div>
					<span>Distance aptitude:</span>
					<AptitudeSelect a={state.distanceAptitude} setA={setter('distanceAptitude')} tabindex={tabnext()} />
				</div>
				<div>
					<span>Strategy:</span>
					<StrategySelect s={state.strategy} setS={setter('strategy')} tabindex={tabnext()} />
				</div>
				<div>
					<span>Strategy aptitude:</span>
					<AptitudeSelect a={state.strategyAptitude} setA={setter('strategyAptitude')} tabindex={tabnext()} />
				</div>
			</div>
			<div class="horseSkillHeader">Skills</div>
			<div class="horseSkillListWrapper" onClick={handleSkillClick}>
				<ul class="horseSkillList">
					{skillList}
					<li key="add">
						<div class="skill addSkillButton" onClick={openSkillPicker} tabindex={tabnext()}>
							<span>+</span>Add Skill
						</div>
					</li>
				</ul>
			</div>
			<div class={`horseSkillPickerOverlay ${skillPickerOpen ? "open" : ""}`} onClick={setSkillPickerOpen.bind(null, false)} />
			<div class={`horseSkillPickerWrapper ${skillPickerOpen ? "open" : ""}`}>
				<SkillList ids={selectableSkills} selected={new Set(state.skills)} setSelected={setSkillsAndClose} />
			</div>
		</div>
	);
}
