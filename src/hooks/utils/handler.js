/**
 * @param {(e: MouseEvent) => any} cb
 * @return {(e: MouseEvent) => any}
 */
export const createContextMenuHandler = (cb) => e => {
	e.preventDefault();
	e.stopPropagation();
	cb(e);
};
