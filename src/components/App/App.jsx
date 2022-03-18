import { useEffect, useState } from 'react'
import { OsDesktop } from "../OsDesktop/OsDesktop";
import { TaskBar } from "../TaskBar/TaskBar";
import { ContextualMenu } from "../ContextualMenu/ContextualMenu";
import { useRegisterContextualMenu } from "../../hooks/contextual-menu";
import { ContextualMenuWindowContent } from './subcomponents';
import { Calculatrice } from "../../applications/Calculatrice/Calculatrice";
import {
    useApplicationsInstances,
    useControlApplication,
    useRegisterApplication,
    useRegisterPinApp,
    useRunningApplications,
    useTaskbarPinApplications
} from "../../hooks/applications";
import { VsCode } from "../../applications/VsCode/VsCode";

export const App = () => {
    // définition des states
    const [showedContextMenuId, setShowedContextMenuId] = useState('');
    const [contextMenuPositionX, setContextMenuPositionX] = useState(0);
    const [contextMenuPositionY, setContextMenuPositionY] = useState(0);
    const { register: registerCalculatrice } = useRegisterPinApp('Calculatrice');
    const { register: registerVsCode } = useRegisterPinApp('Vs Code');

    const { run, stop } = useControlApplication();

    const taskbarPinApps = useTaskbarPinApplications();
    const runningApps = useRunningApplications();
    const appsInstances = useApplicationsInstances();

    useEffect(() => {
        // enregistrement des menus contextuels
        useRegisterContextualMenu('window', ContextualMenuWindowContent);

        // enregistrement des applications
        useRegisterApplication(
            'Calculatrice',
            'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/GNOME_Calculator_icon_2018.svg/1200px-GNOME_Calculator_icon_2018.svg.png',
            Calculatrice
        );
        useRegisterApplication(
            'Vs Code',
            'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/2048px-Visual_Studio_Code_1.35_icon.svg.png',
            VsCode
        );

        // épinglage dans la bar des taches
        registerCalculatrice({ taskBar: true });
        registerVsCode({ taskBar: true });
    }, []);

    // définition des constantes
    const background = 'https://lafibre.info/images/smileys/201604_warty-final-ubuntu.png';
    const contextMenuPosition = {
        x: contextMenuPositionX,
        y: contextMenuPositionY
    };

    // définition des fonctions et handlers
    const handleCloseApp = (title, id) => () => stop(title, id);
    const handleTaskBarCloseApp = (title, id) => stop(title, id);
    const handleContextMenu = (id, x, y) => {
        setShowedContextMenuId(id);
        setContextMenuPositionX(x);
        setContextMenuPositionY(y);
    };
    const handleContextmenuHide = () => setShowedContextMenuId('');

    return (<div className="App">
        <OsDesktop background={background}
                   onContextMenu={handleContextMenu}>
            <ContextualMenu id={showedContextMenuId}
                            position={contextMenuPosition}
                            show={showedContextMenuId !== ''}
                            onHide={handleContextmenuHide} />

            {runningApps.map((r, i) => {
                const Component = r.component;r.id

                return (<Component key={i}
                                   onClose={handleCloseApp(r.title, i)}
                                   onContextMenu={handleContextMenu} />)
            })}

            <TaskBar pinApps={taskbarPinApps}
                     runningApps={appsInstances}
                     onOpenApp={run}
                     onCloseApp={handleTaskBarCloseApp} />
        </OsDesktop>
    </div>);
};
