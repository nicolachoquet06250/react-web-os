import { useEffect, useState } from "react";

export const useDate = () => {
	const [date, setDate] = useState(new Date());

	useEffect(() => {
		const interval = setInterval(() => {
			setDate(new Date());
		}, 1000);

		return () => clearInterval(interval);
	}, []);

	return date;
};

/**
 * @param {Date|null} currentDate
 * @returns {string}
 */
export const useDayName = (currentDate = null) => {
	const date = currentDate ?? useDate();
	const [dayName, setDayName] = useState('');

	const days = [
		'Dimanche',
		'Lundi',
		'Mardi',
		'Mercredi',
		'Jeudi',
		'Vendredi',
		'Samedi',
	];

	useEffect(() => {
		setDayName(days[date.getDay()]);
	}, [date.getDay()]);

	return dayName;
};

/**
 * @param {Date|null} currentDate
 * @returns {string}
 */
export const useMonthName = (currentDate = null) => {
	const date = currentDate ?? useDate();
	const [monthName, setMonthName] = useState('');

	const months = [
		'Janvier',
		'Février',
		'Mars',
		'Avril',
		'Mai',
		'Juin',
		'Juillet',
		'Août',
		'Septembre',
		'Octobre',
		'Novembre',
		'Décembre'
	];

	useEffect(() => {
		setMonthName(months[date.getMonth()]);
	}, [date.getMonth()]);

	return monthName;
};

/**
 * @param {number} year
 * @param {number} month
 * @returns {number|number}
 */
export const useNumberOfDays = (year, month) => {
	const isLeap = ((year % 4) === 0 && ((year % 100) !== 0 || (year % 400) === 0));
	return [31, (isLeap ? 29 : 28), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][month];
};

/**
 * @param {number} year
 * @param {number} month
 * @returns {number|number}
 */
export const useNbDaysBetweenFirstDayOfMonthAndLastMonday = (year, month) => {
	const firstDayOfMonth = useDayName(new Date(`${year}-${month}-01 01:00:00`));

	switch (firstDayOfMonth) {
		case 'Lundi':
			return 0;
		case 'Mardi':
			return 1;
		case 'Mercredi':
			return 2;
		case 'Jeudi':
			return 3;
		case 'Vendredi':
			return 4;
		case 'Samedi':
			return 5;
		case 'Dimanche':
			return 6;
	}
};
