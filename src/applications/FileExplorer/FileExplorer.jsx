import React from "react";
import { Window } from "../../components/Window/Window";
import { createUseStyles } from "react-jss";
import { createContextMenuHandler } from "../../hooks/utils/handler";

const useStyle = createUseStyles({
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
		background: 'red'
	},

	appBodyContainer: {
		width: '100%',
		flex: 1,
		display: 'flex',
		flexDirection: 'row'
	},

	treeMenu: {
		minWidth: '150px',
		background: 'blue'
	},

	appBody: {
		flex: 1,
		background: 'purple'
	}
});

const Breadcrumb = () => {
	const { breadcrumb } = useStyle();

	return (<div className={breadcrumb}>
		breadcrumb
	</div>);
};

const TreeMenu = () => {
	const { treeMenu } = useStyle();

	return (<div className={treeMenu}>
		menu
	</div>);
};

const Body = () => {
	const { appBody } = useStyle();

	return (<div className={appBody}>
		body
	</div>);
};

export const FileExplorer = ({ onClose = () => null, onContextMenu = () => null }) => {
	const { appContainer, appBodyContainer } = useStyle();

	const handleContextMenu = createContextMenuHandler(e => onContextMenu('file-explorer', e.clientX, e.clientY));

	return (<Window bodyBackground={'rgba(0, 0, 0, .5)'}
					headerBackground={'rgba(0, 0, 0, .5)'}
					headerColor={'wheat'}
					title={<span>Explorateur de fichiers</span>}
					onClose={onClose}
					onContextMenu={handleContextMenu}>
		<div className={appContainer}>
			<Breadcrumb />

			<div className={appBodyContainer}>
				<TreeMenu />

				<Body />
			</div>
		</div>
	</Window>);
};
