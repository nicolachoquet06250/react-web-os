import React from 'react';
import { AudioVideoReaderIcon } from '../AudioVideoReader';

export const AudioVideoReaderTitle = ({ path }) => (<>
	<span className={'emoji'}>
		<img src={AudioVideoReaderIcon} alt={'video reader icon'}
		     style={{ width: '15px', height: '15px', transform: 'translateY(2px)' }} />
	</span>

	<span>
		Lecteur multimédia
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