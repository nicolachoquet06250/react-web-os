import { useEffect } from "react";
import { useControlApplication, useRegisterApplication, useRegisterPinApp } from "./applications";
import { Calculatrice, CalculatriceIcon } from "../applications/Calculatrice/Calculatrice";
import { VsCode, VsCodeIcon } from "../applications/VsCode/VsCode";
import { FileExplorer, FileExplorerIcon } from "../applications/FileExplorer/FileExplorer";
import { Terminal, TerminalIcon } from "../applications/Terminal/Terminal";
import { BlocNote, BlocNoteIcon } from "../applications/BlocNote/BlocNote";
import { ImageViewer, ImageViewerIcon } from "../applications/ImageViewer/ImageViewer";
import { useRegisterTerminalPlugin } from "../applications/Terminal/hooks/plugins";
import { useRegisterCommandsInterpreter } from "../applications/Terminal/hooks";
import { Git } from "../applications/Git/Git";

export const useRegisterApps = () => {
	const { register: registerCalculatrice } = useRegisterPinApp('Calculatrice');
	const { register: registerVsCode } = useRegisterPinApp('Vs Code');
	const { register: registerFileExplorer } = useRegisterPinApp('Explorateur de fichiers');
	const { register: registerTerminal } = useRegisterPinApp('Terminal');
	const { run } = useControlApplication();

	useEffect(() => {
		useRegisterApplication(
			'Calculatrice',
			CalculatriceIcon,
			Calculatrice
		);
		useRegisterApplication(
			'Vs Code',
			VsCodeIcon,
			VsCode
		);
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
		useRegisterApplication(
			'Bloc Note',
			BlocNoteIcon,
			BlocNote
		);
		useRegisterApplication(
			'Visionneuse d\'images',
			ImageViewerIcon,
			ImageViewer
		);
		useRegisterApplication(
			'Git',
			'',
			Git,
			true
		);

		// épinglage dans la bar des taches
		registerCalculatrice({ taskBar: true });
		registerFileExplorer({ taskBar: true });
		registerTerminal({ taskBar: true });

		run('Git');

		/*useRegisterTerminalPlugin('git_interpreter', () => {
			useRegisterCommandsInterpreter((state, setState) => [
				{
					regex: /^git status$/g,
					run() {
						setState(['première commande git']);
						console.log('première commande git')
					}
				}
			])
		});*/
	}, []);
};
