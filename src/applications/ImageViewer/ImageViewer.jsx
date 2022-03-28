import React, { useEffect, useState } from "react";
import { Window } from "../../components/Window/Window";
import { findElementInTree, getFileContent, useTree } from "../FileExplorer/hooks";
import { createContextMenuHandler } from "../../hooks/utils/handler";
import { FaIcon, FaIconsType } from "../../components/FaIcon/FaIcon";
import { createUseStyles } from "react-jss";

export const ImageViewerIcon = 'https://www.ohmymac.fr/wp-content/uploads/2016/01/apercu_icone.png';

const useStyle = createUseStyles({
	navButton: {
		width: '20px',
		height: '20px',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: 'transparent',
		border: '1px solid black',
		cursor: 'pointer',
		borderRadius: '5px',
		transition: 'background-color .5s ease-out, color .5s ease-out',

		'&:hover': {
			backgroundColor: 'black',
			color: 'white'
		},

		'&:first-child': {
			marginLeft: '5px',
		},

		'&:last-child': {
			marginRight: '5px',
		}
	}
});

const ImageViewerTitle = () => (<>
	<span className={'emoji'}>
		<img src={ImageViewerIcon} alt={'bloc note icon'}
		     style={{ width: '15px', height: '15px', transform: 'translateY(2px)' }} />
	</span>

	<span>
		Visionneuse d'images
	</span>
</>);

export const ImageViewer = ({ imagePath = '', onContextMenu = () => null, ...otherProps }) => {
	const [content, setContent] = useState('');
	const [path, setPath] = useState('');
	const [tree] = useTree();
	const [images, setImages] = useState([]);
	const handleContextMenu = createContextMenuHandler(e => onContextMenu('image-viewer', e.clientX, e.clientY));

	const { navButton } = useStyle();

	useEffect(() => {
		setContent(getFileContent(imagePath));
		setPath(imagePath);
	}, []);

	useEffect(() => {
		const _path = path.split('/');
		_path.pop();
		setImages((findElementInTree(_path.join('/'), tree)?.children ?? []).filter(v =>
			v.type === 'file' && ['image/png', 'image/jpeg'].indexOf(v.mime) !== -1));
	}, [tree]);

	const handlePrevious = () => {
		const splitPath = path.split('/');
		const title = splitPath.pop();
		let currentIndex = images.map(v => v.title).indexOf(title);

		currentIndex = currentIndex - 1 < 0 ? images.length - 1 : currentIndex - 1;

		setContent(images[currentIndex].content);
		setPath(images[currentIndex].path + '/' + images[currentIndex].title);
	};

	const handleNext = () => {const splitPath = path.split('/');
		const title = splitPath.pop();
		let currentIndex = images.map(v => v.title).indexOf(title);

		currentIndex = currentIndex + 1 > images.length - 1 ? 0 : currentIndex + 1;

		setContent(images[currentIndex].content);
		setPath(images[currentIndex].path + '/' + images[currentIndex].title);
	};

	return (<Window bodyBackground={'white'}
	                headerBackground={'white'}
	                headerColor={'black'}
	                title={<ImageViewerTitle />}
	                onContextMenu={handleContextMenu}
	                {...otherProps}>
		<div style={{ height: '100%', width: `100%`, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
			{content && (<img src={content}
			                  alt={imagePath}
			                  style={{
								  maxWidth: 'calc(100% - 60px)',
				                  maxHeight: '100%',
				                  width: 'auto',
				                  height: 'auto'
							  }} />)}

			<div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
				<button className={navButton} onClick={handlePrevious}>
					<FaIcon type={FaIconsType.SOLID} icon={'angle-left'} />
				</button>

				<button className={navButton} onClick={handleNext}>
					<FaIcon type={FaIconsType.SOLID} icon={'angle-right'} />
				</button>
			</div>

		</div>
	</Window>);
};
