import React, { useEffect } from "react";
import { useRegisterTerminalPlugin } from "../Terminal/hooks/plugins";
import { useRegisterCommandsInterpreter } from "../Terminal/hooks";

export const Git = () => {
	useEffect(() => {
		useRegisterTerminalPlugin('git_interpreter', () => {
			useRegisterCommandsInterpreter((state, setState) => [
				{
					regex: /^git status$/g,
					run() {
						setState(['première commande git']);
						console.log('première commande git')
					}
				}
			])
		});

		console.log('git installed');
	}, []);

	return (<></>);
};
