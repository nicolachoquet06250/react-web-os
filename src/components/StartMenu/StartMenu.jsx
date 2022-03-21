import React, { useRef } from "react";
import { useClickAway } from "react-use";
import PropTypes from "prop-types";
import { useStartMenuStyle } from "./style";
import { ListedApplications } from "./subcomponents";

export const StartMenu = ({ opened = false, onClickOutside = () => null }) => {
	const { startMenu } = useStartMenuStyle({ opened });

	const startMenuRef = useRef();

	useClickAway(startMenuRef, onClickOutside);

	return (<div className={startMenu} ref={startMenuRef}>
		<ListedApplications onRunApp={onClickOutside} />
	</div>);
};

StartMenu.propTypes = {
	opened: PropTypes.bool,
	onClickOutside: PropTypes.func
};

StartMenu.defaultProps = {
	opened: false,
	onClickOutside: () => null
};
