import { createUseStyles } from "react-jss";

export const useStyle = createUseStyles({
	monCVContainer: {
		width: '100%',
		height: '100%',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'flex-start',
		overflowY: 'auto',
		overflowX: 'hidden',
		backgroundColor: 'rgba(0, 0, 0, .5)',
		backdropFilter: 'blur(1.5rem)',

		'& *': {
			color: 'white'
		}
	},

	monCV: {
		maxWidth: '600px',
		width: '100%',
		minHeight: '100%',
		borderLeft: '1px solid black',
		borderRight: '1px solid black',
		backgroundColor: 'black'
	},

	header: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',

		'& > div': {
			flex: 1,
			padding: '5px'
		},

		'& p': {
			width: '100%',
			overflow: 'hidden',
			wordWrap: 'inherit',
			whiteSpace: 'nowrap',
			textOverflow: 'ellipsis'
		},

		'& > div > img': {
			margin: '5px',
			borderRadius: '5px',
			width: 'calc(100% - 10px)',
			maxWidth: '200px',
			height: 'auto'
		}
	},

	linksContainer: {
		display: 'flex',
		flexDirection: 'column',
		overflow: 'hidden',
		wordWrap: 'inherit',
		whiteSpace: 'nowrap',
		textOverflow: 'ellipsis',

		'& > span': {
			width: '100%',
			overflow: 'hidden',
			wordWrap: 'inherit',
			whiteSpace: 'nowrap',
			textOverflow: 'ellipsis'
		}
	},

	technicals_skils: {
		paddingLeft: '5px',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'flex-start',

		'& ul > li': {
			listStyle: 'none',
			display: 'flex',
			justifyContent: 'flex-start',
			alignItems: 'center',

			'& > span': {
				textTransform: 'unset',
			},
			
			'& > [class^=fa-]': {
				marginRight: '10px'
			}
		},

		'& > div': {
			display: 'flex',
			flexDirection: 'row',
			flexWrap: 'wrap',
			width: '100%',

			'& > div': {
				width: '50%'
			}
		}
	},

	experiences: {},

	projects: {},

	formations: {},

	badge: {
		paddingLeft: '5px',
		paddingRight: '5px',
		backgroundColor: 'rgba(255, 255, 255, .5)',
		color: 'black',
		borderRadius: '5px',
		marginLeft: '10px',
		display: 'inline-flex',
		justifyContent: 'center',
		alignItems: 'center'
	}
});