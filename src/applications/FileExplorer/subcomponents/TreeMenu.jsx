import React from "react";
import { useStyle } from "../style";
import { useRegisterContextualMenu } from "../../../hooks/contextual-menu";
import { FileExplorerTreeMenuItemContextMenu } from "./ContextualMenus";
import { setContextMenuSelectedDirectory } from "../hooks/context-menu";

export const directoryIcon = 'https://www.coursinfo.fr/wp-content/uploads/2017/10/explorateur-fichiers.png';

export const TreeMenu = ({
	 openedDirectories = [], fileTree,
	 onSelectDirectory = () => null, onContextMenu = () => null
}) => {
	const { treeMenu } = useStyle({
		directoryImage: directoryIcon
	});

	useRegisterContextualMenu('file-explorer-tree-menu-item', FileExplorerTreeMenuItemContextMenu);

	const RecursiveTreeMenu = ({ openedDirectories = [], treeMenu, index = 0, title: _title = '' }) =>
		(<ul className={_title !== '' && !openedDirectories.includes(_title) ? 'close' : ''}>
			{treeMenu.filter(v => v.type === 'directory').map(({ title, children, path, icon }, i) =>
				(<li key={i} className={`${children.length === 0 ? 'void' : ''} ${_title !== '' && !openedDirectories.includes(path) ? 'close' : ''}`}>
					<button onClick={() => onSelectDirectory((_title === '' ? '' : _title + '/') + title, children.length)}
					        onContextMenu={e => {
								setContextMenuSelectedDirectory(path);
						        onContextMenu(e);
					        }}
				            style={{ '--data-icon': icon ? `url(${icon})` : false }}>
						<span>{title}</span>
					</button>

					{children.length > 0 && <RecursiveTreeMenu treeMenu={children} index={index + 1} openedDirectories={openedDirectories} title={(_title === '' ? '' : _title + '/') + title} />}
				</li>))}
		</ul>);

	return (<div className={treeMenu}>
		<RecursiveTreeMenu treeMenu={fileTree}
		                   openedDirectories={openedDirectories} />
	</div>);
};
