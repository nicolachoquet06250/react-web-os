import { createUseStyles } from "react-jss";

export const useSyntaxHighlightStyles = createUseStyles({
	highlighter: ({ maxWidth = '100%' }) => ({
		width: '100%',
		minHeight: '20px',
		maxWidth,
		display: 'flex',
		flexDirection: 'column',
		counterReset: 'section',

		'& > div.line': {
			display: 'flex',
			flexDirection: 'row',
			justifyContent: 'flex-start',
			alignItems: 'flex-start',
			marginLeft: '5px',
			minHeight: '20px',

			'&.show-line-number': {
				marginLeft: '20px',

				'&::before': {
					position: 'absolute',
					display: 'block',
					minWidth: '15px',
					marginRight: '5px',
					textAlign: 'center',
					backgroundColor: 'transparent',
					borderRight: '1px solid wheat',
					color: 'wheat',
					transform: 'translateX(-20px)',
					counterIncrement: 'section',
					content: `counter(section)`,
				}
			},

			'& > span': {
				height: '20px'
			}
		},
	}),

	javascript: {
		'& > *': {
			color: 'wheat'
		},

		'& > .symbol': {
			color: 'lightblue'
		},

		'& > .keyword': {
			color: 'pink'
		},

		'& > .string': {
			color: 'purple'
		},

		'& > .variable': {
			color: 'green',

			'&.error': {
				color: 'red'
			}
		},

		'& > .function-name': {
			color: 'yellow',

			'&.error': {
				color: 'red'
			}
		}
	}
});
