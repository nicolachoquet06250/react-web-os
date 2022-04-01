import { createUseStyles } from "react-jss";

export const useTaskBarStyle = createUseStyles({
	taskBar: {
		position: 'absolute',
		bottom: 0,
		left: 0,
		right: 0,
		height: '25px',
		background: 'rgba(0, 0, 0, .3)'
	},

	taskBarIcon: {
		height: '20px',
		width: '20px',
		padding: '3px',
		cursor: 'pointer',
		borderRadius: '5px',
		position: 'relative',
		border: 'none',
		backgroundColor: 'transparent',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',

		'&.active::after': {
			content: `''`,
			position: 'absolute',
			top: '-4px',
			left: 'calc(15px / 2)',
			width: '4px',
			height: '4px',
			background: 'white',
			borderRadius: '4px'
		},

		'& > img': {
			width: '100%',
			height: '100%'
		},

		'&:hover': {
			backgroundColor: 'black'
		}
	},

	taskBarIconContainer: {
		position: 'absolute',
		left: '25px',
		bottom: 0,
		height: '25px',
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'flex-start',
		alignItems: 'center',
		maxWidth: `calc(100% - 50px)`
	},

	appPreviewContainer: {
		display: 'none',
		flexDirection: 'row',
		position: 'absolute',
		bottom: '30px',
		left: '5px',
		transitionProperty: 'display',
		transitionDuration: '0s',
		transitionTimingFunction: 'linear',
		transitionDelay: '1s',
		zIndex: 2,

		'&.show': {
			display: 'flex'
		}
	},

	appPreview: {
		width: '180px',
		height: '100px',
		backgroundColor: 'rgba(0, 0, 0, .3)',
		marginRight: '5px',
		borderBottomLeftRadius: '5px',
		borderBottomRightRadius: '5px',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		position: 'relative',
		cursor: 'pointer',

		'&::before': {
			content: `''`,
			position: 'absolute',
			top: '-16px',
			left: '5px',
			height: '15px',
			width: '15px',
			backgroundImage: 'var(--icon)',
			backgroundSize: 'cover',
			backgroundPosition: 'center',
			backgroundRepeat: 'no-repeat'
		},

		'&::after': {
			content: `attr(data-title)`,
			position: 'absolute',
			top: '-21px',
			left: 0,
			right: 0,
			borderTopLeftRadius: '5px',
			borderTopRightRadius: '5px',
			backgroundColor: 'rgba(0, 0, 0, .3)',
			color: 'wheat',
			height: '21px',
			display: 'flex',
			justifyContent: 'center',
			alignItems: 'center'
		},

		'& > .close-button': {
			position: 'absolute',
			height: '15px',
			width: '15px',
			top: '-15px',
			right: '5px',
			zIndex: 2,
			fontSize: '12px',
			cursor: 'pointer',
			backgroundColor: 'transparent',
			color: 'white',
			border: 'none',
			transition: 'background-color .2s ease-out',
			borderRadius: '5px',
			display: 'flex',
			justifyContent: 'center',
			alignItems: 'center',

			'&:hover': {
				backgroundColor: 'red'
			}
		}
	},

	taskBarDateSection: {
		width: '50px',
		height: '25px',
		position: 'absolute',
		right: 0,
		bottom: 0,
		display: 'flex',
		borderRadius: '5px',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		fontSize: '9px',
		color: 'white',
		cursor: 'pointer',
		border: 'none',
		backgroundColor: 'transparent',
		transition: 'backgroundColor .2s ease-out',
		overflow: 'hidden',

		'&:hover': {
			backgroundColor: 'black'
		}
	},

	networkSection: {
		height: '25px',
		width: '30px',
		position: 'absolute',
		bottom: 0,
		right: '50px',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',

		'&.online.wifi::after, &.offline.wifi::after': {
			content: `''`,
			backgroundColor: 'white',
			maskImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 640 512\'%3E%3C!--! Font Awesome Pro 6.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath stroke=\'white\' d=\'M319.1 351.1c-35.35 0-64 28.66-64 64.01s28.66 64.01 64 64.01c35.34 0 64-28.66 64-64.01S355.3 351.1 319.1 351.1zM320 191.1c-70.25 0-137.9 25.6-190.5 72.03C116.3 275.7 115 295.9 126.7 309.2C138.5 322.4 158.7 323.7 171.9 312C212.8 275.9 265.4 256 320 256s107.3 19.88 148.1 56C474.2 317.4 481.8 320 489.3 320c8.844 0 17.66-3.656 24-10.81C525 295.9 523.8 275.7 510.5 264C457.9 217.6 390.3 191.1 320 191.1zM630.2 156.7C546.3 76.28 436.2 32 320 32S93.69 76.28 9.844 156.7c-12.75 12.25-13.16 32.5-.9375 45.25c12.22 12.78 32.47 13.12 45.25 .9375C125.1 133.1 220.4 96 320 96s193.1 37.97 265.8 106.9C592.1 208.8 600 211.8 608 211.8c8.406 0 16.81-3.281 23.09-9.844C643.3 189.2 642.9 168.1 630.2 156.7z\'/%3E%3C/svg%3E")',
			maskRepeat: 'no-repeat',
			maskSize: '15px 15px',
			maskPosition: 'center',
			display: 'block',
			width: '100%',
			height: '100%',
			color: 'white'
		},

		'&.offline.wifi::before': {
			content: `''`,
			backgroundColor: 'white',
			maskImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 640 512\'%3E%3C!--! Font Awesome Pro 6.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath stroke=\'white\' d=\'M5.112 9.196C13.29-1.236 28.37-3.065 38.81 5.112L630.8 469.1C641.2 477.3 643.1 492.4 634.9 502.8C626.7 513.2 611.6 515.1 601.2 506.9L9.196 42.89C-1.236 34.71-3.065 19.63 5.112 9.196V9.196z\'/%3E%3C/svg%3E")',
			maskRepeat: 'no-repeat',
			maskSize: '15px 15px',
			maskPosition: 'center',
			display: 'block',
			width: '100%',
			height: '100%',
			position: 'absolute',
			top: 0,
			color: 'white'
		}
	},

	batterySection: {
		width: '25px',
		height: '25px',
		position: 'absolute',
		top: 0,
		right: 'calc(50px + 30px)',

		'&::after': {
			content: `''`,
			backgroundColor: 'white',
			maskRepeat: 'no-repeat',
			maskSize: '15px 15px',
			maskPosition: 'center',
			display: 'block',
			width: '100%',
			height: '100%',
			color: 'white'
		},

		'&.level-0::after': {
			maskImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 576 512\'%3E%3C!--! Font Awesome Pro 6.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d=\'M464 96C508.2 96 544 131.8 544 176V192C561.7 192 576 206.3 576 224V288C576 305.7 561.7 320 544 320V336C544 380.2 508.2 416 464 416H80C35.82 416 0 380.2 0 336V176C0 131.8 35.82 96 80 96H464zM64 336C64 344.8 71.16 352 80 352H464C472.8 352 480 344.8 480 336V176C480 167.2 472.8 160 464 160H80C71.16 160 64 167.2 64 176V336z\'/%3E%3C/svg%3E")'
		},

		'&.level-25::after': {
			maskImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 576 512\'%3E%3C!--! Font Awesome Pro 6.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d=\'M192 320H96V192H192V320zM0 176C0 131.8 35.82 96 80 96H464C508.2 96 544 131.8 544 176V192C561.7 192 576 206.3 576 224V288C576 305.7 561.7 320 544 320V336C544 380.2 508.2 416 464 416H80C35.82 416 0 380.2 0 336V176zM80 160C71.16 160 64 167.2 64 176V336C64 344.8 71.16 352 80 352H464C472.8 352 480 344.8 480 336V176C480 167.2 472.8 160 464 160H80z\'/%3E%3C/svg%3E")'
		},

		'&.level-50::after': {
			maskImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 576 512\'%3E%3C!--! Font Awesome Pro 6.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d=\'M288 320H96V192H288V320zM0 176C0 131.8 35.82 96 80 96H464C508.2 96 544 131.8 544 176V192C561.7 192 576 206.3 576 224V288C576 305.7 561.7 320 544 320V336C544 380.2 508.2 416 464 416H80C35.82 416 0 380.2 0 336V176zM80 160C71.16 160 64 167.2 64 176V336C64 344.8 71.16 352 80 352H464C472.8 352 480 344.8 480 336V176C480 167.2 472.8 160 464 160H80z\'/%3E%3C/svg%3E")'
		},

		'&.level-75::after': {
			maskImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 576 512\'%3E%3C!--! Font Awesome Pro 6.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d=\'M352 320H96V192H352V320zM0 176C0 131.8 35.82 96 80 96H464C508.2 96 544 131.8 544 176V192C561.7 192 576 206.3 576 224V288C576 305.7 561.7 320 544 320V336C544 380.2 508.2 416 464 416H80C35.82 416 0 380.2 0 336V176zM80 160C71.16 160 64 167.2 64 176V336C64 344.8 71.16 352 80 352H464C472.8 352 480 344.8 480 336V176C480 167.2 472.8 160 464 160H80z\'/%3E%3C/svg%3E")'
		},

		'&.level-100::after': {
			maskImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 576 512\'%3E%3C!--! Font Awesome Pro 6.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d=\'M448 320H96V192H448V320zM0 176C0 131.8 35.82 96 80 96H464C508.2 96 544 131.8 544 176V192C561.7 192 576 206.3 576 224V288C576 305.7 561.7 320 544 320V336C544 380.2 508.2 416 464 416H80C35.82 416 0 380.2 0 336V176zM80 160C71.16 160 64 167.2 64 176V336C64 344.8 71.16 352 80 352H464C472.8 352 480 344.8 480 336V176C480 167.2 472.8 160 464 160H80z\'/%3E%3C/svg%3E")'
		}
	}
});
