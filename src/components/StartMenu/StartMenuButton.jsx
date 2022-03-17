import React from "react";
import { useStartMenuStyle } from "./style";
import logo from "../../assets/images/Logo WebOS.png";
import PropTypes from "prop-types";

export const StartMenuButton = ({ onClick = () => null }) => {
	const { startMenuButton } = useStartMenuStyle({});

	return (<button className={startMenuButton} onClick={onClick}>
		<img src={logo} alt={'webos logo'} />
	</button>);
};

StartMenuButton.propTypes = {
	onClick: PropTypes.func
};

StartMenuButton.defaultProps = {
	onClick: () => null
};
