import { createSignal } from "@react-rxjs/utils";
import { bind } from "@react-rxjs/core";

// reactive (rxjs) TaskBar state
const [startMenuOpened$, setStartMenuOpened] = createSignal();
const [useOpened] = bind(startMenuOpened$, false);

export const useStartMenu = () => {
	const startMenuOpened = useOpened();

	const openStartMenu = () => setStartMenuOpened(true);
	const closeStartMenu = () => setStartMenuOpened(false);

	return {
		startMenuOpened,

		onOpenStartMenu() {
			openStartMenu()
		},
		onCloseStartMenu() {
			closeStartMenu()
		}
	};
};
