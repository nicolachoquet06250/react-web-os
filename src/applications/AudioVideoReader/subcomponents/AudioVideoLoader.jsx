import React, { useEffect, useState } from "react";
import { useVideoReaderStyle } from '../style';
import { FaIcon, FaIconsType } from '../../../components/FaIcon/FaIcon';

export const AudioVideoLoader = ({ show = true, color = 'black' }) => {
	const [lightState, setLightState] = useState('red');
	const [showLoader, setShowLoader] = useState(true);
	const { loader } = useVideoReaderStyle({ color });

	useEffect(() => {
		if (!show) {
			setLightState('orange');

			const to = setTimeout(() => {
				setLightState('green');
				clearTimeout(to);
			}, 1000);
			const subTo = setTimeout(() => {
				setShowLoader(false);
				clearTimeout(subTo);
			}, 2000);
		}
	}, [show]);

	return showLoader && (<div className={loader}>
		<span style={{ fontSize: '60px', display: 'inline-block', position: 'relative' }}>
			<FaIcon type={FaIconsType.SOLID} icon={'traffic-light'} />

			<span className={lightState} />
		</span>
	</div>);
};