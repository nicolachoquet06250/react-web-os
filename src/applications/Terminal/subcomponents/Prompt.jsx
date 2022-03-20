import { useTerminalStyle } from "../style";
import React, { useCallback, useEffect, useState } from "react";
import { useCommands } from "../hooks";

export const Prompt = ({ username, active, onResult = () => null }) => {
	const { prompt, promptHeader, cursor, promptWrite, afterCursor } = useTerminalStyle();
	const [tmpWrite, setTmpWrite] = useState('');
	const [write, setWrite] = useState('');
	const [selectedTouche, setSelectedTouche] = useState('');

	const commandResult = useCommands(write);
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

	return (<div className={prompt}>
		<span className={promptHeader}> {username}@react-webos $~ </span>
		<span className={promptWrite}>{tmpWrite}</span>
		<span className={cursor + ` ${!active ? 'inactive' : ''}`}>|</span>
		<span className={afterCursor} />
	</div>);
};
