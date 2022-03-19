import React, { useRef } from "react";
import PropTypes from "prop-types";
import { useClickAway } from "react-use";
import { useCalendarStyle } from "./style";
import { CalendarHeader, CalendarBody } from "./subcomponents";

export const Calendar = ({ date = new Date(), opened = false, marginBottom = 0, onClickOutside }) => {
	const { calendar } = useCalendarStyle();
	const calendarRef = useRef();

	useClickAway(calendarRef, (onClickOutside ?? (() => null)));

	return (<div className={calendar + ` ${opened ? 'opened' : ''}`}
	             style={{ '--marginBottom': `${marginBottom}px` }}
				ref={calendarRef}>
		<CalendarHeader />

		<div style={{ transform: 'translateX(-5px)' }}>
			<hr style={{ width: '405px' }} />
		</div>

		<CalendarBody date={date} disabled={!opened} />
	</div>);
};

Calendar.propTypes = {
	date: PropTypes.instanceOf(Date),
	opened: PropTypes.bool
};

Calendar.defaultProps = {
	date: new Date(),
	opened: false
}
