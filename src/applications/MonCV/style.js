import { createUseStyles } from "react-jss";

export const useStyle = createUseStyles({
	monCVContainer: {
		width: '100%',
		height: '100%',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		overflowY: 'auto',
		overflowX: 'hidden',
		backgroundColor: 'rgba(0, 0, 0, .5)',
		backdropFilter: 'blur(1.5rem)'
	},

	monCV: {
		maxWidth: '600px',
		width: '100%',
		minHeight: '100%',
		borderLeft: '1px solid black',
		borderRight: '1px solid black',
		backgroundColor: 'black'
	}
});