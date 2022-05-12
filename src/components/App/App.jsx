import React, { useEffect, useState } from 'react'
import { OsDesktop } from "../OsDesktop/OsDesktop";
import { TaskBar } from "../TaskBar/TaskBar";
import { ContextualMenu } from "../ContextualMenu/ContextualMenu";
import { useRegisterContextualMenu } from "../../hooks/contextual-menu";
import { ContextualMenuWindowContent } from './subcomponents';
import {
    useApplicationsInstances,
    useControlApplication, usePinApplications,
    useTaskbarPinApplications
} from "../../hooks/applications";
import { useRegisterApps } from "../../hooks/app-registration";
import { RunningApplicationList } from "../OsDesktop/subcomponents";
import { useAddPromptToList } from "../../applications/Terminal/hooks";
import { Prompt2 } from "../../custom/applications/Terminal/Prompt2/Prompt2";
import { BlueScreen } from '../BlueScreen/BlueScreen';
import { setAdmin } from "../../applications/Messages/hooks";

export const App = () => {
    // définition des states
    const [showedContextMenuId, setShowedContextMenuId] = useState('');
    const [contextMenuPositionX, setContextMenuPositionX] = useState(0);
    const [contextMenuPositionY, setContextMenuPositionY] = useState(0);

    const { run, stop } = useControlApplication();

    const taskbarPinApps = useTaskbarPinApplications();
    const appsInstances = useApplicationsInstances();
    const [pinApplications] = usePinApplications();

    useEffect(() => setShowedContextMenuId(''), [pinApplications]);

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

    useAddPromptToList('alternative prompt', Prompt2);

    return (<div className="App">
        <button id="admin" style={{ display: 'none' }} onClick={() => setAdmin(true)} />

        <OsDesktop background={background}
                   onContextMenu={handleContextMenu}>
            <BlueScreen />

            <ContextualMenu id={showedContextMenuId}
                            position={contextMenuPosition}
                            show={showedContextMenuId !== ''}
                            onHide={handleContextmenuHide} />

            <RunningApplicationList onContextMenu={handleContextMenu} />

            <TaskBar pinApps={taskbarPinApps}
                     runningApps={appsInstances}
                     onOpenApp={run}
                     onCloseApp={stop}
                     onContextMenu={handleContextMenu} />
        </OsDesktop>
    </div>);
};
