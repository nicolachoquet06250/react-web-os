import React, { useEffect, useRef } from "react";
import { useClickAway } from "react-use";
import PropTypes from "prop-types";
import { useStartMenuStyle } from "./style";
import { ListedApplications } from "./subcomponents";
import { useControlApplication, usePinApplications } from "../../hooks/applications";

export const StartMenu = ({ opened = false, onClickOutside = () => null, onContextMenu = () => null }) => {
	const { startMenu } = useStartMenuStyle({ opened });

	const [pinApps] = usePinApplications();
	const { run } = useControlApplication();

	const startMenuPinApps = pinApps.filter(v => v.options.startMenu);

	const startMenuRef = useRef();

	useClickAway(startMenuRef, (e) => {
		if (e.target.tagName.toLowerCase() !== 'button') {
			onClickOutside();
		}
	});

	return (<div className={startMenu} ref={startMenuRef}>
		<ListedApplications onRunApp={onClickOutside} onContextMenu={onContextMenu} />

		<div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'flex-start', flexWrap: 'wrap', flex: 1 }}>
			{startMenuPinApps.map((a, i) =>
				(<button type={'button'}
				         style={{
							width: 'calc(25% - 15px)',
							minHeight: '80px',
							margin: '5px',
							backgroundColor: 'transparent',
							color: 'white',
							border: 'none',
							borderRadius: '5px',
							padding: '5px',
							cursor: 'pointer',
							display: 'flex',
							flexDirection: 'column',
							justifyContent: 'space-between',
							alignItems: 'center'
						}} key={i}
				         onClick={() => {
							run(a.title);
							onClickOutside();
						}} title={a.title}>
					<img src={a.icon} alt={'icon ' + a.title} style={{ width: '100%' }} />

					<span style={{
						display: 'inline-block',
						width: '100%',
						marginTop: '5px',
						overflow: 'hidden',
						wordWrap: 'inherit',
						whiteSpace: 'nowrap',
						textOverflow: 'ellipsis',
					}}>{a.title}</span>
				</button>))}
		</div>
	</div>);
};

StartMenu.propTypes = {
	opened: PropTypes.bool,
	onClickOutside: PropTypes.func
};

StartMenu.defaultProps = {
	opened: false,
	onClickOutside: () => null
};
