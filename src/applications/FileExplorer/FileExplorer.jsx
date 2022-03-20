import React, { useCallback, useEffect, useState } from "react";
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
						content: `''`
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
		padding: '5px',
		color: 'wheat'
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

const Breadcrumb = ({ selectedDirectory = [], onSelectDirectory = () => null }) => {
	const { breadcrumb } = useStyle({});

	return (<div className={breadcrumb}>
		{selectedDirectory.map((d, i) => (<button key={i} onClick={() => {
			const index = selectedDirectory.indexOf(d);
			const { result: newSelectedDirectory } = selectedDirectory.reduce((r, c, i) => ({
				result: [...r.result, ...(i <= index && !r.finished ? [c] : [])],
				finished: r.finished ?? i === index
			}), {
				finished: false,
				result: []
			});
			onSelectDirectory(newSelectedDirectory.join('/'));
		}}>
			{d}
		</button>))}
	</div>);
};

const TreeMenu = ({ openedDirectories = [], fileTree, onSelectDirectory = () => null }) => {
	const { treeMenu } = useStyle({
		directoryImage: 'https://www.coursinfo.fr/wp-content/uploads/2017/10/explorateur-fichiers.png'
	});

	const RecursiveTreeMenu = ({ openedDirectories = [], treeMenu, index = 0, title: _title = '' }) =>
		(<ul className={_title !== '' && !openedDirectories.includes(_title) ? 'close' : ''}>
			{treeMenu.map(({ title, children, icon }, i) =>
				(<li key={i} className={`${children.length === 0 ? 'void' : ''} ${_title !== '' && !openedDirectories.includes(_title) ? 'close' : ''}`}>
					<button onClick={() => {
						onSelectDirectory((_title === '' ? '' : _title + '/') + title, children.length);
					}} style={{ '--data-icon': icon ? `url(${icon})` : false }}>
						<span onClick={e => {
							e.stopPropagation();
							onSelectDirectory((_title === '' ? '' : _title + '/') + title, children.length);
						}}>{title}</span>
					</button>

					{children.length > 0 && <RecursiveTreeMenu treeMenu={children} index={index + 1} openedDirectories={openedDirectories} title={(_title === '' ? '' : _title + '/') + title} />}
				</li>))}
		</ul>);

	return (<div className={treeMenu}>
		<RecursiveTreeMenu treeMenu={fileTree} openedDirectories={openedDirectories} />
	</div>);
};

const Body = () => {
	const { appBody } = useStyle({});

	return (<div className={appBody}>
		body
	</div>);
};

const Footer = ({ children }) => {
	const { footer } = useStyle({});

	return (<div className={footer}>
		{children}
	</div>);
};

export const FileExplorer = ({ onClose = () => null, onContextMenu = () => null }) => {
	const [nbChildren, setNbChildren] = useState(0);
	const [openedDirectories, setOpenedDirectories] = useState([]);
	const [selectedDirectory, setSelectedDirectory] = useState([]);
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
					children: [
						{
							title: 'CyberLink',
							children: []
						},
						{
							title: 'Enregistrement audio',
							children: []
						},
						{
							title: 'vidéos',
							children: []
						},
						{
							title: 'Virtual Machines',
							children: []
						},
						{
							title: 'WindowsPowerShell',
							children: []
						},
						{
							title: 'Wondershare',
							children: []
						},
						{
							title: 'XSplit',
							children: []
						}
					]
				},
				{
					title: 'Images',
					children: [
						{
							title: 'Captures d\'écran',
							children: []
						},
						{
							title: 'Galerie Samsung',
							children: []
						},
						{
							title: 'Images',
							children: []
						},
						{
							title: 'Images enregistées',
							children: []
						},
						{
							title: 'Pellicule',
							children: []
						},
						{
							title: 'Projets vidéo',
							children: []
						},
						{
							title: 'Saved Pictures',
							children: []
						},
						{
							title: 'Téléchargements Mobile',
							children: []
						},
						{
							title: 'windows-terminal',
							children: []
						},
						{
							title: 'youtube',
							children: []
						}
					]
				},
				{
					title: 'Musiques',
					children: [
						{
							title: 'youtube',
							children: []
						}
					]
				},
				{
					title: 'Téléchargements',
					children: []
				},
				{
					title: 'Vidéos',
					children: [
						{
							title: 'Captures',
							children: []
						},
						{
							title: 'Movavi Vidéo Editor',
							children: [
								{
									title: 'Projects',
									children: []
								}
							]
						}
					]
				},
			]
		}
	];

	useEffect(() => {
		setNbChildren(fileTree[0].children.length);

		const tmp = [];
		for (const v of fileTree) {
			tmp.push(v.title);
		}
		setOpenedDirectories(tmp);
		setSelectedDirectory([fileTree[0].title]);
	}, []);

	const onSelectDirectory = useCallback((title, n) => {
		setNbChildren(n);
		setSelectedDirectory(title.split('/'));

		if (openedDirectories.indexOf(title) === -1) {
			setOpenedDirectories([...openedDirectories, title]);
		} else {
			setOpenedDirectories(openedDirectories.filter(t => title !== t));
		}
	}, [openedDirectories]);

	const onSelectDirectoryFromBreadcrumb = useCallback(title => {
		setSelectedDirectory(title.split('/'));

		if (openedDirectories.indexOf(title) === -1) {
			setOpenedDirectories([...openedDirectories, title]);
		}
	}, [openedDirectories]);

	return (<Window bodyBackground={'rgba(0, 0, 0, .5)'}
					headerBackground={'rgba(0, 0, 0, .5)'}
					headerColor={'wheat'}
					title={<span>Explorateur de fichiers</span>}
					onClose={onClose}
					onContextMenu={handleContextMenu}>
		<div className={appContainer}>
			<Breadcrumb selectedDirectory={selectedDirectory}
			            onSelectDirectory={onSelectDirectoryFromBreadcrumb} />

			<div className={appBodyContainer}>
				<TreeMenu fileTree={fileTree}
				          onSelectDirectory={onSelectDirectory}
				          openedDirectories={openedDirectories} />

				<Body />
			</div>

			<Footer>
				<span>
					{nbChildren} élément(s)
				</span>
			</Footer>
		</div>
	</Window>);
};
