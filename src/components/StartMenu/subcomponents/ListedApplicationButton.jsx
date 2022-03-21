import { useStartMenuStyle } from "../style";
import React from "react";
import { useControlApplication, usePinApplications, useRegisterPinApp } from "../../../hooks/applications";

export const ListedApplicationButton = ({ title, icon, onRun = () => null }) => {
	const { categorizedApplication } = useStartMenuStyle({});
	const { run } = useControlApplication();
	// const pinnedApps = usePinApplications();
	// const { register, unregister } = useRegisterPinApp(title);

	const onRunApp = () => {
		run(title);
		onRun(title);
	}

	return (<button className={categorizedApplication} onClick={onRunApp}>
		<img src={icon} alt={`${title} icon`} />

		<span>{title}</span>
	</button>);
};
