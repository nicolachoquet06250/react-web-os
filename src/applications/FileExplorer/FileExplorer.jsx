import React from "react";
import { Window } from "../../components/Window/Window";
import { createUseStyles } from "react-jss";
import { createContextMenuHandler } from "../../hooks/utils/handler";
import bureau from '../../assets/images/bureau.png';
import cePc from '../../assets/images/ce-pc.png';

const useStyle = createUseStyles({
	appContainer: {
		width: '100%',
		height: 'calc(100% - 20px)',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'flex-start',
		alignItems: 'center'
	},

	breadcrumb: {
		height: '20px',
		width: '100%',
		background: 'red'
	},

	appBodyContainer: {
		width: '100%',
		flex: 1,
		display: 'flex',
		flexDirection: 'row'
	},

	treeMenu: ({ directoryImage = '' }) => ({
		minWidth: '150px',
		background: 'blue',

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
						content: `''`
					}
				},

				'& span': {
					display: 'inline-block',
					width: 'calc(100% - 45px)',
					overflow: 'hidden',
					wordWrap: 'inherit',
					textOverflow: 'ellipsis',
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
						content: `''`,
						display: 'inline-block',
						width: '20px',
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
		flex: 1,
		background: 'purple'
	},

	footer: {
		height: '20px',
		width: '100%',
		background: 'yellow'
	}
});

const Breadcrumb = () => {
	const { breadcrumb } = useStyle({});

	return (<div className={breadcrumb}>
		breadcrumb
	</div>);
};

const TreeMenu = ({ fileTree }) => {
	const { treeMenu } = useStyle({
		directoryImage: 'https://www.coursinfo.fr/wp-content/uploads/2017/10/explorateur-fichiers.png'
	});

	const handleButtonClick = e => {
		const nextUl = e.target.nextElementSibling;

		if (nextUl) {
			if (nextUl.classList.contains('close')) {
				nextUl.classList.remove('close');
				e.target.parentElement.classList.remove('close');
			} else {
				nextUl.classList.add('close');
				e.target.parentElement.classList.add('close');
			}
		}
	};

	const handleSpanClick = e => {
		const nextUl = e.target.parentElement.nextElementSibling;

		if (nextUl) {
			if (nextUl.classList.contains('close')) {
				nextUl.classList.remove('close');
				e.target.parentElement.parentElement.classList.remove('close');
			} else {
				nextUl.classList.add('close');
				e.target.parentElement.parentElement.classList.add('close');
			}
		}
	};

	const RecursiveTreeMenu = ({ treeMenu, index = 0 }) => (<ul className={index > 1 ? 'close' : ''}>
		{treeMenu.map(({ title, children, icon }, i) =>
			(<li key={i} className={`${children.length === 0 ? 'void' : ''} ${index > 0 ? 'close' : ''}`}>
				<button onClick={handleButtonClick} style={{ '--data-icon': icon ? `url(${icon})` : false }}>
					<span onClick={handleSpanClick}>{title}</span>
				</button>

				{children.length > 0 && <RecursiveTreeMenu treeMenu={children} index={index + 1} />}
			</li>))}
	</ul>);

	return (<div className={treeMenu}>
		<RecursiveTreeMenu treeMenu={fileTree} />
	</div>);
};

const Body = () => {
	const { appBody } = useStyle({});

	return (<div className={appBody}>
		body
	</div>);
};

const Footer = () => {
	const { footer } = useStyle({});

	return (<div className={footer}>
		footer
	</div>);
};

export const FileExplorer = ({ onClose = () => null, onContextMenu = () => null }) => {
	const { appContainer, appBodyContainer } = useStyle({});

	const handleContextMenu = createContextMenuHandler(e => onContextMenu('file-explorer', e.clientX, e.clientY));

	const fileTree = [
		{
			title: 'Ce PC',
			icon: cePc,
			children: [
				{
					title: 'Bureau',
					icon: bureau,
					children: [
						{
							title: 'agile tour',
							children: []
						}
					]
				},
				{
					title: 'Documents',
					children: []
				},
				{
					title: 'Images',
					children: []
				},
				{
					title: 'Musiques',
					children: []
				},
				{
					title: 'Téléchargements',
					children: []
				},
				{
					title: 'Vidéos',
					children: []
				},
			]
		}
	];

	return (<Window bodyBackground={'rgba(0, 0, 0, .5)'}
					headerBackground={'rgba(0, 0, 0, .5)'}
					headerColor={'wheat'}
					title={<span>Explorateur de fichiers</span>}
					onClose={onClose}
					onContextMenu={handleContextMenu}>
		<div className={appContainer}>
			<Breadcrumb />

			<div className={appBodyContainer}>
				<TreeMenu fileTree={fileTree} />

				<Body />
			</div>

			<Footer />
		</div>
	</Window>);
};
