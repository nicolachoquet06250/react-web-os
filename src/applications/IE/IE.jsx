import React, { useEffect } from "react";
import { showBlueScreen, hideBlueScreen } from '../../components/BlueScreen/hooks';
import { useControlApplication } from '../../hooks/applications';
import IELogo from './ie-logo.png';

export const IEIcon = IELogo;

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
