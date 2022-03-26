import { createUseStyles } from "react-jss";

export const useOsDesktopStyle = createUseStyles({
	osDesktop: ({ background }) => ({
		position: 'absolute',
		top: 0,
		left: 0,
		right: 0,
		bottom: 0,
		backgroundImage: `url(${background})`,
		overflow: 'hidden'
	}),

	desktopGrid: {
		height: 'calc(100% - 25px)',
		display: 'inline-flex',
		flexDirection: 'column',
		justifyContent: 'flex-start',
		alignItems: 'flex-start',
		flexWrap: 'wrap',
		padding: '5px',

		'& > button': {
			display: 'flex',
			flexDirection: 'column',
			border: 'none',
			backgroundColor: 'transparent',
			cursor: 'pointer',
			transition: 'background-color .2s ease-out',
			borderRadius: '5px',
			margin: '5px',

			'&:active, &:focus': {
				backgroundColor: 'blue'
			},

			'& > span:first-child': {
				fontSize: '50px'
			}
		},
	}
});
