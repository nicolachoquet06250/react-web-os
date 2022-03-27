import { createUseStyles } from "react-jss";

export const useWindowStyle = createUseStyles({
	windowStyle: ({
      minWidth = 0, minHeight = 0,
      width = 0, height = 0,
      positionX = 0, positionY = 0,
      active
	}) => ({
		minWidth: minWidth + 'px',
		minHeight: minHeight + 'px',

		'&:not(.fullscreen)': {
			width: width + 'px',
			height: height + 'px',
			borderRadius: '5px',
		},

		border: '1px solid black',
		position: 'absolute',

		top: positionY + 'px',
		left: positionX + 'px',

		overflow: 'hidden',

		zIndex: active ? 2 : 1,

		transform: 'scale(1)',
		transition: 'transform .5s ease-out',

		'&.min': {
			transform: 'scale(0)'
		},

		'&.fullscreen': {
			left: 0,
			top: 0,
			right: 0,
			bottom: 0,
			borderRadius: 0,
			width: 'auto',
			height: 'auto'
		},

		'& ~ .left-resizer': {
			// backgroundColor: 'red',
			height: (height - 10) + 'px',
			width: '5px',
			position: 'absolute',
			left: (positionX - 5) + 'px',
			top: (positionY + 5) + 'px',
			cursor: 'col-resize',

			zIndex: active ? 1 : 0,
		},
		'& ~ .right-resizer': {
			// backgroundColor: 'red',
			height: (height - 10) + 'px',
			width: '5px',
			position: 'absolute',
			left: (positionX + width) + 'px',
			top: (positionY + 5) + 'px',
			cursor: 'col-resize',

			zIndex: active ? 1 : 0,
		},
		'& ~ .top-resizer': {
			// backgroundColor: 'red',
			height: '5px',
			width: (width - 10) + 'px',
			position: 'absolute',
			left: (positionX + 5) + 'px',
			top: (positionY - 5) + 'px',
			cursor: 'row-resize',

			zIndex: active ? 1 : 0,
		},
		'& ~ .bottom-resizer': {
			// backgroundColor: 'red',
			height: '5px',
			width: (width - 10) + 'px',
			position: 'absolute',
			left: (positionX + 5) + 'px',
			top: (positionY + height) + 'px',
			cursor: 'row-resize',

			zIndex: active ? 1 : 0,
		},

		'& div[class^=windowHeader] *': {
			userSelect: 'none',
			msUserSelect: 'none'
		}
	}),

	windowHeaderStyle: ({ background, color }) => ({
		height: '20px',
		width: '100%',

		background,

		borderBottom: '1px solid black',

		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'flex-end',
		alignItems: 'center',

		'& *': {
			color: (color ?? 'black'),
		},

		'& > div:first-child': {
			flex: 1,
			color: 'wheat',
			paddingLeft: '5px',
			display: 'flex',
			justifyContent: 'flex-start',
			alignItems: 'center',
			'& *': {
				transform: 'translateY(-1px)'
			},

			'& span.emoji': {
				fontSize: '12px',
				marginLeft: '5px',
				marginRight: '5px'
			}
		},

		'& > .button-container': {
			height: '100%',

			display: 'flex',
			justifyContent: 'space-between',
			alignItems: 'center',

			'& > button': {
				height: '100%',
				fontSize: '10px',
				width: '20px',
				flex: 1,

				backgroundColor: 'transparent',
				color: (color ?? 'black'),
				border: 'none',
				transition: 'background-color .5s ease-out, color .5s ease-out',
				cursor: 'pointer',

				'&:hover, &:disabled': {
					backgroundColor: 'rgba(0, 0, 0, .5)',
					color: 'white'
				},

				'&:disabled': {
					cursor: 'default'
				},

				'&.close:hover': {
					backgroundColor: 'rgba(255, 0, 0, .5)',
					color: 'white'
				}
			}
		}
	}),

	windowBodyStyle: ({ background, disableTextSelect }) => ({
		position: 'relative',
		height: 'calc(100% - 20px)',
		overflow: 'auto',
		backgroundColor: background,

		'& *': {
			userSelect: disableTextSelect ? 'none' : false,
			msUserSelect: disableTextSelect ? 'none' : false
		}
	})
});
