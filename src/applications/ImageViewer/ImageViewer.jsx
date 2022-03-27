import React, { useEffect, useState } from "react";
import { Window } from "../../components/Window/Window";
import { createContextMenuHandler } from "../../hooks/utils/handler";
import { getFileContent } from "../FileExplorer/hooks";

export const ImageViewerIcon = 'https://www.ohmymac.fr/wp-content/uploads/2016/01/apercu_icone.png';

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
	const handleContextMenu = createContextMenuHandler(e => onContextMenu('image-viewer', e.clientX, e.clientY));

	useEffect(() => {
		setContent(getFileContent(imagePath));
	}, []);

	return (<Window bodyBackground={'white'}
	                headerBackground={'white'}
	                headerColor={'black'}
	                title={<ImageViewerTitle />}
	                onContextMenu={handleContextMenu}
	                {...otherProps}>
		<div style={{ height: '100%', width: `100%`, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
			{content && (<img src={content} alt={imagePath} style={{ maxWidth: '100%', maxHeight: '100%', width: 'auto', height: 'auto' }} />)}
		</div>
	</Window>);
};
