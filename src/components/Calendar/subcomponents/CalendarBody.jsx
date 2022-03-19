import { useMonthName } from "../../../hooks/utils/date";
import { useCalendarStyle } from "../style";
import { CalendarBodyHeader } from "./CalendarBodyHeader";
import React from "react";
import { CalendarBodyBlock } from "./CalendarBodyBlock";

export const CalendarBody = ({ date, disabled = false }) => {
	const currentMonth = useMonthName(date);
	const { calendarBody, dayButton } = useCalendarStyle();

	return (<div className={calendarBody}>
		<CalendarBodyHeader date={date} currentMonth={currentMonth} disabled={disabled} />

		<CalendarBodyBlock date={date} disabled={disabled} />
	</div>);
};
