import { useStyle } from "../style";
import { createDirectory, addFileToDirectory, useTree, findElementInTree } from "../hooks";
import React, { Fragment, useEffect, useState } from "react";
import { DragAndDropUploader } from "../../../components/DragAndDropUploader/DragAndDropUploader";
import { useRegisterContextualMenu } from "../../../hooks/contextual-menu";
import { ContextualMenuDesktopContent } from "../../../components/OsDesktop/subcomponents";
import { createContextMenuHandler } from "../../../hooks/utils/handler";
import { FileExplorerElement } from "./FileExplorerElement";

export const Body = ({ selectedDirectory = [], onSelectDirectory = () => null, onContextMenu = () => null, onUploadFile = () => null }) => {
	const { appBody } = useStyle({});
	const [tree] = useTree();
	const [_children, setChildren] = useState([]);
	const [showUploader, setShowUploader] = useState(false);
	const [newDirectory, setNewDirectory] = useState(false);
	const [newDirectoryTitle, setNewDirectoryTitle] = useState('new directory');

	useRegisterContextualMenu('file-explorer-body', (props) =>
		(<ContextualMenuDesktopContent {...props}
		                               onNewDirectory={() => setNewDirectory(true)} />));

	const handleContextMenu = createContextMenuHandler(e => onContextMenu('file-explorer-body', e.clientX, e.clientY));

	useEffect(() => {
		setChildren(selectedDirectory
			.reduce((r, c) =>
					r.filter(v =>
						(v.title === c) || (v.textTitle && v.textTitle === c)
					)[0]?.children ?? [],
				[...tree]
			));
	}, [selectedDirectory]);

	const resetNewDirectory = () => {
		setNewDirectory(false);
		setNewDirectoryTitle('new directory');
	};

	const acceptedFilesFormat = ['image/png', 'image/jpeg', 'image/gif', 'text/plain', 'video/mp4', 'audio/mpeg'];

	return (<div className={appBody} onContextMenu={handleContextMenu}>
		<DragAndDropUploader id={'body'} show={showUploader}
		                     showPreview={false}
		                     showBackground={{ backgroundColor: 'rgba(0, 0, 0, .5)' }}
		                     acceptedFileTypes={acceptedFilesFormat}
		                     onShow={() => setShowUploader(true)}
		                     onHide={() => setShowUploader(false)}
		                     onUpload={(files, b64Files) => {
			                     setShowUploader(false);
								 onUploadFile([...selectedDirectory]);
								 files.map((f, i) =>
									 addFileToDirectory(
										 '/' + selectedDirectory.join('/'),
										 f.name,
										 b64Files[i],
										 f.type,
										 f.size
									 )
								 )
		                     }}>
			{_children.map((c, i) =>
				(<Fragment key={c.path.replace('/', '-') + '-' + i}>
					{c.type === 'directory' && (<FileExplorerElement type={c.type}
					                                                 title={c.title}
					                                                 path={'/' + selectedDirectory.join('/')}
					                                                 onSelect={() => onSelectDirectory(c.path)} />)}
					{c.type === 'file' && (<FileExplorerElement type={c.type}
				                                                title={c.title}
				                                                path={'/' + selectedDirectory.join('/')}
					                                            mime={c.mime}
					                                            size={c.size}
					                                            acceptedImageFormats={acceptedFilesFormat}
					                                            content={c.content}
				                                                onSelect={() => onSelectDirectory(c.path)} />)}
				</Fragment>))}
			{newDirectory && (<FileExplorerElement editable={true}
			                                       title={newDirectoryTitle}
			                                       path={'/' + selectedDirectory.join('/')}
			                                       onCancel={resetNewDirectory}
			                                       onValid={v => {
				                                       createDirectory(`/${selectedDirectory.join('/')}/${v}`);
				                                       resetNewDirectory();
			                                       }} />)}
		</DragAndDropUploader>
	</div>);
};
