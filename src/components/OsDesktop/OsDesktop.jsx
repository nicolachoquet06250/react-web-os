import React from "react";
import { createUseStyles } from "react-jss";
import PropTypes from "prop-types";
import { useOsDesktopStyle } from "./style";

export const OsDesktop = ({ children, background, ...events }) => {
	const { osDesktop } = useOsDesktopStyle({
		background
	});

	return (<div className={osDesktop} {...events}>
		{children}
	</div>);
};

OsDesktop.propTypes = {
	background: PropTypes.string
};
