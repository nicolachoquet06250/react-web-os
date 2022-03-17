import { createUseStyles } from "react-jss";

export const useCalendarStyle = createUseStyles({
	calendar: {
		width: '400px',
		minHeight: '70vh',
		position: 'absolute',
		bottom: 0,
		right: '5px',
		backgroundColor: 'rgba(0, 0, 0, .5)',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: "flex-start",
		alignItems: 'center',
		paddingLeft: '10px',
		paddingTop: '10px',
		fontFamily: 'Arial',
		fontWeight: 'normal',
		transition: 'transform .2s ease-out',
		transform: 'translateY(100%)',
		borderRadius: '5px',

		'& *:not(hr)': {
			color: 'white'
		},

		'&.opened': {
			transform: 'translateY(calc(0% - 5px - var(--marginBottom)))'
		}
	},

	calendarHeader: {
		width: '100%',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'flex-start',

		'& > h1': {
			fontSize: '40px',
			padding: 0,
			margin: 0,
			color: 'white',
			fontFamily: 'Arial',
			fontWeight: 'normal'
		},

		'& > span': {
			fontSize: '12px',
			color: '#D9A3E0'
		}
	},

	calendarBody: {
		width: '100%'
	},

	dayButton: {
		width: '40px',
		height: '40px',
		backgroundColor: 'transparent',
		border: '0px solid transparent',
		cursor: 'pointer',
		position: 'relative',
		transition: 'background-color .2s ease-out, border .2s ease-out',
		fontSize: '12px',

		'&:not(.external).active, &:not(.external):active': {
			backgroundColor: 'purple',
			border: '2px solid purple',

			'&::before': {
				content: `''`,
				border: '2px solid black',
				height: '30px',
				width: '30px',
				position: 'absolute',
				top: '1px',
				left: '1px'
			}
		},

		'&:not(.external):hover': {
			backgroundColor: 'black',
			border: '2px solid white'
		},

		'&.external': {
			cursor: 'default',
			opacity: 0.3
		}
	}
});
