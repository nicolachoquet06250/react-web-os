import React, { useCallback, useEffect, useState } from "react";
import { Window } from "../../components/Window/Window";
import { useRegisterContextualMenu } from "../../hooks/contextual-menu";
import { createContextMenuHandler } from "../../hooks/utils/handler";
import { useTouches } from "./hooks";
import { useStyle } from "./style";
import { CalculatriceTitle, CalculatriceContextMenu } from "./subcomponents";

export const Calculatrice = ({ onClose = () => null, onContextMenu = () => null }) => {
	const [calcul, setCalcul] = useState('0');
	const [activated, setActivated] = useState(true);
	const { touche: toucheStyle, touches: touchesStyle, calculatrice, ecran, toucheRow } = useStyle();
	const [selectedTouche, setSelectedTouche] = useState('');
	const touches = useTouches(calcul, setCalcul);

	useRegisterContextualMenu('calculatrice', CalculatriceContextMenu);

	const onKeyDown = useCallback(e => {
		e.preventDefault();
		e.stopPropagation();

		if (activated) {
			for (const {value} of touches.flat()) {
				if (e.key === value) {
					setSelectedTouche('');
					setSelectedTouche(value);
				}
			}

			if (e.key === 'Enter') {
				setSelectedTouche('');
				setSelectedTouche('=');
			}

			if (e.key === 'Backspace') {
				setSelectedTouche('');
				setSelectedTouche('');
			}
		}
	}, [activated]);

	useEffect(() => {
		document.addEventListener('keydown', onKeyDown);

		return () => document.removeEventListener('keydown', onKeyDown);
	}, [activated]);

	useEffect(touches.flat().filter(v => v.value === selectedTouche)[0]?.action ?? (() => null), [selectedTouche]);

	const handleContextMenu = createContextMenuHandler(e => onContextMenu('calculatrice', e.clientX, e.clientY));

	return (<Window headerBackground={'rgba(0, 0, 0, .5)'}
	                headerColor={'wheat'}
	                bodyBackground={'rgba(0, 0, 0, .5)'}
	                minWidth={200} width={200}
	                minHeight={300} height={300}
	                resizable={false}
	                title={<CalculatriceTitle />}
	                onClose={onClose}
	                onContextMenu={handleContextMenu}
					onActive={() => setActivated(true)}
					onUnactive={() => setActivated(false)}>

		<div className={calculatrice}>
			<div className={ecran}> {calcul} </div>

			<div className={touchesStyle}>
				{touches.map((line, i) => (<div key={i} className={toucheRow}>
					{line.map((touche, j) => (<button key={j}
					                                  onClick={touche?.action ?? (() => null)}
													  className={toucheStyle}
													  disabled={!!!(touche?.action)} >
						{touche.value}
					</button>))}
				</div>))}
			</div>
		</div>
	</Window>)
};

export const CalculatriceIcon = 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/GNOME_Calculator_icon_2018.svg/1200px-GNOME_Calculator_icon_2018.svg.png';
