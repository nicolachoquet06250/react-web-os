import { useDate, useDayName, useMonthName } from "../../../hooks/utils/date";
import React from "react";
import { useCalendarStyle } from "../style";

export const CalendarHeader = () => {
	const date = useDate();
	const currentMonth = useMonthName();
	const currentDay = useDayName();
	const { calendarHeader } = useCalendarStyle();

	return (<div className={calendarHeader}>
		<h1>{date.getHours() < 10 ? '0' : ''}{date.getHours()}:{date.getMinutes() < 10 ? '0' : ''}{date.getMinutes()}:{date.getSeconds() < 10 ? '0' : ''}{date.getSeconds()}</h1>
		<span>{currentDay} {date.getDate()} {currentMonth} {date.getFullYear()}</span>
	</div>);
};
