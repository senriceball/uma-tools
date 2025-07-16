import { h, Fragment } from 'preact';
import { useState, useMemo } from 'preact/hooks';
import { Text, Localizer } from 'preact-i18n';

import {
	ColumnDef, SortFn, SortingState,
	createSortedRowModel, flexRender, rowSortingFeature, sortFns, tableFeatures, useTable
} from '@tanstack/preact-table';

import { Region, RegionList } from '../uma-skill-tools/Region';
import { CourseData } from '../uma-skill-tools/CourseData';
import { RaceParameters } from '../uma-skill-tools/RaceParameters';
import { getParser } from '../uma-skill-tools/ConditionParser';
import { buildBaseStats, buildSkillData } from '../uma-skill-tools/RaceSolverBuilder';

import type { HorseState } from '../components/HorseDef';
import { runComparison } from './compare';

import './BasinnChart.css';

import skill_meta from '../skill_meta.json';

function skillmeta(id: string) {
	// handle the fake skills (e.g., variations of Sirius unique) inserted by make_skill_data with ids like 100701-1
	return skill_meta[id.split('-')[0]];
}

export function getActivateableSkills(skills: string[], horse: HorseState, course: CourseData, racedef: RaceParameters) {
	const parser = getParser();
	const h2 = buildBaseStats(horse, racedef.mood);
	const wholeCourse = new RegionList();
	wholeCourse.push(new Region(0, course.distance));
	return skills.filter(id => {
		let sd;
		try {
			sd = buildSkillData(h2, racedef, course, wholeCourse, parser, id);
		} catch (_) {
			return false;
		}
		if (sd == null) return false;
		return sd.some(trigger => trigger.regions.length > 0 && trigger.regions[0].start < 9999);
	});
}

export function runBasinnChart(skills: string[], nsamples: number, course: CourseData, racedef: RaceParameters, uma: HorseState, options) {
	return skills.map(id => {
		const withSkill = uma.set('skills', uma.skills.add(id));
		const {results, runData} = runComparison(nsamples, course, racedef, uma, withSkill, options);
		const mid = Math.floor(results.length / 2);
		const median = results.length % 2 == 0 ? (results[mid-1] + results[mid]) / 2 : results[mid];
		const mean = results.reduce((a,b) => a+b, 0) / results.length;
		return {
			id, results, runData,
			min: results[0],
			max: results[results.length-1],
			mean,
			median
		};
	});
}

function formatBasinn(info) {
	return info.getValue().toFixed(2) + ' L';
}

function SkillNameCell(props) {
	return (
		<div class="chartSkillName">
			<img src={`/uma-tools/icons/${skillmeta(props.id).iconId}.png`} />
			<span><Text id={`skillnames.${props.id}`} /></span>
		</div>
	);
}

export function BasinnChart(props) {
	const columns = useMemo(() => [{
		header: () => <span>Skill name</span>,
		accessorKey: 'id',
		cell: (info) => <SkillNameCell id={info.getValue()} />,
	}, {
		header: () => <span>Minimum</span>,
		accessorKey: 'min',
		cell: formatBasinn
	}, {
		header: () => <span>Maximum</span>,
		accessorKey: 'max',
		cell: formatBasinn
	}, {
		header: () => <span>Mean</span>,
		accessorKey: 'mean',
		cell: formatBasinn
	}, {
		header: () => <span>Median</span>,
		accessorKey: 'median',
		cell: formatBasinn
	}], []);

	const [sorting, setSorting] = useState<SortingState>([]);

	const table = useTable({
		_features: tableFeatures({rowSortingFeature}),
		_rowModels: {sortedRowModel: createSortedRowModel(sortFns)},
		columns,
		data: props.data,
		onSortingChange: setSorting,
		state: {sorting}
	});

	return (
		<div class="basinnChartWrapper">
			<table class="basinnChart">
				<thead>
					{table.getHeaderGroups().map(headerGroup => (
						<tr key={headerGroup.id}>
							{headerGroup.headers.map(header => (
								<th key={header.id} colSpan={header.colSpan}>
									{!header.isPlaceholder && (
										<div
											class={`columnHeader ${({
												'asc': 'basinnChartSortedAsc',
												'desc': 'basinnChartSortedDesc',
												'false': ''
											})[header.column.getIsSorted()]}`}
											title={header.column.getCanSort() &&
												({
													'asc': 'Sort ascending',
													'desc': 'Sort descending',
													'false': 'Clear sort'
												})[header.column.getNextSortingOrder()]}
											onClick={header.column.getToggleSortingHandler()}>
											{flexRender(header.column.columnDef.header, header.getContext())}
										</div>
									)}
								</th>
							))}
						</tr>
					))}
				</thead>
				<tbody>
					{table.getRowModel().rows.map(row => (
						<tr key={row.id}>
							{row.getAllCells().map(cell => (
								<td key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</td>
							))}
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
}
