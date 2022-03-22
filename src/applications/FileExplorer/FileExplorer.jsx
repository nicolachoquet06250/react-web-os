import React, { useCallback, useEffect, useState } from "react";
import { Window } from "../../components/Window/Window";
import { createContextMenuHandler } from "../../hooks/utils/handler";
import { useTree } from "./hooks";
import { useStyle } from "./style";
import { Body, Breadcrumb, Footer, TreeMenu } from "./subcomponents";
import { useRegisterContextualMenu } from "../../hooks/contextual-menu";
import { FileExplorerContextMenu } from "./subcomponents/ContextualMenus";

export const FileExplorer = ({ onClose = () => null, onContextMenu = () => null }) => {
	const [nbChildren, setNbChildren] = useState(0);
	const [openedDirectories, setOpenedDirectories] = useState([]);
	const [selectedDirectory, setSelectedDirectory] = useState([]);
	const { appContainer, appBodyContainer } = useStyle({});

	// useRegisterContextualMenu('file-explorer', FileExplorerContextMenu);

	const handleContextMenu = createContextMenuHandler(e =>
		onContextMenu('file-explorer', e.clientX, e.clientY));

	const handleTreeMenuItemContextMenu = createContextMenuHandler(e =>
		onContextMenu('file-explorer-tree-menu-item', e.clientX, e.clientY));

	const fileTree = useTree();

	useEffect(() => {
		setNbChildren(fileTree[0].children.length);

		const tmp = [];
		for (const v of fileTree) tmp.push(v.path);
		setOpenedDirectories(tmp);
		setSelectedDirectory([fileTree[0].title]);
	}, []);

	const onSelectDirectory = useCallback((title, n) => {
		setNbChildren(n);
		setSelectedDirectory(title.split('/'));

		if (openedDirectories.indexOf(title) === -1) {
			setOpenedDirectories([...openedDirectories, title]);
		} else {
			setOpenedDirectories(openedDirectories.filter(t => title !== t));
		}
	}, [openedDirectories]);

	const onSelectDirectoryFromBreadcrumb = useCallback(title => {
		setSelectedDirectory(title.split('/'));

		if (openedDirectories.indexOf(title) === -1) {
			setOpenedDirectories([...openedDirectories, title]);
		}
	}, [openedDirectories]);

	return (<Window bodyBackground={'rgba(0, 0, 0, .5)'}
					headerBackground={'rgba(0, 0, 0, .5)'}
					headerColor={'wheat'}
					title={<span>Explorateur de fichiers</span>}
					onClose={onClose}
					onContextMenu={handleContextMenu}>
		<div className={appContainer}>
			<Breadcrumb selectedDirectory={selectedDirectory}
			            onSelectDirectory={onSelectDirectoryFromBreadcrumb} />

			<div className={appBodyContainer}>
				<TreeMenu fileTree={fileTree}
				          onSelectDirectory={onSelectDirectory}
				          openedDirectories={openedDirectories}
						  onContextMenu={handleTreeMenuItemContextMenu}/>

				<Body selectedDirectory={selectedDirectory}
				      onSelectDirectory={onSelectDirectoryFromBreadcrumb} />
			</div>

			<Footer>
				<span>
					{nbChildren} élément(s)
				</span>
			</Footer>
		</div>
	</Window>);
};

export const FileExplorerIcon = 'https://www.coursinfo.fr/wp-content/uploads/2017/10/explorateur-fichiers.png';
