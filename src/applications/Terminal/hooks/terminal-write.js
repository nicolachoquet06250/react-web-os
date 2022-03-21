import { useCallback, useEffect, useState } from "react";
import { setCommandHistory, useCommandHistory, useCommands } from "./commands";
import { useLocation } from "./location";

export const useCommandWriter = (username, active, { onResult = () => null }) => {
	const [tmpWrite, setTmpWrite] = useState('');
	const [write, setWrite] = useState('');
	const [selectedTouche, setSelectedTouche] = useState('');
	const [historyIndex, setHistoryIndex] = useState(-1);
	const [oldTmpWrite, setOldTmpWrite] = useState('');
	const [history] = useCommandHistory();

	const [_, resetCurrentLocation] = useLocation();

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
		}
		else if (selectedTouche === 'validate') {
			if (tmpWrite.trim() !== '') {
				setCommandHistory(tmpWrite);
				setOldTmpWrite('');
				setHistoryIndex(-1);
			}
			setWrite(tmpWrite);
		}
		else if (selectedTouche === 'ArrowUp') {
			if (historyIndex + 1 < history.length) {
				if (historyIndex === -1) {
					setOldTmpWrite(tmpWrite);
				}

				setTmpWrite(history[historyIndex + 1]);
				setHistoryIndex(historyIndex + 1);
			}
		}
		else if (selectedTouche === 'ArrowDown') {
			if (historyIndex - 1 > -1) {
				setTmpWrite(history[historyIndex - 1]);
				setHistoryIndex(historyIndex - 1);
			} else if (historyIndex - 1 === -1) {
				setTmpWrite(oldTmpWrite);
				setHistoryIndex(historyIndex - 1);
			}
		}
		else {
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

	return {
		tmpWrite
	};
};
