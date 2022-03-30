import React, { useEffect, useRef, useState } from "react";
import { createUseStyles } from "react-jss";
import { FaIcon, FaIconsType } from "../../components/FaIcon/FaIcon";
import { Window } from '../../components/Window/Window';

export const WebBrowserIcon = "https://upload.wikimedia.org/wikipedia/commons/5/53/Google_Chrome_Material_Icon-450x450.png";

const WebBrowserTitle = () => (<>
    <span className={'emoji'}>
        <img src={WebBrowserIcon} alt={'icon web browser'} 
             style={{ width: '15px', height: '15px', transform: 'translateY(2px)' }} />
    </span>

    <span> Navigateur web </span>
</>);

const useWebBrowserStyle = createUseStyles({
    browserHeader: {
        width: '100%',
        height: '35px',
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },

    secureIconContainer: { 
        color: 'white',
        marginLeft: '5px'
    },

    searchBar: {
        backgroundColor: 'transparent',
        border: '1px solid white',
        borderRadius: '5px',
        height: 'calc(100% - 12px)',
        marginLeft: '5px',
        width: '50%',
        color: 'white',
    },

    browserBody: {
        width: '100%',
        height: 'calc(100% - 35px)'
    }
});

export const WebBrowser = ({ ...otherProps }) => {
    const { browserHeader, secureIconContainer, searchBar, browserBody } = useWebBrowserStyle();
    const [currentUrl, setCurrentUrl] = useState('');
    
	/**
	 * @type {React.MutableRefObject<HTMLIFrameElement>}
	 */
    const iframe = useRef();

    const getIframeAllowed = () => [
        'allow-forms',
        'allow-modals',
        'allow-orientation-lock',
        'allow-pointer-lock',
        'allow-popups',
        'allow-popups-to-escape-sandbox',
        'allow-presentation',
        'allow-same-origin',
        'allow-scripts',
        'allow-top-navigation',
        'allow-top-navigation-by-user-activation'
    ].join(' ');

    const defaulturl = 'https://www.google.com/webhp?igu=1';

    useEffect(() => setCurrentUrl(defaulturl), []);

    return (<Window headerBackground={'black'} 
                    headerColor={'white'}
                    bodyBackground={'black'}
                    minWidth={770} width={770}
                    title={<WebBrowserTitle />}
                    {...otherProps}>
        <header className={browserHeader}>
            <span className={secureIconContainer}>
                {currentUrl.substring(0, 'https://'.length) === 'https://' 
                    ? (<FaIcon type={FaIconsType.SOLID} icon={'lock'} />) 
                        : (<FaIcon type={FaIconsType.SOLID} icon={'lock-open'} />)}
            </span>
            <input type={'text'} defaultValue={currentUrl} onInput={e => setCurrentUrl(e.target.value)} className={searchBar} />
        </header>

        <main className={browserBody}>
            <iframe ref={iframe} 
                    style={{ width: '100%', height: 'calc(100% - 4px)', border: 'none' }} 
                    onLoad={e => console.log(e)}
                    referrerpolicy={'no-referrer'} 
                    sandbox={getIframeAllowed()}
                    src={defaulturl} />
        </main>
    </Window>);
};