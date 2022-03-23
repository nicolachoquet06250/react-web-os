import React, { createRef, useEffect, useRef, useState } from "react";
import { useClickAway, useWindowSize } from "react-use";
import PropTypes from "prop-types";
import { useMove, useResize } from "../../hooks/window";
import { useWindowStyle } from "./style";
import { WindowHeader } from "./subcomponents";

export const Window = ({
    minWidth = 300, minHeight = 300,
    width = 300, height = 300,
    positionX = 0, positionY = 0,
	fullScreen = false,
	windowHeader = null,
    headerBackground = 'transparent', headerColor = 'black',
	bodyBackground = 'transparent',
	resizable = true, children,
	title, minimized,
	onClose = () => null,
	onContextMenu = () => null,
	onActive = () => null,
	onUnactive = () => null,
	onMinimize = () => null,
	onMaximize = () => null
}) => {
	const { width: windowWidth, height: windowHeight } = useWindowSize();
	const [currentWidth, setWidth] = useState(0);
	const [currentHeight, setHeight] = useState(0);

	const [tmpWidth, setTmpWidth] = useState(0);
	const [tmpHeight, setTmpHeight] = useState(0);

	const [_positionX, setPositionX] = useState(positionX);
	const [_positionY, setPositionY] = useState(positionY);

	const [tmpPositionX, setTmpPositionX] = useState(0);
	const [tmpPositionY, setTmpPositionY] = useState(0);

	const [isFullScreen, setFullScreen] = useState(fullScreen);

	const [active, setActive] = useState(true);

	const windowRef = useRef();
	const windowHeaderRef = createRef();

	const { resizing, side } = useResize(
		windowRef,
		currentWidth, currentHeight,
		minWidth, minHeight,
		windowWidth, windowHeight,
		_positionX, _positionY,
		{
			onLeftResize(newWidth, newPositionX) {
				setTmpWidth(newWidth);
				setTmpPositionX(newPositionX);
			},
			onRightResize: newWidth => setTmpWidth(newWidth),
			onTopResize(newHeight, newPositionY) {
				setTmpHeight(newHeight);
				setTmpPositionY(newPositionY);
			},
			onBottomResize: newHeight => setTmpHeight(newHeight),

			onLeftResized(newWidth, newPositionX) {
				setWidth(newWidth);
				setPositionX(newPositionX);
			},
			onRightResized: newWidth => setWidth(newWidth),
			onTopResized(newHeight, newPositionY) {
				setHeight(newHeight);
				setPositionY(newPositionY);
			},
			onBottomResized: newHeight => setHeight(newHeight)
		}
	);

	const { moving } = useMove(windowHeaderRef, !isFullScreen, _positionX, _positionY, {
		onHorizontalMove(newPositionX) {
			setTmpPositionX(newPositionX);
		},
		onVerticalMove(newPositionY) {
			setTmpPositionY(newPositionY);
		},

		onHorizontalMoved(newPositionX) {
			setPositionX(newPositionX);
		},
		onVerticalMoved(newPositionY) {
			setPositionY(newPositionY);
		},
	});

	// initialisation
	useEffect(() => {
		setPositionX((!!positionX ? positionX : (windowWidth / 2) - (width / 2)));
		setTmpPositionX((!!positionX ? positionX : (windowWidth / 2) - (width / 2)));

		setPositionY((!!positionY ? positionY : (windowHeight / 2) - (height / 2)));
		setTmpPositionY((!!positionY ? positionY : (windowHeight / 2) - (height / 2)));

		setTmpWidth(width);
		setTmpHeight(height);

		setWidth(width);
		setHeight(height);
	}, []);

	// synchronisation des states par rapport aux changements externes
	useEffect(() => {
		setFullScreen(fullScreen);
	}, [fullScreen]);
	useEffect(() => {
		if (positionX) setPositionX(positionX);
	}, [positionX]);
	useEffect(() => {
		if (positionY) setPositionY(positionY);
	}, [positionY]);
	useEffect(() => {
		setWidth(width);
	}, [width]);

	// evenement sur l'état de la fenêtre
	useEffect(() => {
		if (!minimized) {
			onMaximize();
		}
	}, [minimized]);

	const Header = windowHeader ?? WindowHeader;

	const { windowStyle, windowBodyStyle } = useWindowStyle({
		minWidth, minHeight,
		width: (resizing ? tmpWidth : currentWidth),
		height: (resizing ? tmpHeight : currentHeight),
		positionX: ((resizing && side === 'left') || moving ? tmpPositionX : _positionX),
		positionY: ((resizing && side === 'top') || moving ? tmpPositionY : _positionY),
		fullScreen: isFullScreen,
		background: bodyBackground,
		disableTextSelect: moving || resizing,
		active
	});

	useClickAway(windowRef, () => {
		onUnactive();
		setActive(false);
	})

	return (<>
		<div className={windowStyle + (minimized ? ' min' : '')} onMouseDown={() => {
			onActive();
			setActive(true);
		}} ref={windowRef}>
			<Header innerRef={windowHeaderRef}
			        background={headerBackground}
			        color={headerColor}
			        resizable={resizable}
					toggleFullScreen={() => setFullScreen(!isFullScreen)}
					onClose={onClose}
					title={title}
					onContextMenu={onContextMenu}
					onMinimize={onMinimize} />

			<div className={windowBodyStyle}
			     onContextMenu={onContextMenu}>
				{children}
			</div>
		</div>

		{resizable && !isFullScreen && <div className={'top-resizer'}/>}
		{resizable && !isFullScreen && <div className={'left-resizer'}/>}
		{resizable && !isFullScreen && <div className={'right-resizer'}/>}
		{resizable && !isFullScreen && <div className={'bottom-resizer'}/>}
	</>)
};

Window.propTypes = {
	minWidth: PropTypes.number,
	minHeight: PropTypes.number,
	width: PropTypes.number,
	height: PropTypes.number,
	positionX: PropTypes.number,
	positionY: PropTypes.number,
	fullScreen: PropTypes.bool,
	headerBackground: PropTypes.string,
	headerColor: PropTypes.string,
	bodyBackground: PropTypes.string,
	resizable: PropTypes.bool,
	title: PropTypes.any,
	onClose: PropTypes.func,
	onContextMenu: PropTypes.func,
	onActive: PropTypes.func,
	onUnactive: PropTypes.func,
	onMinimize: PropTypes.func,
	onMaximize: PropTypes.func
};

Window.defaultTypes = {
	minWidth: 300,
	minHeight: 300,
	width: 300,
	height: 300,
	positionX: 0,
	positionY: 0,
	fullScreen: false,
	headerBackground: 'transparent',
	headerColor: 'black',
	bodyBackground: 'transparent',
	resizable: true,
	onClose: () => null,
	onContextMenu: () => null,
	onActive: () => null,
	onUnactive: () => null,
	onMinimize: () => null,
	onMaximize: () => null
};
