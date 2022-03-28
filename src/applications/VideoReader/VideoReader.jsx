import React, { useCallback, useEffect, useRef, useState } from "react";
import { Window } from "../../components/Window/Window";
import { createContextMenuHandler } from "../../hooks/utils/handler";
import { getFileContent } from "../FileExplorer/hooks";
import { FaIcon, FaIconsType } from "../../components/FaIcon/FaIcon";
import { createUseStyles } from "react-jss";

export const VideoReaderIcon = 'https://fr.seaicons.com/wp-content/uploads/2015/10/multimedia-video-player-icon.png';

export const VideoReaderTitle = ({ path }) => (<>
	<span className={'emoji'}>
		<img src={VideoReaderIcon} alt={'video reader icon'}
		     style={{ width: '15px', height: '15px', transform: 'translateY(2px)' }} />
	</span>

	<span>
		Lecteur de vidéos
	</span>

	<span style={{
		flex: 1,
		textAlign: 'right',
		marginRight: '5px',
		fontSize: '12px',
		minWidth: '100px',
		overflow: 'hidden',
		wordWrap: 'inherit',
		whiteSpace: 'nowrap',
		textOverflow: 'ellipsis'
	}}>
		{path.split('/').pop()}
	</span>
</>);

const useVideoReaderStyle = createUseStyles({
	container: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		height: '100%',
		cursor: 'pointer'
	},

	video: ({ width, height }) => ({
		width,
		maxHeight: `calc(${height} - 25px)`
	}),

	allVid: ({ load, active, moving }) => ({
		width: '100%',
		maxWidth: '800px',
		position: 'relative',
		overflow: 'hidden',
		borderRadius: '5px',

		'&:hover': {
			'& > [class^=controls-]': {
				transform: load || !active || moving ? false : 'translateY(0px)'
			}
		},

		'& > .play-pause-frame': {
			position: 'absolute',
			top: 0,
			left: 0,
			right: 0,
			bottom: 0,
			display: 'flex',
			justifyContent: 'flex-start',
			alignItems: 'flex-start',
			fontSize: '20px',
			color: 'rgba(0, 0, 0, .5)',
			padding: '10px'
		}
	}),

	controls: {
		display: 'flex',
		position: 'absolute',
		bottom: 0,
		width: '100%',
		flexWrap: 'wrap',
		backgroundColor: 'rgba(0, 0, 0, .7)',
		transform: 'translateY(calc(100% - 4px))',
		transition: 'all .2s'
	},

	orangeBar: {
		height: '10px',
		width: '100%',
		cursor: 'pointer'
	},

	orangeJuice: ({ advancement = '0%' }) => ({
		height: '10px',
		width: advancement,
		backgroundColor: 'orangered'
	}),

	buttons: {
		padding: '5px',

		display: 'flex',
		width: '100%',
		justifyContent: 'space-between',
		alignItems: 'center',

		'& > div': {
			display: 'flex',
			justifyContent: 'center',
			alignItems: 'center'
		},

		'& button': {
			backgroundColor: 'transparent',
			border: 0,
			outline: 0,
			cursor: 'pointer',
			color: '#FFF',

			'&:last-child': {
				position: 'relative'
			}
		}
	},

	volumeStyle: {
		appearance: 'none',
		padding: 0,
		font: 'inherit',
		outline: 'none',
		color: '#069',
		opacity: .8,
		backgroundColor: '#CCC',
		boxSizing: 'border-box',
		transition: 'opacity .2s',
		cursor: 'pointer',
		height: '5px',
		maxWidth: '120px',
		width: '100%'

		/*'&::-webkit-slider-runnable-track, &::-moz-range-track, &::-ms-track': {
			height: '100%',
			border: 'none',
			borderRadius: 0,
			color: 'transparent',
			backgroundColor: 'transparent'
		},

		'&::-webkit-slider-thumb, &::-moz-range-thumb, &::-ms-thumb': {
			appearance: 'none',
			width: '1em',
			height: 'inherit',
			border: 'none',
			borderRadius: 0,
			backgroundColor: 'currentColor'
		},

		'&::-ms-tooltip': {
			display: 'none'
		},

		'&::-ms-fill-lower': {
			backgroundColor: 'transparent'
		},

		'&::-ms-fill-upper': {
			backgroundColor: 'transparent'
		}*/
	},

	loader: {
		position: 'absolute',
		top: 0,
		left: 0,
		bottom: 0,
		right: 0,
		backgroundColor: 'rgba(0, 0, 0, .5)',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',

		'& > span > .red': {
			position: 'absolute',
			top: '21px',
			transform: 'translateX(140%)',
			display: 'block',
			height: '10px',
			width: '10px',
			borderRadius: '50px',
			backgroundColor: 'red'
		},
		'& > span > .orange': {
			position: 'absolute',
			top: '36px',
			transform: 'translateX(140%)',
			display: 'block',
			height: '10px',
			width: '10px',
			borderRadius: '50px',
			backgroundColor: 'orange'
		},
		'& > span > .green': {
			position: 'absolute',
			top: '51px',
			transform: 'translateX(140%)',
			display: 'block',
			height: '10px',
			width: '10px',
			borderRadius: '50px',
			backgroundColor: 'green'
		}
	}
});

