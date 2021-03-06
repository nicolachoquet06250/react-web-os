import { BehaviorSubject } from "rxjs";
import { useEffect } from "react";
import { createRxJsUseGetter } from "./utils/rxjs-getter";

const menus = {};
const contextMenus$ = new BehaviorSubject(menus);

export const useContextualMenus = createRxJsUseGetter(menus, contextMenus$);

export const useRegisterContextualMenu = (id, contextMenu) => {
	useEffect(() => {
		const oldContextMenus = contextMenus$.getValue();
		const contextMenus = {
			...oldContextMenus,
			[id]: contextMenu
		};

		contextMenus$.next(contextMenus);
	}, []);
};

export const useCurrentContextualMenu = id => {
	const [contextMenus] = useContextualMenus();

	return Array.from(Object.keys(contextMenus)).indexOf(id) !== -1 ? contextMenus[id] : null;
};
