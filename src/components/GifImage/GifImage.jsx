import React, { useEffect, useRef, useState } from 'react';
import Freezeframe from 'freezeframe';

export const TRIGGERS = {
    NONE: false,
    CLICK: 'click',
    HOVER: 'hover'
};

/**
 * @param {string} src
 * @param {false|'click'|'hover'} trigger 
 * @returns {JSX.Element}
 */
export const GifImage = ({ src, alt, trigger = TRIGGERS.NONE, className = '', style = {}, onLoad = () => null }) => {
    const ref = useRef();
    const [frame, setFrame] = useState(null);

    useEffect(() => setFrame(new Freezeframe(ref.current, { trigger })), []);
    useEffect(() => {
        if (frame) {
            onLoad(ref, frame);
        }
    }, [frame]);

    return (<img src={src} alt={alt} className={className} style={style} ref={ref} type="image/gif" />);
};