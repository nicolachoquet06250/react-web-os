import React from "react";
import { useTaskBarStyle } from "../style";

export const AppPreview = ({
   show = false, instances = [],
   onMouseOver = () => null, onMouseOut = () => null,
   onCloseApp = () => null
}) => {
	const { appPreviewContainer, appPreview } = useTaskBarStyle();

	return (<div className={appPreviewContainer + ' ' + (show ? 'show' : '')}>
		{instances.map((instance) =>
			(<div key={instance.id}
			      className={appPreview}
			      data-title={(instance.title.length > 16 ? instance.title.split('').splice(0, 16).join('') + '...' : instance.title)}
			      onMouseOver={onMouseOver}
			      onMouseOut={onMouseOut}
			      style={{ '--icon': 'url(' + instance.icon + ')' }}>
				<button className={'close-button'}
				        onClick={() => onCloseApp(instance.title, instance.id)}>
					
				</button>
			</div>))}
	</div>);
};
