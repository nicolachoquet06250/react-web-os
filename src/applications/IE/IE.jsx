import React, { useEffect } from "react";
import { showBlueScreen, hideBlueScreen } from '../../components/BlueScreen/hooks';
import { useControlApplication } from '../../hooks/applications';

export const IEIcon = 'http://assets.stickpng.com/images/5a784f86690086599e28f84c.png';

export const IE = () => {
    const { stop } = useControlApplication();

    useEffect(() => {
        const showTo = setTimeout(() => {
            showBlueScreen();
            clearTimeout(showTo);
        }, 1000);

        const hideTo = setTimeout(() => {
            hideBlueScreen();
            stop('Internet Explorer');
            clearTimeout(hideTo);
        }, 11000);
    }, []);
    
    return (<></>);
};