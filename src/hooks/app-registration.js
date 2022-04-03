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
import { MonCV, MonCVIcon } from "../applications/MonCV/MonCV";
import { IE, IEIcon } from "../applications/IE/IE";
import { WebBrowser, WebBrowserIcon } from "../applications/WebBrowser/WebBrowser";
import { Messages, MessagesIcon } from "../applications/Messages/Messages";

export const useRegisterApps = () => {
	const { register: registerCalculatrice } = useRegisterPinApp('Calculatrice');
	const { register: registerFileExplorer } = useRegisterPinApp('Explorateur de fichiers');
	const { register: registerTerminal } = useRegisterPinApp('Terminal');
	const { register: registerMonCv } = useRegisterPinApp('Mon CV');
	const { register: registerIE } = useRegisterPinApp('Internet Explorer');
	const { register: registerMessages } = useRegisterPinApp('Messages');
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
		useRegisterApplication(
			'Mon CV',
			MonCVIcon,
			MonCV
		);
		useRegisterApplication(
			'Internet Explorer',
			IEIcon,
			IE
		);
		useRegisterApplication(
			'Navigateur web',
			WebBrowserIcon,
			WebBrowser
		);
		useRegisterApplication(
			'Messages',
			MessagesIcon,
			Messages
		);

		// épinglage dans la bar des taches
		registerMonCv({ startMenu: true });
		registerCalculatrice({ taskBar: true });
		registerFileExplorer({ taskBar: true });
		registerTerminal({ taskBar: true, startMenu: true });
		registerMonCv({ taskBar: true });
		registerIE({ taskBar: true, startMenu: true });
		registerMessages({ taskBar: true })

		run('Git');
	}, []);
};
