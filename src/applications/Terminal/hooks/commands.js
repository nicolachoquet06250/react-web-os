import { useEffect, useState } from "react";
import { useMatch } from "../../../hooks/utils/string";
import { useCommandInterpreter } from "./commands-interpreter";

/**
 * @param {string} command
 * @param {string} username
 * @return {Array<string>}
 */
export const useCommands = (command, username) => {
	const [state, setState] = useState([]);
	const interpreters = useCommandInterpreter(state, setState);

	useEffect(() => {
		if (command) {
			const commands = command.includes(' && ') ? command.split(' && ') : [command];
			for (const command of commands) {
				interpreters.filter(i => useMatch(i.regex, command.trim()))[0]?.run(command.trim().split(' '), username);
			}
		}
	}, [command]);

	return state;
};
