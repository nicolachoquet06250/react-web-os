import { useEffect } from "react";
import { useRegisterApplication, useRegisterPinApp } from "./applications";
import { Calculatrice } from "../applications/Calculatrice/Calculatrice";
import { VsCode } from "../applications/VsCode/VsCode";
import { FileExplorer } from "../applications/FileExplorer/FileExplorer";

export const useRegisterApps = () => {
	const { register: registerCalculatrice } = useRegisterPinApp('Calculatrice');
	const { register: registerVsCode } = useRegisterPinApp('Vs Code');
	const { register: registerFileExplorer } = useRegisterPinApp('Explorateur de fichiers');

	useEffect(() => {
		useRegisterApplication(
			'Calculatrice',
			'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/GNOME_Calculator_icon_2018.svg/1200px-GNOME_Calculator_icon_2018.svg.png',
			Calculatrice
		);
		/*useRegisterApplication(
			'Vs Code',
			'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/2048px-Visual_Studio_Code_1.35_icon.svg.png',
			VsCode
		);*/
		useRegisterApplication(
			'Explorateur de fichiers',
			'https://www.coursinfo.fr/wp-content/uploads/2017/10/explorateur-fichiers.png',
			FileExplorer
		);

		// épinglage dans la bar des taches
		registerCalculatrice({ taskBar: true });
		registerVsCode({ taskBar: true });
		registerFileExplorer({ taskBar: true });
	}, []);
};
