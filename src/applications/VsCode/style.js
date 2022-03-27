
import { createUseStyles } from "react-jss";

export const useVsCodeStyles = createUseStyles({
	editor: {
		height: '100%',
		color: 'white',
		cursor: 'text'
	},

	cursor: ({ color = 'rgba(255, 255, 255, 1)', height = '20px' }) => ({
		display: 'inline-block',
		height,
		width: '2px',
		background: color,
		marginLeft: '2px',
		animation: 'VsCodeCursorAnimation .5s ease-out infinite'
	}),

	afterCursor: {
		flex: 1
	}
});
