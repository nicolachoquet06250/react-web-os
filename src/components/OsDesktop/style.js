import { createUseStyles } from "react-jss";

export const useOsDesktopStyle = createUseStyles({
	osDesktop: ({ background }) => ({
		position: 'absolute',
		top: 0,
		left: 0,
		right: 0,
		bottom: 0,
		backgroundImage: `url(${background})`,
		overflow: 'hidden'
	})
});
