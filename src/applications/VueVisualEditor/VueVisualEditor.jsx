import React from "react";
import { WebViewWindow } from "../../components/WebViewWindow/WebViewWindow";

export const VueVisualEditorIcon = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M356.9 64.3H280l-56 88.6-48-88.6H0L224 448 448 64.3h-91.1zm-301.2 32h53.8L224 294.5 338.4 96.3h53.8L224 384.5 55.7 96.3z'/%3E%3C/svg%3E";

const VueVisualEditorTitle = () => (<>
    <span className={'emoji'}>
    <img src={VueVisualEditorIcon} alt={'vue visual editor icon'}
		     style={{ width: '15px', height: '15px', transform: 'translateY(2px)' }} />
    </span>

    <span>
        Vue Visual Editor
    </span>
</>);

export const VueVisualEditor = ({ ...otherProps }) => 
    (<WebViewWindow href={'https://visual-editor.vue.nicolaschoquet.fr'} 
                    title={<VueVisualEditorTitle />} 
                    minWidth={675} width={675}
                    headerBackground={'white'}
                    headerColor={'black'}
                    bodyBackground={'white'}
                    {...otherProps} />);