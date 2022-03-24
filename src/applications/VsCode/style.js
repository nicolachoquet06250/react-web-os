
import { createUseStyles } from "react-jss";

export const useVsCodeStyles = createUseStyles({
	editor: {
		height: '100%',
		color: 'white',
		cursor: 'text'
	},

	cursor: {
		display: 'inline-block',
		height: '20px',
		width: '2px',
		background: 'rgba(255, 255, 255, 1)',
		marginLeft: '2px',
		animation: 'VsCodeCursorAnimation .5s ease-out infinite'
	},

	afterCursor: {
		flex: 1
	}
});
