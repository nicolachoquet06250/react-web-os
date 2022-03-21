import { createUseStyles } from "react-jss";

export const useStartMenuStyle = createUseStyles({
	/**
	 * @param {boolean} opened
	 * @returns {{alignItems: string, flexDirection: string, bottom: string, display: string, minWidth: string, justifyContent: string, transition: string, minHeight: string, transform: (string), borderRadius: string, maxHeight: string, left: string, background: string, width: string, position: string, maxWidth: string, height: string}}
	 */
	startMenu: ({ opened = false }) => ({
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'flex-start',
		alignItems: 'flex-start',
		minWidth: '500px',
		maxWidth: '900px',
		width: '50%',
		minHeight: '200px',
		maxHeight: '500px',
		height: '80%',
		background: 'rgba(0, 0, 0, .3)',
		borderRadius: '5px',
		position: 'absolute',
		bottom: '30px',
		left: '5px',
		transform: opened ? 'translateY(0px)' : 'translateY(calc(100% + 30px))',
		transition: 'transform .3s ease-out'
	}),

	applicationList: {
		width: '200px',
		height: '100%',
		borderRight: '1px solid black',
		paddingLeft: '5px',
		paddingTop: '5px'
	},

	categorizedApplication: {
		width: '100%',
		display: 'flex',
		justifyContent: 'flex-start',
		alignItems: 'center',
		backgroundColor: 'transparent',
		cursor: 'pointer',
		border: 'none',
		color: 'white',

		'& > img': {
			width: '20px',
			height: '20px',
			marginRight: '5px'
		}
	},

	letterCategory: {
		width: '100%',
		textAlign: 'center',
		textTransform: 'uppercase',
		backgroundColor: 'transparent',
		cursor: 'pointer',
		border: 'none',
		color: 'white',
	},

	startMenuButton: {
		width: '25px',
		height: '25px',
		cursor: 'pointer',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: 'transparent',
		transition: 'background-color .2s ease-out',
		border: 'none',

		'&:hover': {
			backgroundColor: 'black'
		},

		'& > img': {
			width: '100%',//'calc(100% - 5px)',
			height: 'calc(100% - 5px)'
		}
	},
});
