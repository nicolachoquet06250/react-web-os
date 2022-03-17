import React, { useEffect, useState } from "react";
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
	const [calcul, setCalcul] = useState('0');

	useEffect(() => {
		useRegisterContextualMenu('calculatrice', CalculatriceContextMenu);
	}, []);

	const handleContextMenu = e => {
		e.preventDefault();
		e.stopPropagation();

		onContextMenu('calculatrice', e.clientX, e.clientY)
	};

	const touches = [
		[
			{value: '%'},
			{value: ''},
			{value: 'x^2'},
			{value: '1/x'}
		],
		[
			{value: 'CE'},
			{value: 'C'},
			{value: ''},
			{value: '/'}
		],
		[
			{
				value: '7',
				action() {
					setCalcul(calcul === '0' ? '7' : (calcul + '7'))
				}
			},
			{value: '8'},
			{value: '9'},
			{value: '*'}
		],
		[
			{value: '4'},
			{value: '5'},
			{value: '6'},
			{value: '-'}
		],
		[
			{value: '1'},
			{value: '2'},
			{value: '3'},
			{value: '+'}
		],
		[
			{value: '?'},
			{value: '0'},
			{value: ','},
			{value: '='}
		]
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
			<div style={{ width: '100%', height: '50px', background: 'transparent', display: 'flex', justifyContent: 'flex-end', alignItems: 'center', fontSize: '25px' }}>
				{calcul}
			</div>

			<div style={{ width: '100%', display: 'flex', flexDirection: 'column', flex: 1 }}>
				{touches.map((line, i) => (<div key={i} style={{ display: 'flex', flexDirection: 'row', flex: 1 }}>
					{line.map((touche, j) => (<button onClick={touche?.action ?? (() => null)} key={j} style={{ textAlign: 'center', flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
						{touche.value}
					</button>))}
				</div>))}
			</div>
			Coucou
		</div>
	</Window>)
};
