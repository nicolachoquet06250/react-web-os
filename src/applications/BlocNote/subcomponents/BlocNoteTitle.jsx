import React from "react";
import { BlocNoteIcon } from "../BlocNote";

export const BlocNoteTitle = () => (<>
	<span className={'emoji'}>
		<img src={BlocNoteIcon} alt={'bloc note icon'}
		     style={{ width: '15px', height: '15px', transform: 'translateY(2px)' }} />
	</span>

	<span>
		Bloc Note
	</span>
</>);
