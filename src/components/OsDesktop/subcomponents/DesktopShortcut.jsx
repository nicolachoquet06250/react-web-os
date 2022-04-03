import React, { useState, useEffect } from "react";
import { useApplications, useControlApplication } from "../../../hooks/applications";

export const DesktopShortcut = ({ title }) => {
    const [icon, setIcon] = useState('');
    const { run } = useControlApplication();
    const [applications] = useApplications();

    const handleDoubleClick = () => run(title);

    useEffect(() => {
        setIcon(applications.filter(v => v.title === title)[0]?.icon);
    }, [applications]);

    return (<button title={title}
                    type={'button'}
                    data-title={title}
                    onDoubleClick={handleDoubleClick}
                    style={{ alignItems: 'center', maxWidth: '70px' }}>
        <img src={icon} alt={'logo ' + title} style={{ width: '50px', maxHeight: '50px' }} />

        <span style={{
            maxWidth: '70px',
            overflow: 'hidden',
            wordWrap: 'inherit',
            whiteSpace: 'nowrap',
            textOverflow: 'ellipsis',
            color: 'white'
        }}> {title} </span>
    </button>);
};
