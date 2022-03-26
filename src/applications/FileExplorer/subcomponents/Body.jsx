import { useStyle } from "../style";
import { createDirectory, removeDirectory, useTree } from "../hooks";
import React, { useEffect, useRef, useState } from "react";
import { directoryIcon } from "./TreeMenu";
import { DragAndDropUploader } from "../../../components/DragAndDropUploader/DragAndDropUploader";
import { useRegisterContextualMenu } from "../../../hooks/contextual-menu";
import { ContextualMenuDesktopContent } from "../../../components/OsDesktop/subcomponents";
import { createContextMenuHandler } from "../../../hooks/utils/handler";
import { useClickAway, useKey } from "react-use";

const FileExplorerElement = ({
     title,
     path,
     editable = false,
     onSelect = () => null,
     onCancel = () => null,
     onValid = () => null
}) => {
	const { appBodyButton } = useStyle({});
	const [tmpTitle, setTmpTitle] = useState(title);

	const ref = useRef();

	const handleDelete = e => {
		if (e.target.tagName.toLowerCase() === 'button') {
			e.preventDefault();
			e.stopPropagation();

			console.log(`/${path}/${e.target.getAttribute('data-title')}`);

			removeDirectory(`/${path}/${e.target.getAttribute('data-title')}`);
		}
	};

	useKey('Escape', () => {
		if (editable) onCancel();
	});
	useKey('Enter', e => {
		if (editable) {
			e.preventDefault();
			e.stopPropagation();

			onValid(e.target.parentElement.getAttribute('data-title'));
		}
	});
	useKey('Backspace', handleDelete);
	useKey('Delete', handleDelete);
	useClickAway(ref, () => {
		if (editable) onValid(tmpTitle);
	});

	return (<button ref={ref}
	                className={appBodyButton}
	                title={title}
	                data-title={tmpTitle}
	                onDoubleClick={onSelect}>
		<img src={directoryIcon} alt={'directory'} />

		{!editable && (<span> {title} </span>)}
		{editable && (<input type={'text'}
		                     defaultValue={title}
		                     placeholder={'new directory'}
		                     autoFocus={true}
		                     onInput={e => {
			                     setTmpTitle(e.target.value);
		                     }}
		                     style={{
			                     maxWidth: '80px',
			                     backgroundColor: 'transparent',
			                     border: '1px solid blue',
			                     color: 'white'
		                     }} />)}
	</button>);
};

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
