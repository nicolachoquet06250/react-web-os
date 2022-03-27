import React, { useCallback, useEffect, useState } from "react";
import { Window } from "../../components/Window/Window";
import { createContextMenuHandler } from "../../hooks/utils/handler";
import { Cursor } from "../VsCode/subcomponents";
import { getDecodedFileContent } from "../FileExplorer/hooks";
import { BlocNoteTitle } from "./subcomponents";
import { useBlocNoteStyle } from "./style";

export const BlocNoteIcon = 'https://fr.seaicons.com/wp-content/uploads/2016/06/Notepad-Bloc-notes-icon.png';

export const BlocNote = ({ filePath = '', onContextMenu = () => null, ...otherProps }) => {
	const [active, setActive] = useState(true);
	const [selectedTouch, setSelectedTouch] = useState('');
	const [content, setContent] = useState('');

	const { blocNote, cursorContainer } = useBlocNoteStyle();

	const handleContextMenu = createContextMenuHandler(e => onContextMenu('bloc-note', e.clientX, e.clientY));

	const handleKeyDown = useCallback(e => {
		if (active) {
			e.preventDefault();
			e.stopPropagation();

			setSelectedTouch('');
			setSelectedTouch(e.key);
		}
	}, [active]);

	useEffect(() => {
		document.addEventListener('keydown', handleKeyDown);

		return () => document.removeEventListener('keydown', handleKeyDown);
	}, [active]);
	useEffect(() => {
		if (['Shift', 'Control', 'AltGraph', 'ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].indexOf(selectedTouch) === -1) {
			if (selectedTouch === 'Backspace') {
				setContent(content.substring(0, content.length - 1));
			} else if (selectedTouch === 'Enter') {
				setContent(content + '\n');
			} else {
				setContent(content + selectedTouch);
			}
		}
	}, [selectedTouch]);

	useEffect(() => {
		setContent(getDecodedFileContent(filePath));
	}, []);

	return (<Window bodyBackground={'white'}
	                headerBackground={'white'}
	                headerColor={'black'}
	                title={<BlocNoteTitle />}
	                onContextMenu={handleContextMenu}
	                onActive={() => setActive(true)}
	                onUnactive={() => setActive(false)}
	                {...otherProps}>
		<div className={blocNote}>
			<pre><span>{content}</span><span className={cursorContainer}>{active && (<Cursor color={'black'} height={'15px'}/>)}</span></pre>
		</div>
	</Window>);
};
