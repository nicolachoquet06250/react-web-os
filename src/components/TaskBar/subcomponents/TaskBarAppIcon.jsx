import React, { useCallback } from "react";
import { useTaskBarStyle } from "../style";
import { useRegisterPinApp } from "../../../hooks/applications";
import { useRegisterContextualMenu } from "../../../hooks/contextual-menu";
import { createContextMenuHandler } from "../../../hooks/utils/handler";

export const TaskBarAppIcon = ({
   title, instanceNb, icon,
   onMouseOver = () => null, onMouseOut = () => null,
   onClick = () => null, onContextMenu = () => null
}) => {
	const { taskBarIcon } = useTaskBarStyle({ opened: false, icon });

	const TaskBarAppIconContextMenu = ({ onHide = () => null }) => {
		const { unregister } = useRegisterPinApp(title);

		const unpinToTaskBar = () => {
			unregister({ taskBar: false });
			onHide();
		};

		return (<div style={{ padding: '10px' }}>
			<button style={{ color: 'white', backgroundColor: 'transparent', border: 'none', cursor: 'pointer', marginTop: '5px', marginBottom: '5px' }}
			        onClick={unpinToTaskBar}>
				Supprimer à la bar des taches
			</button>
		</div>);
	};

	const handleHover = (hover = true) => () => {
		if (hover) {
			onMouseOver && onMouseOver()
		} else {
			onMouseOut && onMouseOut()
		}
	};

	useRegisterContextualMenu('task-bar-app-icon', TaskBarAppIconContextMenu);

	const handleContextMenu = createContextMenuHandler(e => onContextMenu('task-bar-app-icon', e.clientX, e.clientY))

	return (<button className={taskBarIcon + ' ' + (instanceNb > 0 ? 'active' : '')}
	                onClick={onClick}
	                onMouseOver={handleHover(true)}
	                onMouseOut={handleHover(false)}
	                onContextMenu={handleContextMenu}>
		<img src={icon} alt={title} />
	</button>);
};
