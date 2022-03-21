import { useCallback, useEffect, useState } from 'react';
import { useMouse } from "./utils/mouse";

const findElementFromClass = (root, className) => {
	if (root === null) return null;

	const next = root.nextElementSibling;
	return next && next.classList.contains(className) ? next : findElementFromClass(next, className);
};

const getDirection = (side, originalPosition, currentPosition) => {
	let direction = 'plus';
	if (side === 'left' || side === 'right') {
		direction = originalPosition.x < currentPosition.x ? 'plus' : 'moins';
	} else {
		direction = originalPosition.y < currentPosition.y ? 'moins' : 'plus';
	}

	return direction;
};

export const useResize = (
	ref,
	width, height,
	minWidth, minHeight,
	maxWidth, maxHeight,
	positionX, positionY,
	{
		onLeftResize = () => null,
		onRightResize = () => null,
		onTopResize = () => null,
		onBottomResize = () => null,

		onLeftResized = () => null,
		onRightResized = () => null,
		onTopResized = () => null,
		onBottomResized = () => null
	}
) => {
	const [side, setSide] = useState('');
	const [mousePositionX, setMousePositionX] = useState(0);
	const [mousePositionY, setMousePositionY] = useState(0);
	const [direction, setDirection] = useState('');
	const [resized, setResized] = useState(true);
	const [tmpWidth, setTmpWidth] = useState(0);
	const [tmpPositionX, setTmpPositionX] = useState(0);
	const [tmpHeight, setTmpHeight] = useState(0);
	const [tmpPositionY, setTmpPositionY] = useState(0);

	const { x, y } = useMouse();

	const resizeLeft = (tmp = true) => {
		if (tmp) {
			const result = direction === 'plus' ? width - (x - mousePositionX) : width + (mousePositionX - x);
			if (result >= minWidth && result <= maxWidth) {
				setTmpWidth(result);
				setTmpPositionX(direction === 'plus' ? positionX + (x - mousePositionX) : positionX - (mousePositionX - x));
			}
			onLeftResize(tmpWidth, tmpPositionX);
		} else {
			onLeftResized(tmpWidth, tmpPositionX);
		}
	};
	const resizeRight = (tmp = true) => {
		if (tmp) {
			const result = direction === 'plus' ? width + (x - mousePositionX) : width - (mousePositionX - x);
			if (result >= minWidth && result <= maxWidth) setTmpWidth(result);
			onRightResize(tmpWidth);
		} else {
			onRightResized(tmpWidth);
		}
	};
	const resizeTop = (tmp = true) => {
		if (tmp) {
			const result = direction === 'plus' ? height - (y - mousePositionY) : height + (mousePositionY - y);
			if (result >= minHeight && result <= maxHeight) {
				setTmpHeight(result);
				setTmpPositionY(direction === 'plus' ? positionY + (y - mousePositionY) : positionY - (mousePositionY - y));
			}
			onTopResize(tmpHeight, tmpPositionY);
		} else {
			onTopResized(tmpHeight, tmpPositionY);
		}
	};
	const resizeBottom = (tmp = true) => {
		if (tmp) {
			const result = direction === 'plus' ? height + (y - mousePositionY) : height - (mousePositionY - y);
			if (result >= minHeight && result <= maxHeight) setTmpHeight(result);
			onBottomResize(tmpHeight);
		} else {
			onBottomResized(tmpHeight);
		}
	};

	useEffect(() => {
		const leftResizer = findElementFromClass(ref.current, 'left-resizer');
		const rightResizer = findElementFromClass(ref.current, 'right-resizer');
		const bottomResizer = findElementFromClass(ref.current, 'bottom-resizer');
		const topResizer = findElementFromClass(ref.current, 'top-resizer');

		setTmpWidth(width);
		setTmpHeight(height);
		setTmpPositionX(positionX);
		setTmpPositionY(positionY);

		const handleLeftMouseDown = e => {
			if (e.buttons === 1) {
				setResized(false);
				setSide('left');
				setMousePositionX(e.clientX);
				setMousePositionY(e.clientY);
			}
		};
		const handleRightMouseDown = e => {
			if (e.buttons === 1) {
				setResized(false);
				setSide('right');
				setMousePositionX(e.clientX);
				setMousePositionY(e.clientY);
			}
		};
		const handleBottomMouseDown = e => {
			if (e.buttons === 1) {
				setResized(false);
				setSide('bottom');
				setMousePositionX(e.clientX);
				setMousePositionY(e.clientY);
			}
		};
		const handleTopMouseDown = e => {
			if (e.buttons === 1) {
				setResized(false);
				setSide('top');
				setMousePositionX(e.clientX);
				setMousePositionY(e.clientY);
			}
		};
		const handleMouseUp = () => {
			setResized(true);
			setSide('');
		};

		if (leftResizer) leftResizer.addEventListener('mousedown', handleLeftMouseDown);
		if (rightResizer) rightResizer.addEventListener('mousedown', handleRightMouseDown);
		if (bottomResizer) bottomResizer.addEventListener('mousedown', handleBottomMouseDown);
		if (topResizer) topResizer.addEventListener('mousedown', handleTopMouseDown);

		window.addEventListener('mouseup', handleMouseUp);

		return () => {
			if (leftResizer) leftResizer.removeEventListener('mousedown', handleLeftMouseDown);
			if (rightResizer) rightResizer.removeEventListener('mousedown', handleRightMouseDown);
			if (bottomResizer) bottomResizer.removeEventListener('mousedown', handleBottomMouseDown);
			if (topResizer) topResizer.removeEventListener('mousedown', handleTopMouseDown);

			window.removeEventListener('mouseup', handleMouseUp);
		};
	}, []);
	useEffect(() => {
		setTmpWidth(width);
	}, [width]);
	useEffect(() => {
		setTmpHeight(height);
	}, [height]);
	useEffect(() => {
		setTmpPositionX(positionX);
	}, [positionX]);
	useEffect(() => {
		setTmpPositionY(positionY);
	}, [positionY]);

	useEffect(() => {
		if (side) {
			setDirection(
				getDirection(
					side,
					{
						x: mousePositionX,
						y: mousePositionY
					},
					{ x, y }
				)
			);

			switch (side) {
				case 'left':
					resizeLeft();
					break;
				case 'right':
					resizeRight();
					break;
				case 'top':
					resizeTop();
					break;
				case 'bottom':
					resizeBottom();
					break;
			}
		}
	}, [side, x, y]);

	useEffect(() => {
		if (resized) {
			switch (side) {
				case 'left':
					resizeLeft(false);
					break;
				case 'right':
					resizeRight(false);
					break;
				case 'top':
					resizeTop(false);
					break;
				case 'bottom':
					resizeBottom(false);
					break;
			}
		}
	}, [resized]);

	return {
		resizing: !resized,
		side,
		direction
	};
};

