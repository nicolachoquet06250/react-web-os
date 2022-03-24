import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { useOsDesktopStyle } from "./style";
import { useRegisterContextualMenu } from "../../hooks/contextual-menu";
import { ContextualMenuDesktopContent } from "./subcomponents";
import { findElementInTree, useTree } from "../../applications/FileExplorer/hooks";
import { FaIcon, FaIconsType } from "../FaIcon/FaIcon";
import { useControlApplication } from "../../hooks/applications";

export const OsDesktop = ({ children, background, onContextMenu = () => null, ...events }) => {
	const { osDesktop, desktopGrid } = useOsDesktopStyle({ background });
	const tree = useTree();
	const { run } = useControlApplication();

	useRegisterContextualMenu('desktop', ContextualMenuDesktopContent);

	const handleDesktopContextMenu = e => {
		e.preventDefault();
		onContextMenu('desktop', e.clientX, e.clientY);
	};

	return (<div className={osDesktop} {...events} onContextMenu={handleDesktopContextMenu}>
		<div className={desktopGrid}>
			{findElementInTree('/Ce PC/Bureau', tree).children.map(((v, i) =>
				(<button key={i} onDoubleClick={() => run('Explorateur de fichiers', {
					root: v.path
				})}>
					<span>
						<FaIcon type={FaIconsType.SOLID} icon={'folder'} />
					</span>

					<span> {v.title} </span>
				</button>)))}
		</div>

		{children}
	</div>);
};

OsDesktop.propTypes = {
	background: PropTypes.string,
	onContextMenu: PropTypes.func
};

OsDesktop.defaultProps = {
	onContextMenu: () => null
};
