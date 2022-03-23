import React from "react";
import { minimizeRunningApplication as _minimizeRunningApplication, useControlApplication, useRunningApplications } from "../../../hooks/applications";

export const RunningApplicationList = ({ onContextMenu = () => null }) => {
	const [runningApps] = useRunningApplications();
	const { stop } = useControlApplication();

	return (<>
		{runningApps.map((r, i) => {
			const Component = r.component;

			const minimizeRunningApplication = () => _minimizeRunningApplication(i);

			return (<Component key={i}
			                   onClose={() => stop(r.title, i)}
			                   minimized={r.minimized}
			                   onMinimize={minimizeRunningApplication}
			                   onMaximize={() => console.log(i)}
			                   onContextMenu={onContextMenu}
							   {...r.options} />)
		})}
	</>);
};
