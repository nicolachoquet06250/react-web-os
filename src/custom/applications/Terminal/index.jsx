import { useTerminalStyle } from "../../../applications/Terminal/style";
import React, { useCallback, useEffect, useState } from "react";
import { useCommands, useLocation } from "../../../applications/Terminal/hooks";
import { createUseStyles } from "react-jss";

const useCustomPromptStyle = createUseStyles({
	customPrompt: {
		flexDirection: 'column'
	},

	groupList: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		width: '100%'
	},

	group: {
		display: 'flex',
		flexDirection: 'row'
	},

	writeGroup: {
		display: 'flex',
		flexDirection: 'row',
		width: '100%'
	},

	beforeWrite: {
		'&::before': {
			content: `'$~'`,
			marginRight: '5px',
		}
	},

	system: {
		backgroundColor: 'yellow',
		color: 'black',
		cursor: 'default',

		paddingLeft: '5px',
		paddingRight: '5px',
		borderRadius: '50px'
	},

	path: {
		marginLeft: '5px',
		backgroundColor: 'blue',
		color: 'black',
		cursor: 'default',

		paddingLeft: '5px',
		paddingRight: '5px',
		borderRadius: '50px'
	},

	shell: {
		backgroundColor: 'red',
		color: 'black',
		cursor: 'default',

		paddingLeft: '5px',
		paddingRight: '5px',
		borderRadius: '50px'
	},

	usernameStyle: {
		marginLeft: '5px',
		backgroundColor: 'purple',
		color: 'black',
		cursor: 'default',

		paddingLeft: '5px',
		paddingRight: '5px',
		borderRadius: '50px'
	}
});

export const Prompt2 = ({ username, active, onResult = () => null }) => {
	const { prompt, cursor, promptWrite, afterCursor } = useTerminalStyle({});
	const { customPrompt, groupList, group, system, writeGroup, path, shell, usernameStyle, beforeWrite } = useCustomPromptStyle();

	const [tmpWrite, setTmpWrite] = useState('');
	const [write, setWrite] = useState('');
	const [selectedTouche, setSelectedTouche] = useState('');

	const [currentLocation, resetCurrentLocation] = useLocation();

	useEffect(() => () => resetCurrentLocation(), []);

	const commandResult = useCommands(write, username);
	const handleKeyDown = useCallback(e => {
		e.preventDefault();
		e.stopPropagation();

		if (active) {
			setSelectedTouche('');
			if (['Shift', 'Control', 'AltGraph', 'Backspace', 'Enter', 'Space'].indexOf(e.key) === -1) {
				setSelectedTouche(e.key);
			} else if (['Backspace'].indexOf(e.key) !== -1) {
				setSelectedTouche('del');
			} else if (['Enter'].indexOf(e.key) !== -1) {
				setSelectedTouche('validate');
			}
		}
	}, [active]);

	useEffect(() => {
		if (selectedTouche === 'del') {
			setTmpWrite(tmpWrite.substring(0, tmpWrite.length - 1));
		} else if (selectedTouche === 'validate') {
			setWrite(tmpWrite);
		} else {
			setTmpWrite(tmpWrite + selectedTouche);
		}
	}, [selectedTouche]);
	useEffect(() => {
		document.addEventListener('keydown', handleKeyDown);

		return () => document.removeEventListener('keydown', handleKeyDown);
	}, [active]);
	useEffect(() => {
		onResult(commandResult);
		setTmpWrite('');
		setWrite('');
	}, [commandResult]);

	return (<div className={prompt + ' ' + customPrompt}>
		<div className={groupList}>
			<div className={group}>
				<div className={shell}> bash </div>

				<div className={usernameStyle}>
					{username}
				</div>

				<div className={path} title={currentLocation.replace('//', '/')}>
					{currentLocation === '/'
						? currentLocation : currentLocation.split('/')[currentLocation.split('/').length - 1]}
				</div>
			</div>

			<div className={group}>
				<div className={system}> webos </div>
			</div>
		</div>

		<div className={writeGroup}>
			<span className={beforeWrite} />

			<span className={promptWrite}> {tmpWrite} </span>

			<span className={cursor + ` ${!active ? 'inactive' : ''}`}> | </span>

			<span className={afterCursor} />
		</div>
	</div>);
};
