import React from "react";
import { useBattery } from "react-use";
import { useTaskBarStyle } from "../style";

export const BatterySection = () => {
	const { charging, level } = useBattery();
	const { batterySection } = useTaskBarStyle();

	let finalLevel = (level ?? 1) * 100;

	if (finalLevel >= 0 && finalLevel < 15) {
		finalLevel = 0;
	} else if (finalLevel >= 15 && finalLevel <= 35) {
		finalLevel = 25;
	} else if (finalLevel > 35 && finalLevel <= 50) {
		finalLevel = 50;
	} else if (finalLevel > 50 && finalLevel <= 80) {
		finalLevel = 75;
	} else {
		finalLevel = 100;
	}

	return (<div className={batterySection + ` ${charging ? 'charging' : ''} level-${finalLevel}`}
	             title={((level ?? 1) * 100) + '%' + (charging ? "\nEn charge" : '')} />);
};
