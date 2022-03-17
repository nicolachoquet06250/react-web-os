import { createUseStyles } from "react-jss";

export const useContextMenuStyle = createUseStyles({
	contextMenu: ({ position = { x: 0, y: 0 } }) => ({
		position: 'absolute',
		left: (position.x + 10) + 'px',
		top: (position.y + 10) + 'px',
		backgroundColor: 'rgba(0, 0, 0, .5)',
		backdropFilter: 'blur(1.5rem)',
		width: '200px',
		minHeight: '20px',
		borderRadius: '5px',
		zIndex: 9999,

		'& *': {
			userSelect: 'none',
			msUserSelect: 'none',
			color: 'white'
		}
	})
});
