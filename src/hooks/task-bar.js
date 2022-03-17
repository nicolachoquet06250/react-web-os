import { useState } from 'react';

export const useTaskBar = runningApps => {
	const [instanceNb, setInstanceNb] = useState(0);
	const [title, setTitle] = useState('');
	const [icon, setIcon] = useState('');
	const [appAction, setAppAction] = useState('add');
	const [showAppPreview, setShowAppPreview] = useState(false);

	const onIconMouseOver = (title, icon) => () => {
		setShowAppPreview(true);
		setInstanceNb(runningApps[title] ? runningApps[title].instanceNb : 0);
		setTitle(title);
		setIcon(icon);
	};
	const onIconMouseOut = () => {
		setShowAppPreview(false);
	};

	const onOpenApp = (title, cb = () => null) => {
		setAppAction('add');
		cb(title);
		if (title) {
			setInstanceNb(instanceNb + 1);
		}
	};
	const onCloseApp = (title, cb = () => null) => {
		setAppAction('del');
		cb(title);
		if (title) {
			setInstanceNb(instanceNb - 1);
		}
	};

	const onAppAction = (open = true) => {
		return {
			action(cb = () => null, title = '') {
				if (open) {
					return () => onOpenApp(title, cb);
				} else {
					return title => onCloseApp(title, cb);
				}
			}
		}
	};

	const handlePreviewHover = (hover = true) => () => setShowAppPreview(hover);

	return {
		instanceNb, title, icon, showAppPreview,

		onIconMouseOver,
		onIconMouseOut,
		onAppAction,
		handlePreviewHover
	};
};
