import React from "react";
import { useWindowStyle } from "../style";

export const WindowHeader = ({
 innerRef, title,
 background = 'transparent', color = 'black',
 resizable = true,
 toggleFullScreen = () => null,
 onClose = () => null,
 onContextMenu = () => null
}) => {
	const { windowHeaderStyle } = useWindowStyle({ background, color });

	return (<div className={windowHeaderStyle}
	             onContextMenu={onContextMenu}
	             ref={innerRef}>
		<div>
			{title}
		</div>

		<div className="button-container">
			<button> - </button>
			<button disabled={!resizable} onClick={toggleFullScreen}>  </button>
			<button className={'close'} onClick={onClose}>  </button>
		</div>
	</div>);
};
