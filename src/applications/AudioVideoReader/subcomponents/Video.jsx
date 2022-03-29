import React, { useCallback, useRef, useState } from "react";
import { FaIcon, FaIconsType } from "../../../components/FaIcon/FaIcon";
import { useVideoReaderStyle } from "../style";
import { AudioVideoLoader } from './AudioVideoLoader';

export const Video = ({ content, mime, width, height, active, moving }) => {
	const [play, setPlay] = useState(false);
	const [volume, setVolume] = useState(50);
	const [mute, setMute] = useState(false);
	const [percentage, setPercentage] = useState(0);
	const [load, setLoad] = useState(true);

	/**
	 * @type {React.MutableRefObject<HTMLVideoElement>}
	 */
	const ref = useRef();

	const handleToggleMute = () => setMute(!mute);
	const handleTogglePlay = () => {
		if (play) ref.current.pause();
		else ref.current.play();
	};
	const handleTimeUpdate = () => {
		const pos = ref.current.currentTime / ref.current.duration;

		setPercentage(pos * 100);

		if (ref.current.ended) {
			setPlay(false);
		}
	};
	const handleVolumeChange = e => {
		setVolume(parseInt(e.target.value));

		ref.current.volume = parseInt(e.target.value) / 100;
	};
	const handleProgressBarClick = e => {
		const x = e.pageX - e.target.getBoundingClientRect().left;
		const width = e.target.className.indexOf('orangeJuice-') !== -1
			? e.target.parentElement.offsetWidth : e.target.offsetWidth;
		const askedAdvancement = Math.round((x * 100) / width);

		ref.current.currentTime = (askedAdvancement * ref.current.duration) / 100;

		setPercentage(askedAdvancement);
	};
	const handlePlay = () => setPlay(true);
	const handlePause = () => setPlay(false);

	const getVolumeIcon = useCallback(() => {
		if (mute) return 'volume-xmark';
		if (volume === 0) return 'volume-off';
		if (volume < 50) return 'volume-low';

		return 'volume-high';
	}, [mute, volume]);
	const getPlayIcon = useCallback(() => play ? 'pause' : 'play', [play]);

	const { video, allVid, buttons, controls, orangeBar, orangeJuice, volumeStyle } = useVideoReaderStyle({
		advancement: percentage + '%',
		load, width, height, active, moving
	});

	return (<div className={allVid}>
		<div className={'play-pause-frame'}
			 onClick={handleTogglePlay}>
			<FaIcon type={FaIconsType.SOLID} icon={(play ? 'play' : 'pause')} />
		</div>

		<video ref={ref} src={content} controls={false} className={video}
			   onLoadStart={() => setLoad(true)}
			   onLoadedData={() => setLoad(false)}
			   muted={mute}
			   onPlay={handlePlay}
			   onPause={handlePause}
			   onTimeUpdate={handleTimeUpdate} />

		<div className={controls}>
			<div className={orangeBar}
				 onClick={handleProgressBarClick}>
				<div className={orangeJuice} />
			</div>

			<div className={buttons}>
				<button onClick={handleTogglePlay}>
					<FaIcon type={FaIconsType.SOLID} icon={getPlayIcon()} />
				</button>

				<div>
					<button onClick={handleToggleMute}>
						<FaIcon type={FaIconsType.SOLID} icon={getVolumeIcon()} />
					</button>

					<input type={'range'} min={0} max={100} defaultValue={volume} step={1}
						   className={volumeStyle}
						   onChange={handleVolumeChange} />
				</div>
			</div>
		</div>

		<AudioVideoLoader show={load} color={'white'} />
	</div>);
};