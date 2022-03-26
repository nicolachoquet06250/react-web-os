import { createUseStyles } from "react-jss";

export const useStyle = createUseStyles({
	appContainer: {
		width: '100%',
		height: '100%',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'flex-start',
		alignItems: 'center'
	},

	breadcrumb: {
		height: '20px',
		width: '100%',
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'flex-start',
		alignItems: 'center',
		borderBottom: '1px solid black',

		'& > button': {
			marginLeft: '2px',
			marginRight: '2px',
			paddingLeft: '2px',
			paddingRight: '2px',
			fontSize: '10px',
			backgroundColor: 'rgba(0, 0, 0, .5)',
			color: 'wheat',
			cursor: 'pointer',

			border: '1px solid black',
			borderRadius: '5px'
		}
	},

	appBodyContainer: {
		width: '100%',
		height: 'calc(100% - 40px)',
		flex: 1,
		display: 'flex',
		flexDirection: 'row'
	},

	treeMenu: ({ directoryImage = '' }) => ({
		maxWidth: 'calc(100% - 40px)',
		overflowY: 'auto',
		borderRight: '1px solid black',

		'& ul': {
			listStyle: 'none',
			paddingLeft: '5px',
			margin: 0,

			'&.close': {
				height: '0px',
				overflow: 'hidden'
			},

			'& li': {
				position: 'relative',

				'&.close, &.void': {
					'& > button::after': {
						maskImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 256 512\'%3E%3C!--! Font Awesome Pro 6.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d=\'M64 448c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L178.8 256L41.38 118.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160c12.5 12.5 12.5 32.75 0 45.25l-160 160C80.38 444.9 72.19 448 64 448z\'/%3E%3C/svg%3E")'
					}
				},

				'& span': {
					display: 'inline-block',
					width: 'calc(100% - 45px)',
					overflow: 'hidden',
					wordWrap: 'inherit',
					whiteSpace: 'nowrap',
					textOverflow: 'ellipsis',
					fontSize: '10px'
				},

				'& button': {
					'--data-icon': `url(${directoryImage})`,
					width: '100%',
					background: 'transparent',
					border: 'none',
					padding: 0,
					margin: 0,
					color: 'wheat',
					cursor: 'pointer',
					textAlign: 'left',

					'&::before': {
						content: `''`,
						display: 'inline-block',
						width: '15px',
						height: '15px',
						backgroundImage: `var(--data-icon)`,
						backgroundSize: 'cover',
						marginRight: '5px'
					},

					'&::after': {
						content: `''`,
						backgroundColor: 'wheat',
						maskImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 384 512\'%3E%3C!--! Font Awesome Pro 6.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d=\'M192 384c-8.188 0-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L192 306.8l137.4-137.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-160 160C208.4 380.9 200.2 384 192 384z\'/%3E%3C/svg%3E")',
						maskSize: '15px 15px',
						maskRepeat: 'no-repeat',
						maskPosition: 'center',
						display: 'inline-block',
						width: '20px',
						height: '20px',
						fontSize: '20px',
						position: 'absolute',
						top: 0,
						right: 0
					}
				}
			},
		}
	}),

	appBody: {
		position: 'relative',
		flex: 1,
		padding: '5px',
		color: 'wheat',
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'flex-start',
		alignItems: 'flex-start',
		flexWrap: 'wrap'
	},

	appBodyButton: {
		maxWidth: '70px',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		padding: '5px',
		background: 'transparent',
		color: 'wheat',
		border: 'none',
		cursor: 'pointer',
		borderRadius: '5px',

		'&:active, &:focus': {
			backgroundColor: 'darkblue'
		},

		'& > img': {
			width: '50px',
			height: '50px'
		},

		'& > span':{
			width: '100%',
			whiteSpace: 'nowrap',
			overflow: 'hidden',
			textOverflow: 'ellipsis'
		}
	},

	footer: {
		height: '20px',
		width: '100%',
		borderTop: '1px solid black',
		color: 'wheat',

		'& > span': {
			fontSize: '12px',
			height: '100%',
			display: 'flex',
			justifyContent: 'flex-start',
			alignItems: 'center',
			paddingLeft: '5px'
		}
	}
});
