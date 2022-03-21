import { createUseStyles } from "react-jss";

export const useStyle = createUseStyles({
	calculatrice: {
		color: 'white',
		width: '100%',
		height: '100%',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'flex-start',
		alignItems: 'center'
	},

	ecran: {
		width: 'calc(100% - 20px)',
		height: '50px',
		background: 'transparent',
		display: 'flex',
		justifyContent: 'flex-end',
		alignItems: 'center',
		fontSize: '25px',
		paddingRight: '20px'
	},

	touches: {
		width: '100%',
		display: 'flex',
		flexDirection: 'column',
		flex: 1
	},

	toucheRow: {
		display: 'flex',
		flexDirection: 'row',
		flex: 1,

		marginTop: '5px',
		marginBottom: 0,

		'&:first-child': {
			marginTop: 0
		},

		'&:last-child': {
			marginBottom: '10px'
		}
	},

	touche: {
		textAlign: 'center',
		flex: 1,
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: 'rgba(0, 0, 0, 0)',
		color: 'wheat',
		border: 'none',
		cursor: 'pointer',
		transition: 'background-color .5s ease-out',
		borderRadius: '5px',
		marginLeft: '5px',
		marginRight: '5px',

		'&:hover, &:disabled': {
			backgroundColor: 'rgba(0, 0, 0, .5)'
		},

		'&:disabled': {
			cursor: 'default'
		}
	}
});
