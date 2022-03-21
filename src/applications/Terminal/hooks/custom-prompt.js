import { BehaviorSubject } from "rxjs";
import { createRxJsUseGetter } from "../../../hooks/utils/rxjs-getter";

const customPrompt = {
	component: null
};
const customPrompt$ = new BehaviorSubject(customPrompt);

export const useCustomPrompt = createRxJsUseGetter(customPrompt, customPrompt$);

/**
 * @param {({ username: string, active: boolean, onResult: (commandResult: Array<string>) => any }) => JSX.Element} _customPrompt
 */
export const setCustomPrompt = (_customPrompt) => {
	customPrompt$.next({
		component: _customPrompt
	});
};
