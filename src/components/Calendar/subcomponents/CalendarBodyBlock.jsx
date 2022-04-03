import { useCalendarMatrix } from "../../../hooks/calendar";
import React from "react";
import { useCalendarStyle } from "../style";

export const CalendarBodyBlock = ({ date, disabled = false }) => {
	const currentDate = new Date();
	const { dayButton } = useCalendarStyle();

	const days = ['lu', 'ma', 'me', 'je', 've', 'sa', 'di'];

	const dayNumbers = useCalendarMatrix(date);

	return (<div style={{ marginRight: '10px' }}>
		<table style={{ width: '100%' }}>
			<thead>
			<tr>
				{days.map(d => (<th key={d} style={{ fontWeight: 'normal' }}> {d} </th>))}
			</tr>
			</thead>

			<tbody>
			{dayNumbers.map((week, i) => (<tr key={i}>
				{week.map((day, j) => {
					const isActive = currentDate.getFullYear() === date.getFullYear()
						&& currentDate.getDate() === day.day
						&& currentDate.getMonth() === date.getMonth();

					const isExternal = day.external;

					const activeClass = isActive ? 'active' : '';
					const externalClass = isExternal ? 'external' : '';

					return (<td key={j} style={{ textAlign: 'center' }}>
						<button type={'button'} className={dayButton + ` ${activeClass} ${externalClass}`} disabled={isExternal || disabled}>
							{day.day}
						</button>
					</td>)
				})}
			</tr>))}
			</tbody>
		</table>
	</div>);
};
