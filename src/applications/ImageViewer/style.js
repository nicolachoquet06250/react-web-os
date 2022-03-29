import { createUseStyles } from "react-jss";

export const useStyle = createUseStyles({
	buttons: { 
		position: 'absolute', 
		top: 0, 
		left: 0, 
		right: 0, 
		bottom: 0, 
		display: 'flex', 
		flexDirection: 'row', 
		alignItems: 'center', 
		justifyContent: 'space-between'
	},

	navButton: {
		width: '20px',
		height: '20px',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: 'transparent',
		border: '1px solid black',
		cursor: 'pointer',
		borderRadius: '5px',
		transition: 'background-color .5s ease-out, color .5s ease-out',

		'&:hover': {
			backgroundColor: 'black',
			color: 'white'
		},

		'&:first-child': {
			marginLeft: '5px',
		},

		'&:last-child': {
			marginRight: '5px',
		}
	},

	imageStyle: {
		maxWidth: 'calc(100% - 60px)',
		maxHeight: '100%',
		width: 'auto',
		height: 'auto'
	}
});