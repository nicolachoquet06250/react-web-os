import React from "react";
import { createUseStyles } from "react-jss";
import { Window } from '../Window/Window';

const useStyle = createUseStyles({
    bodyAddStyle: {
        height: 'calc(100% - 17px)'
    }
});

/**
 * @param {number} minWidth
 * @param {number} minWidth
 * @param {number} width
 * @param {number} height
 * @param {number} positionX
 * @param {number} positionY
 * @param {boolean} fullScreen
 * @param {null|JSX.Element} windowHeader
 * @param {string} headerBackground
 * @param {string} bodyBackground
 * @param {string} headerColor
 * @param {boolean} resizable
 * @param {JSX.Element|Array<JSX.Element>} children
 * @param {string|JSX.Element} title
 * @param {boolean} minimized
 * @param {() => any} onClose
 * @param {() => any} onContextMenu
 * @param {() => any} onActive
 * @param {() => any} onUnactive
 * @param {() => any} onResize
 * @param {() => any} onMinimize
 * @param {() => any} onMaximize
 * @param {() => any} onMoving
 * @param {() => any} onMoveEnd
 * @returns {JSX.Element}
 */
export const WebViewWindow = ({ 
    href, 
    // Window component props
	...windowProps
}) => {
    const { bodyAddStyle } = useStyle();

    return (<Window {...windowProps} bodyAddStyle={bodyAddStyle}>
        <iframe style={{ width: '100%', height: 'calc(100% - 4px)', border: 'none', backgroundColor: 'initial', pointerEvents: 'initial' }} 
                referrerpolicy={'no-referrer'} 
                sandbox={'allow-downloads allow-forms allow-modals allow-pointer-lock allow-popups allow-presentation allow-same-origin allow-scripts'}
                src={href} />
    </Window>);
};