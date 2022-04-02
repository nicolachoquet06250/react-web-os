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
	bodyAddStyle = '',
	onClose = () => null,
	onContextMenu = () => null,
	onActive = () => null,
	onUnactive = () => null,
	onResize = () => null,
	onMinimize = () => null,
	onMaximize = () => null,
	onMoving = () => null,
	onMoveEnd = () => null
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

	/**
	 * @type {React.MutableRefObject<HTMLDivElement>}
	 */
	const windowRef = useRef();
	const windowHeaderRef = createRef();

	const { resizing, side } = useResize(
		windowRef,
		isFullScreen,
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

		setWidth(width);
		setTmpWidth(width);

		setHeight(height);
		setTmpHeight(height);

		onResize(width, height, fullScreen);
	}, []);

	// synchronisation des states par rapport aux changements externes
	useEffect(() => {
		setFullScreen(fullScreen);
	}, [fullScreen]);
	useEffect(() => {
		onResize(windowRef.current.offsetWidth, windowRef.current.offsetHeight, isFullScreen);
	}, [isFullScreen]);
	useEffect(() => {
		if (positionX) setPositionX(positionX);
	}, [positionX]);
	useEffect(() => {
		if (positionY) setPositionY(positionY);
	}, [positionY]);
	useEffect(() => {
		setWidth(width);
	}, [width]);
	useEffect(() => {
		if (moving) onMoving();
		else onMoveEnd();
	}, [moving]);

	useEffect(() => {
		onResize(
			resizing ? tmpWidth : currentWidth,
			resizing ? tmpHeight : currentHeight,
			false
		);
	}, [currentHeight, tmpHeight, currentWidth, tmpWidth]);

	// evenement sur l'état de la fenêtre
	useEffect(() => {
		if (!minimized) onMaximize();
	}, [minimized]);

	const Header = windowHeader ?? WindowHeader;

	const { windowStyle, windowBodyStyle } = useWindowStyle({
		minWidth, minHeight,
		width: (resizing ? tmpWidth : currentWidth),
		height: (resizing ? tmpHeight : currentHeight),
		positionX: ((resizing && side === 'left') || moving || !isFullScreen && tmpPositionX !== 0 ? tmpPositionX : _positionX),
		positionY: ((resizing && side === 'top') || moving || !isFullScreen && tmpPositionY !== 0 ? tmpPositionY : _positionY),
		background: bodyBackground,
		disableTextSelect: moving || resizing,
		active
	});

	useClickAway(windowRef, () => {
		onUnactive();
		setActive(false);
	})

	return (<>
		<div className={windowStyle + (minimized ? ' min' : '') + (isFullScreen ? ' fullscreen' : '')}
		     onMouseDown={() => {
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

			<div className={windowBodyStyle + ' ' + bodyAddStyle}
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
	onMaximize: PropTypes.func,
	onMoving: PropTypes.func,
	onMoveEnd: PropTypes.func
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
	onMaximize: () => null,
	onMoving: () => null,
	onMoveEnd: () => null
};
