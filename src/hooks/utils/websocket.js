import { useEffect, useRef, useState } from "react";

export const useWebsocket = (url, port = null, forceHttp = false, admin = false) => {
    const [error, setError] = useState(null);
    const [message, setMessage] = useState(null);
    const [closed, setClosed] = useState(true);
    const [socketId, setSocketId] = useState(null);
    
	/**
	 * @type {React.MutableRefObject<WebSocket>}
	 */
    const websocket = useRef(null);

    const handleError = e => {
        setError(e);
        setClosed(true);
    };

    const handleOpen = e => {
        setMessage(e);
        setSocketId(e.id);
        setClosed(false);
    };

    const handleClose = e => {
        setMessage(e);
        setSocketId(null);
        setClosed(true);
    };

    const handleMessage = e => setMessage(e);

    useEffect(() => {
        if (url) {
            const protocol = `${window.location.protocol === 'http:' || forceHttp ? 'ws' : 'wss'}://`;

            websocket.current = new WebSocket(protocol + (port ? `:${port}` : '') + url);

            websocket.current.addEventListener('error', handleError);
            websocket.current.addEventListener('open', handleOpen);
            websocket.current.addEventListener('message', handleMessage);
            websocket.current.addEventListener('close', handleClose);
        }

        return () => {
            websocket.current.close();

            websocket.current.removeEventListener('error', handleError);
            websocket.current.removeEventListener('open', handleOpen);
            websocket.current.removeEventListener('message', handleMessage);
            websocket.current.removeEventListener('close', handleClose);
        }
    }, [url, port, forceHttp]);

    useEffect(() => {
        if (!closed) {
            websocket.current.send(JSON.stringify({
                channel: 'createAdmin',
                data: { socketId }
            }));
        }
    }, [admin]);

    return { message, error, closed, socketId };
};