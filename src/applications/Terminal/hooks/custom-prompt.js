import { BehaviorSubject } from "rxjs";
import { createRxJsUseGetter } from "../../../hooks/utils/rxjs-getter";
import { Prompt } from "../subcomponents";
import { useEffect, useState } from "react";

const promptList = [
	{
		name: 'default prompt',
		default: true,
		component: () => Prompt
	}
];
const promptList$ = new BehaviorSubject(promptList);

export const usePromptList = createRxJsUseGetter(promptList, promptList$);

/**
 * @param {string} name
 * @param {({ username: string, active: boolean, onResult: (commandResult: Array<string>) => any }) => JSX.Element} prompt
 */
export const useAddPromptToList = (name, prompt) => {
	const [_promptList] = usePromptList();

	if (_promptList.map(v => v.name).indexOf(name) === -1) {
		promptList$.next([
			..._promptList,
			{
				name,
				default: false,
				component: () => prompt
			}
		]);
	}
};

/**
 * @param {string} name
 */
export const setDefaultPrompt = (name) =>
	promptList$.next(promptList$.getValue().reduce((r, c) => [
		...r,
		(() => {
			if (c.default && c.name === name) return c;

			else if (!c.default && c.name === name) {
				return {
					...c,
					default: true
				};
			}

			return {
				...c,
				default: false
			};
		})()
	], []));

export const useDefaultPromptComponent = () => {
	const [_promptList] = usePromptList();
	const [name, setName] = useState('');

	useEffect(() => {
		setName((_promptList.filter(v => v.default === true)[0]?.name ?? ''));
	}, []);

	useEffect(() => {
		setName((_promptList.filter(v => v.default === true)[0]?.name ?? ''));
	}, [_promptList]);

	return { Prompt: _promptList.filter(v => v.name === name)[0]?.component() ?? null, name };
};
