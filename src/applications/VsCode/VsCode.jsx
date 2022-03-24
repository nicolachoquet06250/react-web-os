import React, { Fragment, useEffect, useState } from "react";
import './VsCode.css';
import { Window } from "../../components/Window/Window";
import { createContextMenuHandler } from "../../hooks/utils/handler";
import { useVsCodeStyles } from "./style";
import { VsCodeTitle } from "./subcomponents";
import { SyntaxHighlight } from "../../components/SyntaxHighlight";

export const VsCodeIcon = 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/2048px-Visual_Studio_Code_1.35_icon.svg.png';

export const VsCode = ({ onContextMenu = () => null, ...otherProps }) => {
	const handleContextMenu = createContextMenuHandler(e => onContextMenu('vs-code', e.clientX, e.clientY))

	const [active, setActive] = useState(true);
	const [width, setWidth] = useState('auto');

	const { editor, cursor, afterCursor } = useVsCodeStyles({ maxWidth: width });

	const js = `const name = 'Nicolas';

function sayHello(name) {
  console.log('Hello ' + name);
}

sayHello(name);
`;

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
			<SyntaxHighlight value={js} linesNumbers={true} cursor={() => (<>
				<div className={cursor}/>

				<div className={afterCursor} />
			</>)} />
		</div>
	</Window>);
};
