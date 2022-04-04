import React from "react";

export const Message = ({ children }) => (<p style={{ fontSize: '12px', margin: 0 }}>
	{children}
</p>);

export const BubbleMe = ({ children }) => (<div className={'me'} 
										 style={{ display: 'flex', justifyContent: 'flex-end' }}>
	<div className={"bubble"} 
		 style={{ 
			 maxWidth: '50%', 
			 minHeight: '50px', 
			 padding: '5px', 
			 margin: '5px', 
			 borderRadius: '5px', 
			 borderBottomRightRadius: 0, 
			 backgroundColor: 'white', 
			 color: 'black'
		 }}>
		<span> Moi </span>

		{children}
	</div>
</div>);

export const BubbleYou = ({ user, children }) => (<div className={'you'} 
										  		style={{ display: 'flex', justifyContent: 'flex-start' }}>
	<div className={"bubble"} 
		style={{ 
			maxWidth: '50%', 
			minHeight: '50px', 
			padding: '5px', 
			margin: '5px', 
			borderRadius: '5px', 
			borderBottomLeftRadius: 0, 
			backgroundColor: '#17CA38', 
			color: 'black'
		}}>
		<span> {user} </span>

		{children}
	</div>
</div>);