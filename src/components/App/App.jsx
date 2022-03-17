import { useEffect, useState } from 'react'
import { OsDesktop } from "../OsDesktop/OsDesktop";
import { TaskBar } from "../TaskBar/TaskBar";
import { Window } from "../Window/Window";
import { ContextualMenu } from "../ContextualMenu/ContextualMenu";
import { useRegisterContextualMenu } from "../../hooks/contextual-menu";
import { ContextualMenuWindowContent, WindowTitle } from './subcomponents';

export const App = () => {
    // définition des states
    const [runningApps, setRunningApps] = useState({});
    const [showApp, setShowApp] = useState(false);
    const [showedContextMenuId, setShowedContextMenuId] = useState('');
    const [contextMenuPositionX, setContextMenuPositionX] = useState(0);
    const [contextMenuPositionY, setContextMenuPositionY] = useState(0);

    useEffect(() => {
        // enregistrement des menus contextuels
        useRegisterContextualMenu('window', ContextualMenuWindowContent);
    }, []);

    // définition des constantes
    const pinApps = [
        {
            title: 'Calculatrice',
            icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/GNOME_Calculator_icon_2018.svg/1200px-GNOME_Calculator_icon_2018.svg.png'
        },
        {
            title: 'Vs Code',
            icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/2048px-Visual_Studio_Code_1.35_icon.svg.png'
        }
    ];
    const background = 'https://lafibre.info/images/smileys/201604_warty-final-ubuntu.png';
    const contextMenuPosition = {
        x: contextMenuPositionX,
        y: contextMenuPositionY
    };

    // définition des fonctions et handlers
    const createRunningApp = title => {
        const _runningApps = {...runningApps};

        _runningApps[title] = {
            instanceNb: (!_runningApps[title] ? 1 : _runningApps[title].instanceNb + 1)
        };

        setRunningApps(_runningApps);

        setShowApp(true);
    };
    const removeRunningApp = title => {
        const _runningApp = {...runningApps};

        if (_runningApp[title]) {
            if (_runningApp[title].instanceNb === 1) {
                delete _runningApp[title];
            } else {
                _runningApp[title].instanceNb -= 1;
            }
        }

        setRunningApps(_runningApp);
    };
    const handleCloseApp = () => {
        removeRunningApp(Array.from(Object.keys({ ...runningApps }))[0]);
        setShowApp(false);
    };
    const handleDesktopContextMenu = (id, x, y) => {
        setShowedContextMenuId(id);
        setContextMenuPositionX(x);
        setContextMenuPositionY(y);
    };
    const handleWindowContextMenu = e => {
        e.preventDefault();
        e.stopPropagation();
        setShowedContextMenuId('window');
        setContextMenuPositionX(e.clientX);
        setContextMenuPositionY(e.clientY);
    };
    const handleContextmenuHide = () => setShowedContextMenuId('');

    return (<div className="App">
        <OsDesktop background={background}
                   onContextMenu={handleDesktopContextMenu}>
            <ContextualMenu id={showedContextMenuId}
                            position={contextMenuPosition}
                            show={showedContextMenuId !== ''}
                            onHide={handleContextmenuHide} />

            {showApp && (
                <Window headerBackground={'rgba(0, 0, 0, .5)'}
                        headerColor={'wheat'}
                        bodyBackground={'rgba(0, 0, 0, .5)'}
                        onClose={handleCloseApp}
                        title={<WindowTitle />}
                        onContextMenu={handleWindowContextMenu}>
                    {Array.from(new Array(50).keys())
                        .map(i =>
                            (<div key={i} style={{ color: 'wheat' }}>
                                Hello
                            </div>)
                        )}
                </Window>
            )}

            <TaskBar pinApps={pinApps}
                     runningApps={runningApps}
                     onOpenApp={createRunningApp}
                     onCloseApp={handleCloseApp} />
        </OsDesktop>
    </div>);
};
