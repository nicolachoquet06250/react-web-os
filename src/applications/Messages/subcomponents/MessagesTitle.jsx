import React from "react";
import { MessagesIcon } from '../Messages.jsx';

export const MessagesTitle = () => (<>
	<span className={'emoji'}>
		<img src={MessagesIcon} alt={'messages icon'}
		     style={{ width: '15px', height: '15px', transform: 'translateY(2px)' }} />
	</span>

	<span> Messages </span>
</>);