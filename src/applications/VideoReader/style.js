import { createUseStyles } from "react-jss";

export const useVideoReaderStyle = createUseStyles({
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