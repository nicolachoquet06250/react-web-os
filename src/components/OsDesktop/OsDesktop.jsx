import React, { useState } from "react";
import PropTypes from "prop-types";
import { useOsDesktopStyle } from "./style";
import { useRegisterContextualMenu } from "../../hooks/contextual-menu";
import { ContextualMenuDesktopContent, DesktopElement } from "./subcomponents";
import { createDirectory, findElementInTree, removeDirectory, useTree } from "../../applications/FileExplorer/hooks";
import { useControlApplication } from "../../hooks/applications";
import { DragAndDropUploader } from "../DragAndDropUploader/DragAndDropUploader";

export const OsDesktop = ({ children, background, onContextMenu = () => null, ...events }) => {
	const { osDesktop, desktopGrid } = useOsDesktopStyle({ background });
	const [tree] = useTree();
	const { run } = useControlApplication();
	const [showUploader, setShowUploader] = useState(false);
	const [newDirectory, setNewDirectory] = useState(false);
	const [newDirectoryTitle, setNewDirectoryTitle] = useState('new Directory');

	useRegisterContextualMenu('desktop', ({ ...props }) =>
		(<ContextualMenuDesktopContent
			onNewDirectory={() => setNewDirectory(true)}
			{...props}
		/>));

	const handleDesktopContextMenu = e => {
		e.preventDefault();
		onContextMenu('desktop', e.clientX, e.clientY);
	};
	const handleRunApp = path => run('Explorateur de fichiers', {root: path});

	const resetNewDirectory = () => {
		setNewDirectory(false);
		setNewDirectoryTitle('new directory');
	};

	const desktopElement = findElementInTree('/Ce PC/Bureau', tree) ?? { children: [] };

	return (<div className={osDesktop} {...events}
	             onContextMenu={handleDesktopContextMenu}>
		<DragAndDropUploader id={'desktop'} show={showUploader}
		                     showPreview={true}
		                     showBackground={{ backgroundColor: 'rgba(0, 0, 0, .5)' }}
		                     onShow={() => setShowUploader(true)}
		                     onHide={() => setShowUploader(false)}>
			<div className={desktopGrid}>
				{desktopElement.children.map(((v, i) =>
					(<DesktopElement key={i}
					                 title={v.title}
					                 onRun={() => handleRunApp(v.path)} />)))}
				{newDirectory && (<DesktopElement title={newDirectoryTitle}
				                                  editable={true}
												  onCancel={resetNewDirectory}
												  onValid={v => {
													  createDirectory(`/Ce PC/Bureau/${v}`);
													  resetNewDirectory();
												  }} />)}
			</div>
		</DragAndDropUploader>

		{children}
	</div>);
};

OsDesktop.propTypes = {
	background: PropTypes.string,
	onContextMenu: PropTypes.func
};

OsDesktop.defaultProps = {
	onContextMenu: () => null
};
