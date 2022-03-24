import React, { Fragment, useCallback, useEffect, useState } from "react";
import './VsCode.css';
import { Window } from "../../components/Window/Window";
import { createContextMenuHandler } from "../../hooks/utils/handler";
import { useVsCodeStyles } from "./style";
import { VsCodeTitle, Cursor } from "./subcomponents";
import { SyntaxHighlight } from "../../components/SyntaxHighlight";

export const VsCodeIcon = 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/2048px-Visual_Studio_Code_1.35_icon.svg.png';

export const VsCode = ({ onContextMenu = () => null, ...otherProps }) => {
	const handleContextMenu = createContextMenuHandler(e => onContextMenu('vs-code', e.clientX, e.clientY))

	const [active, setActive] = useState(true);
	const [width, setWidth] = useState('auto');
	const [content, setContent] = useState('');
	const [selectedTouch, setSelectedTouch] = useState('');

	const { editor } = useVsCodeStyles({ maxWidth: width });

	const handleResize = _width => setWidth(_width + 'px');

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
		if (['Shift', 'Control', 'ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].indexOf(selectedTouch) === -1) {
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
		setContent(`const name = 'Nicolas';

function sayHello(name) {
  console.log('Hello ' + name);
}

sayHello(name);
`);
	}, []);

	return (<Window headerBackground={'rgb(0, 0, 0)'}
	                headerColor={'white'}
	                bodyBackground={'rgb(0, 0, 0)'}
	                title={<VsCodeTitle />}
	                onContextMenu={handleContextMenu}
	                onResize={handleResize}
	                onActive={() => setActive(true)}
	                onUnactive={() => setActive(false)}
					{...otherProps}>
		<div className={editor}>
			<SyntaxHighlight value={content}
			                 linesNumbers={true}
			                 cursor={active && Cursor} />
		</div>
	</Window>);
};
