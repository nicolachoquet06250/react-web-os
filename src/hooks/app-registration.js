import { useEffect } from "react";
import { useControlApplication, useRegisterApplication, useRegisterPinApp } from "./applications";
import { Calculatrice, CalculatriceIcon } from "../applications/Calculatrice/Calculatrice";
import { VsCode, VsCodeIcon } from "../applications/VsCode/VsCode";
import { FileExplorer, FileExplorerIcon } from "../applications/FileExplorer/FileExplorer";
import { Terminal, TerminalIcon } from "../applications/Terminal/Terminal";
import { BlocNote, BlocNoteIcon } from "../applications/BlocNote/BlocNote";
import { ImageViewer, ImageViewerIcon } from "../applications/ImageViewer/ImageViewer";
import { Git } from "../applications/Git/Git";
import { AudioVideoReader, AudioVideoReaderIcon } from "../applications/AudioVideoReader/AudioVideoReader";
import { ReactVisualEditor, ReactVisualEditorIcon } from "../applications/ReactVisualEditor/ReactVisualEditor";
import { VueVisualEditor, VueVisualEditorIcon } from "../applications/VueVisualEditor/VueVisualEditor";

export const useRegisterApps = () => {
	const { register: registerCalculatrice } = useRegisterPinApp('Calculatrice');
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
		useRegisterApplication(
			'Lecteur multimédia',
			AudioVideoReaderIcon,
			AudioVideoReader
		);
		useRegisterApplication(
			'React Visual Editor',
			ReactVisualEditorIcon,
			ReactVisualEditor
		);
		useRegisterApplication(
			'Vue Visual Editor',
			VueVisualEditorIcon,
			VueVisualEditor
		);

		// épinglage dans la bar des taches
		registerCalculatrice({ taskBar: true });
		registerFileExplorer({ taskBar: true });
		registerTerminal({ taskBar: true });

		run('Git');
	}, []);
};
