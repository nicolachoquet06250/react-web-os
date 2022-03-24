import React from "react";
import { VsCodeIcon } from "../VsCode";

export const VsCodeTitle = () => (<>
    <span className={'emoji'}>
		<img src={VsCodeIcon} alt={'vs code icon'} style={{ width: '15px', height: '15px', transform: 'translateY(2px)' }} />
	</span>

	<span style={{ color: 'white' }}> VsCode </span>
</>);
