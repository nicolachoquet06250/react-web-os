import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Calendar } from "../Calendar/Calendar";
import { StartMenu, StartMenuButton } from "../StartMenu";
import { useTaskBar } from "../../hooks/task-bar";
import { useStartMenu } from "../../hooks/start-menu";
import { useTaskBarStyle } from "./style";
import { AppPreview, BatterySection, NetworkSection, TaskBarAppIcon, TaskBarDateSection } from "./subcomponents";
import { useApplications, usePinApplications, useRunningApplications } from "../../hooks/applications";

export const TaskBar = ({
    pinApps = [], runningApps = {},
    onOpenApp = () => null, onCloseApp = () => null,
	onContextMenu = () => null
}) => {
	const { taskBar, taskBarIconContainer } = useTaskBarStyle({});
	const [calendarOpened, setCalendarOpened] = useState(false);
	const [pinAndRunningApps, setPinAndRunningApps] = useState(pinApps);

	const [applications] = useApplications();
	const [pinApplications] = usePinApplications();

	const notPinRunningApps = Object.keys(runningApps)
		.filter(v => pinApps.map(_v => _v.title).indexOf(v) === -1 && runningApps[v].instanceNb !== 0)
		.reduce((r, v) => [
			...r,
			{
				title: v,
				icon: applications.filter(_v => _v.title === v)[0]?.icon,
				options: {
					taskBar: true,
					startMenu: false
				}
			}
		], []);

	useEffect(() => {
		setPinAndRunningApps([...pinApps, ...notPinRunningApps]);
	}, [runningApps]);

	const {
		title, icon, showAppPreview,
		onIconMouseOut, onIconMouseOver,
		handlePreviewHover, onAppAction
	} = useTaskBar(runningApps);
	const { startMenuOpened, onOpenStartMenu, onCloseStartMenu } = useStartMenu();
	const [applicationInstances] = useRunningApplications();

	useEffect(() => {
		onCloseStartMenu();
	}, [pinApplications]);

	return (<>
		<StartMenu opened={startMenuOpened}
		           onClickOutside={onCloseStartMenu}
		           onContextMenu={onContextMenu} />

		<AppPreview show={showAppPreview}
		            instances={applicationInstances.map((v, i) => ({
			            ...v,
			            id: i,
			            icon
		            })).filter(v => v.title === title)}
		            onMouseOver={handlePreviewHover(true)}
		            onMouseOut={handlePreviewHover(false)}
					onCloseApp={onAppAction(false).action(onCloseApp)}/>

		<Calendar opened={calendarOpened}
		          onClickOutside={() => setCalendarOpened(false)}
		          marginBottom={27} />

		<div className={taskBar}>
			<StartMenuButton onClick={onOpenStartMenu} />

			<div className={taskBarIconContainer}>
				{pinAndRunningApps.map(({ title, icon }, i) =>
					(<TaskBarAppIcon key={i}
					                 icon={icon} title={title}
					                 instanceNb={runningApps[title] ? runningApps[title].instanceNb : 0}
					                 onClick={onAppAction(true).action(onOpenApp, title)}
									 onMouseOver={onIconMouseOver(title, icon)}
									 onMouseOut={onIconMouseOut}
									 onContextMenu={onContextMenu} />))}
			</div>

			<BatterySection />
			<NetworkSection type={'wifi'} />
			<TaskBarDateSection onClick={() => setCalendarOpened(true)} />
		</div>
	</>);
};

TaskBar.propTypes = {
	pinApps: PropTypes.array,
	runningApps: PropTypes.object,
	onOpenApp: PropTypes.func,
	onCloseApp: PropTypes.func
};

TaskBar.defaultProps = {
	pinApps: [],
	runningApps: {},
	onOpenApp: () => null,
	onCloseApp: () => null
};
