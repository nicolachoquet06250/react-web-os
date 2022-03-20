import { createUseStyles } from "react-jss";

export const useTerminalStyle = createUseStyles({
	terminal: {
		color: 'green',
		padding: '5px'
	},

	prompt: {
		display: 'flex',
		justifyContent: 'flex-start',
		alignItems: 'center',
		flexWrap: 'wrap'
	},

	promptHeader: {
		cursor: 'default',
		userSelect: 'none',
		msUserSelect: 'none',
		paddingRight: '5px'
	},

	promptWrite: {
		cursor: 'text',
		display: 'block',
		height: '25px'
	},

	afterCursor: {
		cursor: 'text',
		display: 'block',
		height: '25px',
		flex: 1
	},

	cursor: {
		fontWeight: '700',
		animation: 'terminalCursorAnimation .5s ease-out infinite',
		paddingLeft: '5px',

		'&.inactive': {
			animation: 'none',
			color: 'transparent'
		}
	}
});
