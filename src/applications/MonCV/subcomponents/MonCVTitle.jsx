import React from 'react';
import { MonCVIcon } from '../MonCV';

export const MonCVTitle = () => (<>
	<span className={'emoji'}>
		<img src={MonCVIcon} alt={'video reader icon'}
		     style={{ width: '15px', height: '15px', transform: 'translateY(2px)' }} />
	</span>

	<span> Mon CV </span>
</>);