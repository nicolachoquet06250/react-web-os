import React from 'react';
import { ImageViewerIcon } from '../ImageViewer';

export const ImageViewerTitle = () => (<>
	<span className={'emoji'}>
		<img src={ImageViewerIcon} alt={'bloc note icon'}
		     style={{ width: '15px', height: '15px', transform: 'translateY(2px)' }} />
	</span>

	<span>
		Visionneuse d'images
	</span>
</>);