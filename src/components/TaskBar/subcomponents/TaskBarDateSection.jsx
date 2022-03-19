import React from "react";
import { useDate, useDayName, useMonthName } from "../../../hooks/utils/date";
import { useTaskBarStyle } from "../style";

export const TaskBarDateSection = ({ onClick = () => null }) => {
	const date = useDate();
	const day = useDayName();
	const month = useMonthName();
	const { taskBarDateSection } = useTaskBarStyle({});

	const Hour = () => <span>
		{date.getHours() < 10 ? '0' : ''}{date.getHours()}:{date.getMinutes() < 10 ? '0' : ''}{date.getMinutes()}:{date.getSeconds() < 10 ? '0' : ''}{date.getSeconds()}
	</span>;
	const Date = () => <span>
		{date.getDate() < 10 ? '0' : ''}{date.getDate()}/{date.getMonth() + 1 < 10 ? '0' : ''}{date.getMonth() + 1}/{date.getFullYear()}
	</span>;

	return (<button className={taskBarDateSection}
	             title={day + ' ' + date.getDate() + ' ' + month + ' ' + date.getFullYear()}
	             onClick={onClick}>
		<Hour />
		<Date />
	</button>);
};
