import React from "react";

export const ContextualMenuDesktopContent = props => (<div {...props} style={{ padding: '5px' }}>
	<span>coucou</span>
</div>);

export const ContextualMenuWindowContent = props => (<div {...props} style={{ padding: '5px' }}>
	<span>coucou 2</span>
</div>);

export const WindowTitle = () => (<>
	<span>Du bidon </span>
	<span className={'emoji'}>😆</span>
</>);
