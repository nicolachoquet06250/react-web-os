import React, { useState } from "react";
import './VsCode.css';
import { Window } from "../../components/Window/Window";
import { createContextMenuHandler } from "../../hooks/utils/handler";
import { useVsCodeStyles } from "./style";
import { VsCodeTitle, Indent } from "./subcomponents";

export const VsCodeIcon = 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/2048px-Visual_Studio_Code_1.35_icon.svg.png';

export const VsCode = ({ onContextMenu = () => null, ...otherProps }) => {
	const handleContextMenu = createContextMenuHandler(e => onContextMenu('vs-code', e.clientX, e.clientY))

	const [active, setActive] = useState(true);
	const [width, setWidth] = useState('auto');
	const [lines, setLines] = useState([
		<div>const name = 'Nicolas';</div>,
		<div />,
		<div>function sayHello (name) &#123; </div>,
		<div><Indent />console.log('Hello ' + name);</div>,
		<div>&#125;</div>,
		<div />,
		<div>sayHello(name);</div>
	]);

	const { editor, cursor, afterCursor } = useVsCodeStyles({ maxWidth: width });

	return (<Window headerBackground={'rgb(0, 0, 0)'}
	                headerColor={'white'}
	                bodyBackground={'rgb(0, 0, 0)'}
	                title={<VsCodeTitle />}
	                onContextMenu={handleContextMenu}
	                onResize={(_width) => setWidth(_width + 'px')}
	                onActive={() => setActive(true)}
	                onUnactive={() => setActive(false)}
					{...otherProps}>
		<div className={editor}>
			{lines.map((l, i) => (<div key={i}>
				<div>{l}</div>

				{i === lines.length - 1 && (<>
					<div className={cursor}/>

					<div className={afterCursor} />
				</>)}
			</div>))}
		</div>
	</Window>);
};
