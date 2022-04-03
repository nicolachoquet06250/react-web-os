import React from "react";
import { useTaskBarStyle } from "../style";
import { maximizeRunningApplication as _maximizeRunningApplication } from "../../../hooks/applications";
import { FaIcon, FaIconsType } from "../../FaIcon/FaIcon";

export const AppPreview = ({
   show = false, instances = [],
   onMouseOver = () => null, onMouseOut = () => null,
   onCloseApp = () => null
}) => {
	const { appPreviewContainer, appPreview } = useTaskBarStyle();

	return (<div className={appPreviewContainer + ' ' + (show ? 'show' : '')}>
		{instances.map((instance) => {
			const maximizeRunningApplication = () => _maximizeRunningApplication(instance.id);

			return (<div key={instance.id}
			             className={appPreview}
			             onMouseOver={onMouseOver}
			             onMouseOut={onMouseOut}
			             onClick={maximizeRunningApplication}
			             style={{ '--icon': 'url(' + instance.icon + ')' }}>
				<header>
					{(instance.title.length > 16 ? instance.title.split('').splice(0, 16).join('') + '...' : instance.title)}

					<button type={'button'} className={'close-button'}
					        onClick={() => onCloseApp(instance.title, instance.id)}>
						<FaIcon type={FaIconsType.SOLID} icon={'xmark'} />
					</button>
				</header>
			</div>);
		})}
	</div>);
};
