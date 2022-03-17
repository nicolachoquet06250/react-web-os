import { useCallback, useEffect, useState } from "react";

export const useMouse = () => {
	const [positionX, setPositionX] = useState(0);
	const [positionY, setPositionY] = useState(0);

	const handleMouseMove = useCallback(e => {
		setPositionX(e.clientX);
		setPositionY(e.clientY);
	}, []);

	useEffect(() => {
		window.addEventListener('mousemove', handleMouseMove);

		return () => {
			window.removeEventListener('mousemove', handleMouseMove);
		}
	}, []);

	return {
		x: positionX,
		y: positionY
	}
};
