import { useStyle } from "../style";
import { createDirectory, useTree } from "../hooks";
import React, { useEffect, useState } from "react";
import { DragAndDropUploader } from "../../../components/DragAndDropUploader/DragAndDropUploader";
import { useRegisterContextualMenu } from "../../../hooks/contextual-menu";
import { ContextualMenuDesktopContent } from "../../../components/OsDesktop/subcomponents";
import { createContextMenuHandler } from "../../../hooks/utils/handler";
import { FileExplorerElement } from "./FileExplorerElement";

export const Body = ({ selectedDirectory = [], onSelectDirectory = () => null, onContextMenu = () => null }) => {
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

	return (<div className={appBody} onContextMenu={handleContextMenu}>
		<DragAndDropUploader id={'body'} show={showUploader}
		                     showPreview={true}
		                     onShow={() => setShowUploader(true)}
		                     onHide={() => setShowUploader(false)}
		                     showBackground={{ backgroundColor: 'rgba(0, 0, 0, .5)' }}>
			{_children.map((c, i) =>
				(<FileExplorerElement key={c.path.replace('/', '-') + '-' + i}
				                      title={c.title}
				                      path={selectedDirectory.join('/')}
				                      onSelect={() => onSelectDirectory(c.path)} />))}
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
