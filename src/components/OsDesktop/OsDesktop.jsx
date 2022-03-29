import React, { Fragment, useState } from "react";
import PropTypes from "prop-types";
import { useOsDesktopStyle } from "./style";
import { useRegisterContextualMenu } from "../../hooks/contextual-menu";
import { ContextualMenuDesktopContent, DesktopElement } from "./subcomponents";
import {
	addFileToDirectory,
	createDirectory,
	findElementInTree,
	removeDirectory,
	useTree
} from "../../applications/FileExplorer/hooks";
import { useControlApplication } from "../../hooks/applications";
import { DragAndDropUploader } from "../DragAndDropUploader/DragAndDropUploader";
import { FileExplorerElement } from "../../applications/FileExplorer/subcomponents/FileExplorerElement";

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
	const acceptedFilesFormat = ['image/png', 'image/jpeg', 'image/gif', 'text/plain', 'video/mp4'];

	return (<div className={osDesktop} {...events}
	             onContextMenu={handleDesktopContextMenu}>
		<DragAndDropUploader id={'desktop'}
		                     show={showUploader}
		                     showPreview={false}
		                     showBackground={{ backgroundColor: 'rgba(0, 0, 0, .5)' }}
		                     acceptedFileTypes={acceptedFilesFormat}
		                     onShow={() => setShowUploader(true)}
		                     onHide={() => setShowUploader(false)}
		                     onUpload={(files, b64Files) => {
			                     setShowUploader(false);
								 files.map((f, i) =>
				                     addFileToDirectory(
					                     `/Ce PC/Bureau`,
					                     f.name,
					                     b64Files[i],
					                     f.type,
					                     f.size
				                     )
			                     )
		                     }}>
			<div className={desktopGrid}>
				{desktopElement.children.map(((v, i) =>
					(<Fragment key={i}>
						{v.type === 'directory' && (<DesktopElement type={v.type}
						                                            title={v.title}
						                                            onRun={() => handleRunApp(v.path)}/>)}
						{v.type === 'file' && (<DesktopElement type={v.type}
					                                           title={v.title}
					                                           mime={v.mime}
					                                           size={v.size}
						                                       acceptedFileFormats={acceptedFilesFormat}
					                                           content={v.content} />)}


					</Fragment>)))}
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
