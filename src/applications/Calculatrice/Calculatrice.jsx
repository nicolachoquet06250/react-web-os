import React, { useEffect } from "react";
import { Window } from "../../components/Window/Window";
import { useRegisterContextualMenu } from "../../hooks/contextual-menu";

const WindowTitle = () => (<>
	<span>Calculatrice </span>
	<span className={'emoji'}>😆</span>
</>);

const CalculatriceContextMenu = (props) => (<div {...props} style={{ padding: '10px' }}>
	Calculatrice Context menu
</div>);

export const Calculatrice = ({ onClose = () => null, onContextMenu = () => null }) => {
	useEffect(() => {
		useRegisterContextualMenu('calculatrice', CalculatriceContextMenu);
	}, []);

	const handleContextMenu = e => {
		e.preventDefault();
		e.stopPropagation();

		onContextMenu('calculatrice', e.clientX, e.clientY)
	};

	const touches = [
		['%', '', 'x^2', '1/x'],
		['CE', 'C', '', '/'],
		['7', '8', '9', '*'],
		['4', '5', '6', '-'],
		['1', '2', '3', '+'],
		['?', '0', ',', '=']
	];

	return (<Window headerBackground={'rgba(0, 0, 0, .5)'}
	                headerColor={'wheat'}
	                bodyBackground={'rgba(0, 0, 0, .5)'}
	                minWidth={200} width={200}
	                resizable={false}
	                title={<WindowTitle />}
	                onClose={onClose}
	                onContextMenu={handleContextMenu}>
		<div style={{ color: 'white', width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center' }}>
			<div style={{ width: '100%', height: '50px', background: 'transparent' }}>

			</div>
			<div style={{ width: '100%', display: 'flex', flexDirection: 'column', flex: 1 }}>
				{touches.map((line, i) => (<div key={i} style={{ display: 'flex', flexDirection: 'row', flex: 1 }}>
					{line.map((touche, j) => (<td key={j} style={{ textAlign: 'center', flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
						{touche}
					</td>))}
				</div>))}
			</div>
			Coucou
		</div>
	</Window>)
};
