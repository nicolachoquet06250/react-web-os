import { createUseStyles } from "react-jss";

export const useStyle = createUseStyles({
	appContainer: {
		height: '100%', 
		color: 'white', 
		display: 'flex', 
		flexDirection: 'row'
	},

	sidebar: {
		height: '100%', 
		minWidth: '200px', 
		borderRight: '1px solid white',

		'& > ul': {
			margin: 0,
			padding: '10px',
			paddingBottom: 0,
			display: 'flex',
			flexDirection: 'column',
			justifyContent: 'flex-start',
			alignItems: 'center',
			overflowX: 'hidden',

			'& > li': {
				display: 'flex',
				alignItems: 'center',
				height: '30px',
				border: '1px solid white',
				width: '100%',
				padding: '5px',
				borderRadius: '5px',
				backgroundColor: '#17CA38',
				color: 'black'
			}
		}
	},

	main: {
		height: '100%',
		flex: 1,
		overflow: 'hidden',
		overflowY: 'auto',
		display: 'flex',
		flexDirection: 'column',

		'& > div': {
			height: 'calc(100% - 100px)', 
			paddingLeft: '10px'
		},

		'& > form': {
			height: '100px',
			flex: 1,
			borderTop: '1px solid gray',
			display: 'flex',
			flexDirection: 'column',
			alignItems: 'center',

			'& > textarea': {
				maxHeight: 'calc(100% - 10px)',
				minHeight: '50%',
				resize: 'none',
				border: 'none',
				marginBottom: '5px',
				width: 'calc(100% - 6px)',
				backgroundColor: 'transparent',
				color: 'white',
				outline: 'none'
			},

			'& > div': {
				width: 'calc(100% - 12px)', 
				display: 'flex', 
				justifyContent: 'flex-end',

				'& > button': {
					cursor: 'pointer',
					backgroundColor: 'transparent',
					border: '1px solid white',
					color: 'white',
					borderRadius: '5px',
					paddingTop: '2px',
					paddingBottom: '2px'
				}
			}
		}
	}
});