export const useMove = (ref, enabled, positionX, positionY, {
	onHorizontalMove = () => null,
	onVerticalMove = () => null,

	onHorizontalMoved = () => null,
	onVerticalMoved = () => null
}) => {
	const [mousePositionX, setMousePositionX] = useState(0);
	const [mousePositionY, setMousePositionY] = useState(0);
	const [directionX, setDirectionX] = useState('');
	const [directionY, setDirectionY] = useState('');
	const [newPositionX, setPositionX] = useState(0);
	const [newPositionY, setPositionY] = useState(0);
	const [moving, setMoving] = useState(false);

	const { x, y } = useMouse();

	const handleRefMouseDown = useCallback(e => {
		if (e.buttons === 1 && ['input', 'select', 'textarea'].indexOf(e.target.tagName.toLowerCase()) === -1) {
			setMousePositionX(e.clientX);
			setMousePositionY(e.clientY);
			if (enabled) {
				setMoving(true);
			}
		}
	}, [enabled]);
	const handleWindowMouseUp = () => setMoving(false);

	useEffect(() => {
		setPositionX(positionX);
		setPositionY(positionY);

		if (ref.current) {
			ref.current.addEventListener('mousedown', handleRefMouseDown);
		}

		window.addEventListener('mouseup', handleWindowMouseUp);

		return () => {
			if (ref.current) {
				ref.current.removeEventListener('mousedown', handleRefMouseDown);
			}

			window.removeEventListener('mouseup', handleWindowMouseUp);
		};
	}, []);

	useEffect(() => {
		if (moving) {
			setDirectionX(mousePositionX < x ? 'plus' : 'moins');
			setDirectionY(mousePositionY < y ? 'moins' : 'plus');

			if (directionX) {
				let result = positionX - (mousePositionX - x);
				if (directionX === 'plus') {
					result = positionX + (x - mousePositionX);
				}
				setPositionX(result);
				if (enabled) onHorizontalMove(result);
			}

			if (directionY) {
				let result = positionY + (y - mousePositionY);
				if (directionY === 'plus') {
					result = positionY - (mousePositionY - y);
				}
				setPositionY(result);
				if (enabled) onVerticalMove(newPositionY);
			}
		}
	}, [x, y]);

	useEffect(() => {
		if (enabled) onHorizontalMove(newPositionX);
	}, [newPositionX]);

	useEffect(() => {
		if (enabled) onVerticalMove(newPositionY);
	}, [newPositionY]);

	useEffect(() => {
		if (!moving) {
			if (enabled) onHorizontalMoved(newPositionX);
			if (enabled) onVerticalMoved(newPositionY);
		}
	}, [moving]);

	return {
		moving
	};
};
