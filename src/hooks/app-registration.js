import { useEffect } from "react";
import { useRegisterApplication, useRegisterPinApp } from "./applications";
import { Calculatrice, CalculatriceIcon } from "../applications/Calculatrice/Calculatrice";
import { VsCode } from "../applications/VsCode/VsCode";
import { FileExplorer, FileExplorerIcon } from "../applications/FileExplorer/FileExplorer";
import { Terminal, TerminalIcon } from "../applications/Terminal/Terminal";

export const useRegisterApps = () => {
	const { register: registerCalculatrice } = useRegisterPinApp('Calculatrice');
	const { register: registerVsCode } = useRegisterPinApp('Vs Code');
	const { register: registerFileExplorer } = useRegisterPinApp('Explorateur de fichiers');
	const { register: registerTerminal } = useRegisterPinApp('Terminal');

	useEffect(() => {
		useRegisterApplication(
			'Calculatrice',
			CalculatriceIcon,
			Calculatrice
		);
		/*useRegisterApplication(
			'Vs Code',
			'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/2048px-Visual_Studio_Code_1.35_icon.svg.png',
			VsCode
		);*/
		useRegisterApplication(
			'Explorateur de fichiers',
			FileExplorerIcon,
			FileExplorer
		);
		useRegisterApplication(
			'Terminal',
			TerminalIcon,
			Terminal
		);

		// épinglage dans la bar des taches
		registerCalculatrice({ taskBar: true });
		registerVsCode({ taskBar: true });
		registerFileExplorer({ taskBar: true });
		registerTerminal({ taskBar: true });
	}, []);
};
