import { useDayName, useNbDaysBetweenFirstDayOfMonthAndLastMonday, useNumberOfDays } from "./utils/date";

/**
 * @param {Date} selectedDate
 */
export const useCalendarMatrix = selectedDate => {
	const firstDayOfMonth = useDayName(
		new Date(
			`${selectedDate.getFullYear()}-${selectedDate.getMonth() < 10 ? '0' : ''}${selectedDate.getMonth()}-01 01:00:00`
		)
	);
	const daysBeforeFirstDayOfMonth = useNbDaysBetweenFirstDayOfMonthAndLastMonday(
		selectedDate.getFullYear(),
		selectedDate.getMonth()
	);
	const lastMonthDayNumber = useNumberOfDays(
		selectedDate.getMonth() === 0
			? (selectedDate.getFullYear() - 1)
				: selectedDate.getFullYear(),
		selectedDate.getMonth() === 0
			? 12 : (selectedDate.getMonth() - 1)
	);
	const nbDaysInMonth = useNumberOfDays(
		selectedDate.getFullYear(),
		selectedDate.getMonth()
	);

	const days = [[]];

	if (firstDayOfMonth !== 'Lundi' && daysBeforeFirstDayOfMonth) {
		for (let i = 0, day = lastMonthDayNumber; i < daysBeforeFirstDayOfMonth; i++, day--) {
			days[0].push({
				external: true,
				day
			});
		}
	}

	for (const day of Array.from(new Array(nbDaysInMonth).keys())) {
		if (days[days.length - 1].length === 7) {
			days.push([]);
		}

		const lastLineId = days.length - 1;

		days[lastLineId].push({
			external: false,
			day: day + 1
		});
	}

	if (days[days.length - 1].length < 7) {
		for (const day of Array.from(new Array(7 - days[days.length - 1].length).keys())) {
			const lastLineId = days.length - 1;
			days[lastLineId].push({
				external: true,
				day: day + 1
			});
		}
	}

	if (days.length < 6) {
		days.push([]);
		const lastLineId = days.length - 1;

		for (const day of Array.from(new Array(7).keys())) {
			days[lastLineId].push({
				external: true,
				day: days[lastLineId - 1][days[lastLineId - 1].length - 1].day + (day + 1)
			});
		}
	}

	return days;
};
