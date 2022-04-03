import { createUseStyles } from "react-jss";

export const useStyle = createUseStyles({
	monCVContainer: {
		position: 'relative',
		width: '100%',
		height: '100%',
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'flex-start',
		overflowY: 'auto',
		overflowX: 'hidden',
		backgroundColor: 'rgba(0, 0, 0, .5)',
		backdropFilter: 'blur(1.5rem)',

		'& *': {
			color: 'white'
		},

		'&:hover': {
			scrollbarWidth: 'none'
		}
	},

	monCV: {
		maxWidth: '600px',
		width: '100%',
		minHeight: '100%',
		borderLeft: '1px solid black',
		borderRight: '1px solid black',
		backgroundColor: 'black',
		paddingLeft: '10px'
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

	technicals_skills: {
		paddingLeft: '5px',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'flex-start',

		'& h1': {
			marginBottom: 0,

			'& + p': {
				marginTop: '5px'
			}
		},

		'& ul > li': {
			listStyle: 'none',
			display: 'flex',
			flexDirection: 'column',
			justifyContent: 'center',
			alignItems: 'flex-start',

			'& > div > [class^=fa-]': {
				marginRight: '10px'
			}
		},

		'& [class^=card-] > div': {
			display: 'flex',
			flexDirection: 'row',
			flexWrap: 'wrap',
			width: '100%',

			'& > div': {
				minWidth: '50%',
				maxWidth: '100%',
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
		color: 'white',
		borderRadius: '5px',
		marginLeft: '10px',
		display: 'inline-flex',
		justifyContent: 'center',
		alignItems: 'center',
		fontSize: '12px',
		fontWeight: 'normal'
	},

	danger: {
		backgroundColor: 'darkred',
		color: 'white'
	},

	success: {
		backgroundColor: 'darkgreen',
		color: 'white'
	},

	card: {
		marginBottom: '10px',
		width: '100%',

		'& > header': {
			display: 'flex',
			flexDirection: 'row',
			justifyContent: 'flex-start',
			alignItems: 'center',

			'& > div': {
				paddingLeft: '10px',
				display: 'flex',
				flexDirection: 'column',

				'& > .titles-container': {
					marginBottom: '15px',

					'& > h2, & > h3': {
						margin: 0
					}
				},

				'& > h2': {
					marginTop: 0,
					marginBottom: '15px',
				},

				'& > span': {
					marginBottom: '5px'
				}
			}
		}
	},

	side: ({ sideWidth = 0, rotation = 0 }) => ({
		position: 'sticky',
		top: 0,
		bottom: 0,
		width: sideWidth + 'px',
		height: '100%',
		display: 'flex',
		flexDirection: 'column',

		'&:first-child': {
			left: 0,
		},

		'&:last-child': {
			right: 0,
		},

		'& > div': {
			overflow: 'hidden',
			display: 'flex',
			alignItems: 'center!important',
			flex: 1,
			width: 'calc(100% - 10px)',

			'& > img': {
				transition: 'transform .2s ease-out',
				height: '30px!important',
				minHeight: '30px',
				width: 'auto'
			},

			'&:nth-child(odd)': {
				justifyContent: 'flex-end',
				marginRight: '10px',

				'& > img': {
					transform: `rotate(${rotation}deg)`
				}
			},

			'&:nth-child(even)': {
				justifyContent: 'flex-start',
				marginLeft: '10px',

				'& > img': {
					transform: `rotate(-${rotation}deg)`
				}
			}
		}
	}),

	hobbies: {
		'& > ul': {
			display: 'flex',
			flexDirection: 'row',
			width: 'calc(100% - 40px)',
			flexWrap: 'wrap',

			'& > li': {
				minWidth: '50%'
			}
		}
	}
});
