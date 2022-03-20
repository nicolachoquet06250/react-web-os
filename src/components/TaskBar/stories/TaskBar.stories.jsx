import React, { useEffect } from "react";
import { TaskBar } from "../TaskBar.jsx";
import { OsDesktop } from "../../OsDesktop/OsDesktop.jsx";
import { useRegisterApps } from "../../../hooks/app-registration";
import {
	useApplicationsInstances,
	useControlApplication,
	useRunningApplications,
	useTaskbarPinApplications
} from "../../../hooks/applications";
import { RunningApplicationList } from "../../OsDesktop/subcomponents";

export default {
	title: 'App/UI/TaskBar',
	component: TaskBar,
	parameters: {
		// More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
		layout: 'fullscreen',
	},
};

const background = 'https://lafibre.info/images/smileys/201604_warty-final-ubuntu.png';

const WithRunningAppsTemplate = (args) => {
	const taskbarPinApps = useTaskbarPinApplications();
	const [runningApps, resetRunningApps] = useRunningApplications();
	const appsInstances = useApplicationsInstances();
	const { run, stop } = useControlApplication();

	// enregistrement des applications
	useRegisterApps();

	useEffect(() => {
		// lancement des applications
		run('Explorateur de fichiers');
		run('Explorateur de fichiers');

		run('Calculatrice');
		run('Calculatrice');
		run('Calculatrice');

		return () => {
			// arret des applications au démontage du composant
			resetRunningApps();
		}
	}, []);

	return (<OsDesktop background={background}>
		<RunningApplicationList />

		<TaskBar runningApps={appsInstances} pinApps={taskbarPinApps}
		         onOpenApp={run} onCloseApp={stop} />
	</OsDesktop>)
};

export const WithRunningApps = WithRunningAppsTemplate.bind({});
WithRunningApps.args = {};

const WithoutRunningAppsTemplate = (args) => {
	// enregistrement des applications
	useRegisterApps();

	const taskbarPinApps = useTaskbarPinApplications();
	const runningApps = useRunningApplications();

	return (<OsDesktop background={background}>
		<RunningApplicationList />

		<TaskBar pinApps={taskbarPinApps} runningApps={runningApps} />
	</OsDesktop>)
};

export const WithoutRunningApps = WithoutRunningAppsTemplate.bind({});
WithoutRunningApps.args = {};
