import React from "react";

export const Indent = () => (<>
	{Array.from(new Array(3).keys())
		.map(i => (<span key={i}>&nbsp;</span>))}
</>);
