import { Window } from "../../components/Window/Window";
import React from "react";
import { createContextMenuHandler } from "../../hooks/utils/handler";

export const VsCode = ({ onContextMenu = () => null, ...otherProps }) => {
	const handleContextMenu = createContextMenuHandler(e => onContextMenu('vs-code', e.clientX, e.clientY))

	return (<Window headerBackground={'rgba(0, 0, 0, .5)'}
	                headerColor={'wheat'}
	                bodyBackground={'rgba(0, 0, 0, .5)'}
	                title={<span>Vs Code</span>}
	                onContextMenu={handleContextMenu}
					{...otherProps} />);
};

export const VsCodeIcon = 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/2048px-Visual_Studio_Code_1.35_icon.svg.png';
