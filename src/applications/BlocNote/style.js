import { createUseStyles } from "react-jss";

export const useBlocNoteStyle = createUseStyles({
	blocNote: {
		cursor: 'text',
		height: '100%',
		overflow: 'auto',

		'& > pre': {
			fontSize: '20px',
			margin: '5px'
		}
	},

	cursorContainer: {
		height: '20px',
		display: 'inline-flex',
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center'
	}
});
