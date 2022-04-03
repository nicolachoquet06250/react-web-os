import React from "react";
import { useStartMenuStyle } from "../style";
import { useControlApplication, useRegisterPinApp } from "../../../hooks/applications";
import { useRegisterContextualMenu } from "../../../hooks/contextual-menu";
import { createContextMenuHandler } from "../../../hooks/utils/handler";

const ListedApplicationButtonContextualMenu = ({ title, onHide = () => null }) => {
	const { register } = useRegisterPinApp(title);

	const pinAppToTaskBar = e => {
		register({ taskBar: true });
		onHide();
	};
	const pinAppToStartMenu = e => {
		e.preventDefault();
		e.stopPropagation();
		register({ startMenu: true });
		onHide();
	};

	return (<div style={{ padding: '10px' }}>
		<button type={'button'} style={{ color: 'white', backgroundColor: 'transparent', border: 'none', cursor: 'pointer', marginTop: '5px', marginBottom: '5px' }}
		        onClick={pinAppToTaskBar}>
			Epingler à la bar des taches
		</button>

		<button type={'button'} style={{ color: 'white', backgroundColor: 'transparent', border: 'none', cursor: 'pointer', marginTop: '5px', marginBottom: '5px' }}
		        onClick={pinAppToStartMenu}>
			Epingler au menu démarrer
		</button>
	</div>);
};

export const ListedApplicationButton = ({ title, icon, onRun = () => null, onContextMenu = () => null }) => {
	const { categorizedApplication } = useStartMenuStyle({});
	const { run } = useControlApplication();

	const onRunApp = () => {
		run(title);
		onRun(title);
	};

	useRegisterContextualMenu('start-menu-listed-application-button-' + title, props => <ListedApplicationButtonContextualMenu title={title} {...props} />);

	const handleContextMenu = createContextMenuHandler(e => onContextMenu('start-menu-listed-application-button-' + title, e.clientX, e.clientY))

	return (<button type={'button'} className={categorizedApplication}
	                onClick={onRunApp}
	                onContextMenu={handleContextMenu}>
		<img src={icon} alt={`${title} icon`} />

		<span>{title}</span>
	</button>);
};
