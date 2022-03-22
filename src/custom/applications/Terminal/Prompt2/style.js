import { createUseStyles } from "react-jss";

export const useCustomPromptStyle = createUseStyles({
	customPrompt: {
		flexDirection: 'column'
	},

	groupList: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		width: '100%'
	},

	group: {
		display: 'flex',
		flexDirection: 'row'
	},

	writeGroup: {
		display: 'flex',
		flexDirection: 'row',
		width: '100%'
	},

	beforeWrite: {
		'&::before': {
			content: `'$~'`,
			marginRight: '5px',
		}
	},

	system: {
		backgroundColor: 'yellow',
		color: 'black',
		cursor: 'default',

		paddingLeft: '5px',
		paddingRight: '5px',
		borderRadius: '50px'
	},

	path: {
		marginLeft: '5px',
		backgroundColor: 'blue',
		color: 'black',
		cursor: 'default',

		paddingLeft: '5px',
		paddingRight: '5px',
		borderRadius: '50px'
	},

	shell: {
		backgroundColor: 'red',
		color: 'black',
		cursor: 'default',

		paddingLeft: '5px',
		paddingRight: '5px',
		borderRadius: '50px'
	},

	usernameStyle: {
		marginLeft: '5px',
		backgroundColor: 'purple',
		color: 'black',
		cursor: 'default',

		paddingLeft: '5px',
		paddingRight: '5px',
		borderRadius: '50px'
	}
});
