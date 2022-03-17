import React, { useRef } from "react";
import { useCurrentContextualMenu } from "../../hooks/contextual-menu";
import PropTypes from "prop-types";
import { useClickAway } from "react-use";
import { useContextMenuStyle } from "./style";

/**
 * 🚧 Le champ 'id' ne doit pas être modifié dans StoryBook 🚧
 */
export const ContextualMenu = ({ position = { x: 0, y: 0 }, id, show = false, onHide = () => null }) => {
	const Component = useCurrentContextualMenu(id);
	const { contextMenu } = useContextMenuStyle({ position });

	const ref = useRef();

	useClickAway(ref, onHide);

	return (show && <div className={contextMenu} ref={ref}>
		{Component && <Component/>}
	</div>);
};

ContextualMenu.propTypes = {
	position: PropTypes.object,
	id: PropTypes.string,
	show: PropTypes.bool,
	onHide: PropTypes.func
};

ContextualMenu.defaultProps = {
	position: { x: 0, y: 0 },
	show: false,
	onHide: () => null
};
