import React from "react";
import { useControlApplication, useRunningApplications } from "../../../hooks/applications";

export const RunningApplicationList = ({ onContextMenu = () => null }) => {
	const [runningApps] = useRunningApplications();
	const { stop } = useControlApplication();

	return (<>
		{runningApps.map((r, i) => {
			const Component = r.component;

			return (<Component key={i}
			                   onClose={() => stop(r.title, i)}
			                   onContextMenu={onContextMenu}
								{...r.options}/>)
		})}
	</>);
};
