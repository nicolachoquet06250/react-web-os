import React from "react";
import { FaIcon, FaIconsType } from "../../FaIcon/FaIcon";

export const CalendarBodyHeader = ({ currentMonth, date, disabled = false }) => {
	const headerStyle = {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center'
	};
	const headerTitleStyle = {color: 'white'};
	const headerButtonsStyle = {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-around',
		alignItems: 'center',
		paddingRight: '15px'
	};
	const flexCentered = {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center'
	};
	const buttonStyle = {
		...flexCentered,
		width: '27px',
		background: 'transparent',
		cursor: 'pointer',
		color: 'white',
		border: 'none',
		fontSize: '20px',
		fontWeight: 'normal'
	};

	return (<div style={headerStyle}>
		<span style={headerTitleStyle}>{currentMonth} {date.getFullYear()}</span>

		<div style={headerButtonsStyle}>
			<button disabled={disabled} style={buttonStyle}>
				<FaIcon type={FaIconsType.SOLID} icon={'angle-up'} />
			</button>

			<button disabled={disabled} style={buttonStyle}>
				<FaIcon type={FaIconsType.SOLID} icon={'angle-down'} />
			</button>
		</div>
	</div>)
};
