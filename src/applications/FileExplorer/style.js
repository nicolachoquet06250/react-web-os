import { createUseStyles } from "react-jss";

export const useStyle = createUseStyles({
	appContainer: {
		width: '100%',
		height: '100%',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'flex-start',
		alignItems: 'center'
	},

	breadcrumb: {
		height: '20px',
		width: '100%',
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'flex-start',
		alignItems: 'center',
		borderBottom: '1px solid black',

		'& > button': {
			marginLeft: '2px',
			marginRight: '2px',
			paddingLeft: '2px',
			paddingRight: '2px',
			fontSize: '10px',
			backgroundColor: 'rgba(0, 0, 0, .5)',
			color: 'wheat',
			cursor: 'pointer',

			border: '1px solid black',
			borderRadius: '5px'
		}
	},

	appBodyContainer: {
		width: '100%',
		height: 'calc(100% - 40px)',
		flex: 1,
		display: 'flex',
		flexDirection: 'row'
	},

	treeMenu: ({ directoryImage = '' }) => ({
		maxWidth: 'calc(100% - 40px)',
		overflowY: 'auto',
		borderRight: '1px solid black',

		'& ul': {
			listStyle: 'none',
			paddingLeft: '5px',
			margin: 0,

			'&.close': {
				height: '0px',
				overflow: 'hidden'
			},

			'& li': {
				position: 'relative',

				'&.close, &.void': {
					'& > button::after': {
						content: `''`
					}
				},

				'& span': {
					display: 'inline-block',
					width: 'calc(100% - 45px)',
					overflow: 'hidden',
					wordWrap: 'inherit',
					whiteSpace: 'nowrap',
					textOverflow: 'ellipsis',
					fontSize: '10px'
				},

				'& button': {
					'--data-icon': `url(${directoryImage})`,
					width: '100%',
					background: 'transparent',
					border: 'none',
					padding: 0,
					margin: 0,
					color: 'wheat',
					cursor: 'pointer',
					textAlign: 'left',

					'&::before': {
						content: `''`,
						display: 'inline-block',
						width: '15px',
						height: '15px',
						backgroundImage: `var(--data-icon)`,
						backgroundSize: 'cover',
						marginRight: '5px'
					},

					'&::after': {
						content: `''`,
						display: 'inline-block',
						width: '20px',
						fontSize: '20px',
						position: 'absolute',
						top: 0,
						right: 0
					}
				}
			},
		}
	}),

	appBody: {
		flex: 1,
		padding: '5px',
		color: 'wheat'
	},

	footer: {
		height: '20px',
		width: '100%',
		borderTop: '1px solid black',
		color: 'wheat',

		'& > span': {
			fontSize: '12px',
			height: '100%',
			display: 'flex',
			justifyContent: 'flex-start',
			alignItems: 'center',
			paddingLeft: '5px'
		}
	}
});
