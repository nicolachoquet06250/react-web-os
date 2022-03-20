import { Window } from "../../components/Window/Window";
import React from "react";
import { createContextMenuHandler } from "../../hooks/utils/handler";

export const VsCode = ({ onClose = () => null, onContextMenu = () => null }) => {
	const handleContextMenu = createContextMenuHandler(e => onContextMenu('vs-code', e.clientX, e.clientY))

	return (<Window headerBackground={'rgba(0, 0, 0, .5)'}
	                headerColor={'wheat'}
	                bodyBackground={'rgba(0, 0, 0, .5)'}
	                title={<span>Vs Code</span>}
	                onClose={onClose}
	                onContextMenu={handleContextMenu}>

	</Window>);
};