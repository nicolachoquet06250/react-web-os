import { useEffect, useState } from "react";
import { useMatch } from "../../../hooks/utils/string";

const useCommandInterpreter = (state, setState) => [
	{
		regex: /clear/gm,
		run() {
			setState(['clear']);
		}
	},
	{
		regex: /(.+)/gm,
		run() {
			setState(['résultat']);
		}
	}
];

/**
 * @param {string} command
 * @return {Array<string>}
 */
export const useCommands = command => {
	const [state, setState] = useState([]);
	const interpreters = useCommandInterpreter(state, setState);

	useEffect(() => {
		if (command) {
			const commands = command.includes(' && ') ? command.split(' && ') : [command];
			for (const command of commands) {
				interpreters.filter(i => useMatch(i.regex, command))[0]?.run();
			}
		}
	}, [command]);

	return state;
};
