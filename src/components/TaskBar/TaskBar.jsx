import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Calendar } from "../Calendar/Calendar";
import { StartMenu, StartMenuButton } from "../StartMenu";
import { useTaskBar } from "../../hooks/task-bar";
import { useStartMenu } from "../../hooks/start-menu";
import { useTaskBarStyle } from "./style";
import { AppPreview, TaskBarAppIcon, TaskBarDateSection } from "./subcomponents";
import { useRunningApplications } from "../../hooks/applications";

export const TaskBar = ({
    pinApps = [], runningApps = {},
    onOpenApp = () => null, onCloseApp = () => null
}) => {
	const { taskBar, taskBarIconContainer } = useTaskBarStyle({});
	const [calendarOpened, setCalendarOpened] = useState(false);

	const {
		title, icon, showAppPreview,
		onIconMouseOut, onIconMouseOver,
		handlePreviewHover, onAppAction
	} = useTaskBar(runningApps);
	const { startMenuOpened, onOpenStartMenu, onCloseStartMenu } = useStartMenu();
	const applicationInstances = useRunningApplications();

	return (<>
		<StartMenu opened={startMenuOpened}
		           onClickOutside={onCloseStartMenu} />

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
				{pinApps.map(({ title, icon }, i) =>
					(<TaskBarAppIcon key={i}
					                 icon={icon} title={title}
					                 instanceNb={runningApps[title] ? runningApps[title].instanceNb : 0}
					                 onClick={onAppAction(true).action(onOpenApp, title)}
									 onMouseOver={onIconMouseOver(title, icon)}
									 onMouseOut={onIconMouseOut} />))}
			</div>

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
