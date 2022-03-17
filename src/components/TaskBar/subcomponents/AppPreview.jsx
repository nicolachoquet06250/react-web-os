import React from "react";
import { useTaskBarStyle } from "../style";

export const AppPreview = ({
   title, icon, instanceNb, show = false,
   onMouseOver = () => null, onMouseOut = () => null,
   onCloseApp = () => null
}) => {
	const { appPreviewContainer, appPreview } = useTaskBarStyle();

	return (<div className={appPreviewContainer + ' ' + (show ? 'show' : '')}>
		{Array.from(new Array(instanceNb).keys()).map(i =>
			(<div key={i}
			      className={appPreview}
			      data-title={title}
			      onMouseOver={onMouseOver}
			      onMouseOut={onMouseOut}
			      style={{ '--icon': 'url(' + icon + ')' }}>
				<button className={'close-button'}
				        onClick={() => onCloseApp(title)}>
					
				</button>
			</div>))}
	</div>);
};
