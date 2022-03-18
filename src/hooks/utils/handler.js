export const createContextMenuHandler = (cb) => e => {
	e.preventDefault();
	e.stopPropagation();
	cb(e);
};