const VideoLoader = ({ show = true }) => {
	const [lightState, setLightState] = useState('red');
	const [showLoader, setShowLoader] = useState(true);
	const { loader } = useVideoReaderStyle({});

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

export const VideoReader = ({ videoPath = '', onContextMenu = () => null, ...otherProps }) => {
	const [content, setContent] = useState('');
	// const [path, setPath] = useState('');
	const [play, setPlay] = useState(false);
	const [volume, setVolume] = useState(50);
	const [mute, setMute] = useState(false);
	const [percentage, setPercentage] = useState(0);
	const [load, setLoad] = useState(true);
	const [width, setWidth] = useState('100%');
	const [height, setHeight] = useState('100%');
	const [active, setActive] = useState(true);
	const [moving, setMoving] = useState(false);

	/**
	 * @type {React.MutableRefObject<HTMLVideoElement>}
	 */
	const ref = useRef();

	const { container, video, allVid, buttons, controls, orangeBar, orangeJuice, volumeStyle } = useVideoReaderStyle({
		advancement: percentage + '%',
		load, width, height, active, moving
	});

	useEffect(() => {
		setContent(getFileContent(videoPath));
		// setPath(videoPath);
	}, []);

	const getVolumeIcon = useCallback(() => {
		if (mute) return 'volume-xmark';
		if (volume === 0) return 'volume-off';
		if (volume < 50) return 'volume-low';

		return 'volume-high';
	}, [mute, volume]);
	const getPlayIcon = useCallback(() => play ? 'pause' : 'play', [play]);

	const handleContextMenu = createContextMenuHandler(e => onContextMenu('video-viewer', e.clientX, e.clientY));
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
	const handlePlay = () => {
		setPlay(true);
	};
	const handlePause = () => {
		setPlay(false);
	};

	return (<Window bodyBackground={active ? 'black' : 'rgba(0, 0, 0, .5)'}
	                headerBackground={active ? 'white' : 'rgba(255, 255, 255, .5)'}
	                headerColor={'black'}
	                minWidth={483} width={483}
	                title={<VideoReaderTitle path={videoPath} />}
	                onContextMenu={handleContextMenu}
	                onResize={(w, h) => {
						setWidth(w + 'px');
						setHeight(h + 'px');
	                }}
	                onActive={() => setActive(true)}
	                onUnactive={() => setActive(false)}
	                onMoving={() => setMoving(true)}
	                onMoveEnd={() => setMoving(false)}
	                {...otherProps}>
		<div className={container}>
			{content && (<div className={allVid}>
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

				<VideoLoader show={load} />
			</div>)}
		</div>
	</Window>);
}
