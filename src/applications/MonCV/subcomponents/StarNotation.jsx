import React from "react";
import { FaIcon, FaIconsType } from "../../../components/FaIcon/FaIcon";

const getStarType = (i, note) => {
	if (i <= note - 1 || i === note - 0.5) {
		return FaIconsType.SOLID;
	}
	return FaIconsType.REGULAR;
}

const getStarIcon = (i, note) => {
	if (i === note - 0.5) {
		return 'star-half-stroke';
	}
	return 'star';
};

export const StarNotation = ({ note, style = {} }) => (<span style={{ display: 'inline-flex', ...style }}>
	{Array.from(new Array(5).keys()).map(i =>
		(<FaIcon key={i} type={getStarType(i, note)} icon={getStarIcon(i, note)}
		         style={{ color: 'yellow', flex: 1, width: '20px' }} />))}
</span>);
