import { BehaviorSubject } from "rxjs";
import { createRxJsUseGetter } from "../../../hooks/utils/rxjs-getter";
import { useEffect } from "react";

const terminalPlugins = {};
const terminalPlugins$ = new BehaviorSubject(terminalPlugins);

export const useTerminalPlugins = createRxJsUseGetter(terminalPlugins, terminalPlugins$);

export const useRegisterTerminalPlugin = (id, plugin = () => null) => {
	terminalPlugins$.next({
		...terminalPlugins$.getValue(),
		[id]: plugin
	});
};

export const useRunAllTerminalPlugins = () => {
	useEffect(() => {
		const plugins = terminalPlugins$.getValue();

		Array.from(Object.keys(plugins)).map(v => {
			const plugin = plugins[v];
			plugin();
		});
	}, []);
}
