import React from "react";
import { useContextMenuSelectedDirectory } from "../hooks/context-menu";
import { useTree } from "../hooks";
import { useControlApplication } from "../../../hooks/applications";

export const FileExplorerContextMenu = () => (<div style={{ padding: '10px' }}>
	<span style={{ color: 'white' }}>
		Explorer contextMenu
	</span>
</div>);

export const FileExplorerTreeMenuItemContextMenu = ({ onHide = () => null }) => {
	const [selectedDirectory] = useContextMenuSelectedDirectory();
	const [tree] = useTree();
	const { run } = useControlApplication();

	const openInTerminal = () => {
		const terminalSelectedDirectory = tree.flat().reduce((r, c) => c.textTitle ? r.replace(c.title, c.textTitle) : r, selectedDirectory);
		run('Terminal', { root: '/' + terminalSelectedDirectory });
		onHide();
	};

	return (<div style={{ padding: '10px' }}>
		<button type={'button'} style={{ color: 'white', backgroundColor: 'transparent', border: 'none', cursor: 'pointer' }}
		        onClick={openInTerminal}>
			Ouvrir dans le terminal
		</button>
	</div>);
};
