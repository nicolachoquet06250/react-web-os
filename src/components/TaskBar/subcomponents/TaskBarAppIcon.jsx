import React from "react";
import { useTaskBarStyle } from "../style";

export const TaskBarAppIcon = ({
   title, instanceNb, icon,
   onMouseOver = () => null, onMouseOut = () => null,
   onClick = () => null
}) => {
	const { taskBarIcon } = useTaskBarStyle({ opened: false, icon });

	const handleHover = (hover = true) => () => {
		if (hover) {
			onMouseOver && onMouseOver()
		} else {
			onMouseOut && onMouseOut()
		}
	};

	return (<button className={taskBarIcon + ' ' + (instanceNb > 0 ? 'active' : '')}
	                onClick={onClick}
	                onMouseOver={handleHover(true)}
	                onMouseOut={handleHover(false)}>
		<img src={icon} alt={title} />
	</button>);
};
