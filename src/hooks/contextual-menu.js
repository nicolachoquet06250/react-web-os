import { BehaviorSubject } from "rxjs";
import { useEffect, useState } from "react";

const defaultValue = {};
const contextMenus$ = new BehaviorSubject(defaultValue);

export const useContextualMenus = () => {
	const [contextMenus, setContextMenus] = useState(defaultValue);

	useEffect(() => {
		contextMenus$.subscribe(newContextMenus => {
			setContextMenus(newContextMenus);
		});
	}, []);

	return { contextMenus };
};

export const useRegisterContextualMenu = (id, contextMenu) => {
	const oldContextMenus = contextMenus$.getValue();
	const contextMenus = {
		...oldContextMenus,
		[id]: contextMenu
	};

	contextMenus$.next(contextMenus);
};

export const useCurrentContextualMenu = id => {
	const { contextMenus } = useContextualMenus();

	return Array.from(Object.keys(contextMenus)).indexOf(id) !== -1 ? contextMenus[id] : null;
};
