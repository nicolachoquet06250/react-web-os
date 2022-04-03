import React, { useEffect, useState } from "react";
import { Window } from "../../components/Window/Window";
import { findElementInTree, getFileContent, useTree } from "../FileExplorer/hooks";
import { createContextMenuHandler } from "../../hooks/utils/handler";
import { FaIcon, FaIconsType } from "../../components/FaIcon/FaIcon";
import { useStyle } from './style';
import { ImageViewerTitle } from './subcomponents';

export const ImageViewerIcon = 'https://www.ohmymac.fr/wp-content/uploads/2016/01/apercu_icone.png';

export const ImageViewer = ({ imagePath = '', mime = '', onContextMenu = () => null, ...otherProps }) => {
	const [content, setContent] = useState('');
	const [path, setPath] = useState('');
	const [mimeType, setMimeType] = useState('');
	const [tree] = useTree();
	const [images, setImages] = useState([]);
	const handleContextMenu = createContextMenuHandler(e => onContextMenu('image-viewer', e.clientX, e.clientY));

	const { buttons, navButton, imageStyle } = useStyle();

	useEffect(() => {
		setContent(getFileContent(imagePath));
		setPath(imagePath);
		setMimeType(mime);
	}, []);

	useEffect(() => {
		const _path = path.split('/');
		_path.pop();
		setImages((findElementInTree(_path.join('/'), tree)?.children ?? []).filter(v =>
			v.type === 'file' && ['image/png', 'image/jpeg', 'image/gif'].indexOf(v.mime) !== -1));
	}, [tree]);

	const handlePrevious = () => {
		const splitPath = path.split('/');
		const title = splitPath.pop();
		let currentIndex = images.map(v => v.title).indexOf(title);

		currentIndex = currentIndex - 1 < 0 ? images.length - 1 : currentIndex - 1;

		setContent(images[currentIndex].content);
		setPath(images[currentIndex].path + '/' + images[currentIndex].title);
		setMimeType(images[currentIndex].mime);
	};

	const handleNext = () => {
		const splitPath = path.split('/');
		const title = splitPath.pop();
		let currentIndex = images.map(v => v.title).indexOf(title);

		currentIndex = currentIndex + 1 > images.length - 1 ? 0 : currentIndex + 1;

		setContent(images[currentIndex].content);
		setPath(images[currentIndex].path + '/' + images[currentIndex].title);
		setMimeType(images[currentIndex].mime);
	};

	return (<Window bodyBackground={'white'}
	                headerBackground={'white'}
	                headerColor={'black'}
	                title={<ImageViewerTitle />}
	                onContextMenu={handleContextMenu}
	                {...otherProps}>
		<div style={{ height: '100%', width: `100%`, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
			{content && (<img src={content} alt={imagePath} className={imageStyle} />)}

			<div className={buttons}>
				<button type={'button'} className={navButton} onClick={handlePrevious}>
					<FaIcon type={FaIconsType.SOLID} icon={'angle-left'} />
				</button>

				<button type={'button'} className={navButton} onClick={handleNext}>
					<FaIcon type={FaIconsType.SOLID} icon={'angle-right'} />
				</button>
			</div>

		</div>
	</Window>);
};
