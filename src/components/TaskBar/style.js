import { createUseStyles } from "react-jss";

export const useTaskBarStyle = createUseStyles({
	taskBar: {
		position: 'absolute',
		bottom: 0,
		left: 0,
		right: 0,
		height: '25px',
		background: 'rgba(0, 0, 0, .3)'
	},

	taskBarIcon: {
		height: '20px',
		width: '20px',
		padding: '3px',
		cursor: 'pointer',
		borderRadius: '5px',
		position: 'relative',
		border: 'none',
		backgroundColor: 'transparent',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',

		'&.active::after': {
			content: `''`,
			position: 'absolute',
			top: '-4px',
			left: 'calc(15px / 2)',
			width: '4px',
			height: '4px',
			background: 'white',
			borderRadius: '4px'
		},

		'& > img': {
			width: '100%',
			height: '100%'
		},

		'&:hover': {
			backgroundColor: 'black'
		}
	},

	taskBarIconContainer: {
		position: 'absolute',
		left: '25px',
		bottom: 0,
		height: '25px',
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'flex-start',
		alignItems: 'center',
		maxWidth: `calc(100% - 50px)`
	},

	appPreviewContainer: {
		display: 'none',
		flexDirection: 'row',
		position: 'absolute',
		bottom: '30px',
		left: '5px',
		transitionProperty: 'display',
		transitionDuration: '0s',
		transitionTimingFunction: 'linear',
		transitionDelay: '1s',

		'&.show': {
			display: 'flex'
		}
	},

	appPreview: {
		width: '180px',
		height: '100px',
		backgroundColor: 'rgba(0, 0, 0, .3)',
		marginRight: '5px',
		borderBottomLeftRadius: '5px',
		borderBottomRightRadius: '5px',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		position: 'relative',

		'&::before': {
			content: `''`,
			position: 'absolute',
			top: '-16px',
			left: '5px',
			height: '15px',
			width: '15px',
			backgroundImage: 'var(--icon)',
			backgroundSize: 'cover',
			backgroundPosition: 'center',
			backgroundRepeat: 'no-repeat'
		},

		'&::after': {
			content: `attr(data-title)`,
			position: 'absolute',
			top: '-21px',
			left: 0,
			right: 0,
			borderTopLeftRadius: '5px',
			borderTopRightRadius: '5px',
			backgroundColor: 'rgba(0, 0, 0, .3)',
			color: 'wheat',
			height: '21px',
			display: 'flex',
			justifyContent: 'center',
			alignItems: 'center'
		},

		'& > .close-button': {
			position: 'absolute',
			height: '15px',
			width: '15px',
			top: '-15px',
			right: '5px',
			zIndex: 2,
			fontSize: '12px',
			cursor: 'pointer',
			backgroundColor: 'transparent',
			color: 'white',
			border: 'none',
			transition: 'background-color .2s ease-out',
			borderRadius: '5px',
			display: 'flex',
			justifyContent: 'center',
			alignItems: 'center',

			'&:hover': {
				backgroundColor: 'red'
			}
		}
	},

	taskBarDateSection: {
		width: '50px',
		height: '25px',
		position: 'absolute',
		right: 0,
		bottom: 0,
		display: 'flex',
		borderRadius: '5px',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		fontSize: '9px',
		color: 'white',
		cursor: 'pointer',

		'&:hover': {
			background: 'black'
		}
	}
});
