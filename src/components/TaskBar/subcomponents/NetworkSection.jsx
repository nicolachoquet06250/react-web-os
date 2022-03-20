import React from "react";
import { useNetworkState } from "react-use";
import { useTaskBarStyle } from "../style";

export const NetworkSection = ({ type }) => {
	const { online } = useNetworkState();
	const { networkSection } = useTaskBarStyle();

	return (<div className={networkSection + ` ${online ? 'online' : 'offline'} ${type}`} />);
};
