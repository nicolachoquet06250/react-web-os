import React from "react";
import './FaIcon.css';

export const FaIconsType = {
	SOLID: 'fa-solid',
	REGULAR: 'fa-regular',
	LIGHT: 'fa-light',
	THIN: 'fa-thin',
	DUOTONE: 'fa-duotone',
	BRANDS: 'fa-brands'
};

/**
 * @param {'fa-solid'|'fa-regular'|'fa-light'|'fa-thin'|'fa-duotone'|'fa-brands'} type
 * @param {string} icon
 * @param {string} className
 * @param {CSSProperties} style
 */
export const FaIcon = ({ type, icon, className = '', style = {} }) =>
	(<i className={type + ' fa-' + icon + ' ' + className} style={style} />);
