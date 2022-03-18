import { useState } from 'react';

export const useTaskBar = runningApps => {
	const [title, setTitle] = useState('');
	const [icon, setIcon] = useState('');
	const [appAction, setAppAction] = useState('add');
	const [showAppPreview, setShowAppPreview] = useState(false);

	const onIconMouseOver = (title, icon) => () => {
		setShowAppPreview(true);
		setTitle(title);
		setIcon(icon);
	};
	const onIconMouseOut = () => {
		setShowAppPreview(false);
	};

	const onOpenApp = (title, cb = () => null) => {
		setAppAction('add');
		cb(title);
	};
	const onCloseApp = (title, id, cb = () => null) => {
		setAppAction('del');
		cb(title, id);
	};

	const onAppAction = (open = true) => {
		return {
			action(cb = () => null, title = '') {
				if (open) {
					return () => onOpenApp(title, cb);
				} else {
					return (title, id) => onCloseApp(title, id, cb);
				}
			}
		}
	};

	const handlePreviewHover = (hover = true) => () => setShowAppPreview(hover);

	return {
		title, icon, showAppPreview,

		onIconMouseOver,
		onIconMouseOut,
		onAppAction,
		handlePreviewHover
	};
};
