import React from 'react';
import { VideoReaderIcon } from '../VideoReader';

export const VideoReaderTitle = ({ path }) => (<>
	<span className={'emoji'}>
		<img src={VideoReaderIcon} alt={'video reader icon'}
		     style={{ width: '15px', height: '15px', transform: 'translateY(2px)' }} />
	</span>

	<span>
		Lecteur de vidéos
	</span>

	<span style={{
		flex: 1,
		textAlign: 'right',
		marginRight: '5px',
		fontSize: '12px',
		minWidth: '100px',
		overflow: 'hidden',
		wordWrap: 'inherit',
		whiteSpace: 'nowrap',
		textOverflow: 'ellipsis'
	}}>
		{path.split('/').pop()}
	</span>
</>);