import React from "react";
import { createUseStyles } from "react-jss";
import { useBlueScreen } from './hooks';

const useBlueScreenStyle = createUseStyles({
    blueScreen: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: '#0079D9',
        zIndex: 999999999,

        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center',

        '& > *': {
            color: 'white'
        }
    },

    titleBlock: {
        width: '100%',
        height: '200px',
        maxWidth: '900px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignContent: 'flex-start'
    },

    contentBlock: {
        width: '100%',
        maxWidth: '900px'
    }
})

export const BlueScreen = () => {
    const { blueScreen, titleBlock, contentBlock } = useBlueScreenStyle();
    const [showBlueScreen] = useBlueScreen();

    return showBlueScreen && (<div className={blueScreen}>
        <div className={titleBlock}>
            <h1> :( Oh nonnnnnnnnnn !! </h1>

            <p> Il y a eu un soucis !! </p>
        </div>

        <p className={contentBlock}> Mais non, c'est une blague ;) </p>
    </div>);
};