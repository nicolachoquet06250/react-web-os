import { useState } from 'react'
import { OsDesktop } from "../OsDesktop/OsDesktop";
import { TaskBar } from "../TaskBar/TaskBar";
import { ContextualMenu } from "../ContextualMenu/ContextualMenu";
import { useRegisterContextualMenu } from "../../hooks/contextual-menu";
import { ContextualMenuWindowContent } from './subcomponents';
import {
    useApplicationsInstances,
    useControlApplication,
    useTaskbarPinApplications
} from "../../hooks/applications";
import { useRegisterApps } from "../../hooks/app-registration";
import { RunningApplicationList } from "../OsDesktop/subcomponents";

export const App = () => {
    // définition des states
    const [showedContextMenuId, setShowedContextMenuId] = useState('');
    const [contextMenuPositionX, setContextMenuPositionX] = useState(0);
    const [contextMenuPositionY, setContextMenuPositionY] = useState(0);

    const { run, stop } = useControlApplication();

    const taskbarPinApps = useTaskbarPinApplications();
    const appsInstances = useApplicationsInstances();

    // enregistrement des menus contextuels
    useRegisterContextualMenu('window', ContextualMenuWindowContent);

    // enregistrement des applications
    useRegisterApps();

    // définition des constantes
    const background = 'https://lafibre.info/images/smileys/201604_warty-final-ubuntu.png';
    const contextMenuPosition = {
        x: contextMenuPositionX,
        y: contextMenuPositionY
    };

    // définition des fonctions et handlers
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

            <RunningApplicationList onContextMenu={handleContextMenu} />

            <TaskBar pinApps={taskbarPinApps}
                     runningApps={appsInstances}
                     onOpenApp={run}
                     onCloseApp={stop} />
        </OsDesktop>
    </div>);
};
