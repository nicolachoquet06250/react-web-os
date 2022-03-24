
import { createUseStyles } from "react-jss";

export const useVsCodeStyles = createUseStyles({
	editor: ({ maxWidth }) => ({
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'flex-start',
		alignItems: 'flex-start',
		height: '100%',
		color: 'white',
		counterReset: 'section',
		cursor: 'text',

		'& > div': {
			width: '100%',
			minHeight: '20px',
			maxWidth,
			display: 'flex',
			flexDirection: 'row',

			'& > div:first-child': {
				marginLeft: '20px',
				maxWidth: `calc(${maxWidth} - 20px)`,
				whiteSpace: 'nowrap'
			},

			'&::before': {
				position: 'fixed',
				counterIncrement: 'section',
				content: `counter(section)`,
				display: 'block',
				minWidth: '15px',
				marginRight: '5px',
				textAlign: 'center',
				backgroundColor: 'darkgray',
				color: 'black'
			}
		}
	}),

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
