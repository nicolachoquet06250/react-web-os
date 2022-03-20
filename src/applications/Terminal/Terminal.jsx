import React, { useState } from "react";
import { Window } from "../../components/Window/Window";
import { createContextMenuHandler } from "../../hooks/utils/handler";
import Icon from '../../assets/images/terminal-icon.png';
import './terminal.css';
import { useTerminalStyle } from "./style";
import { Prompt } from "./subcomponents";

export const Terminal = ({
    root = 'Ce PC', username = 'demo',
    onClose = () => null, onContextMenu = () => null
}) => {
	const [active, setActive] = useState(true);
	const [results, setResults] = useState([]);
	const { terminal } = useTerminalStyle();

	const handleContextMenu = createContextMenuHandler(e => onContextMenu('file-explorer', e.clientX, e.clientY));

	return (<Window title={<span><span className={'emiji'}>  </span> <span> Terminal </span></span>}
	                bodyBackground={'rgba(0, 0, 0, .5)'}
	                headerBackground={'rgba(0, 0, 0, .5)'}
	                headerColor={'wheat'}
	                onClose={onClose}
	                onContextMenu={handleContextMenu}
					onActive={() => setActive(true)}
					onUnactive={() => setActive(false)}>
		<div className={terminal}>
			<div>
				{results.map((r, i) => (<div key={i}>
					{r}
				</div>))}
			</div>
			<Prompt username={username} active={active} onResult={r => {
				if (r.length === 1 && r[0] === 'clear') {
					setResults([]);
				} else {
					setResults([...results, ...r]);
				}
			}} />
		</div>
	</Window>);
};

export const TerminalIcon = Icon;
