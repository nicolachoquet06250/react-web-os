import { useStyle } from "../style";

export const TreeMenu = ({ openedDirectories = [], fileTree, onSelectDirectory = () => null }) => {
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
