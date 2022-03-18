import React, { useEffect, useState } from "react";
import { Window } from "../../components/Window/Window";
import { useRegisterContextualMenu } from "../../hooks/contextual-menu";
import { createUseStyles } from "react-jss";

const useStyle = createUseStyles({
	calculatrice: {
		color: 'white',
		width: '100%',
		height: '100%',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'flex-start',
		alignItems: 'center'
	},

	ecran: {
		width: '100%',
		height: '50px',
		background: 'transparent',
		display: 'flex',
		justifyContent: 'flex-end',
		alignItems: 'center',
		fontSize: '25px',
		paddingRight: '20px'
	},

	touches: {
		width: '100%',
		display: 'flex',
		flexDirection: 'column',
		flex: 1
	},

	touche: {
		textAlign: 'center',
		flex: 1,
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: 'rgba(0, 0, 0, 0)',
		color: 'wheat',
		border: 'none',
		cursor: 'pointer',
		transition: 'background-color .5s ease-out',
		borderRadius: '5px',

		'&:hover, &:disabled': {
			backgroundColor: 'rgba(0, 0, 0, .5)'
		},

		'&:disabled': {
			cursor: 'default'
		}
	}
});

const WindowTitle = () => (<>
	<span>Calculatrice </span>
	<span className={'emoji'}>😆</span>
</>);

const CalculatriceContextMenu = (props) => (<div {...props} style={{ padding: '10px' }}>
	Calculatrice Context menu
</div>);

export const Calculatrice = ({ onClose = () => null, onContextMenu = () => null }) => {
	const [calcul, setCalcul] = useState('0');
	const { touche: toucheStyle, touches: touchesStyle, calculatrice, ecran } = useStyle();

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
			{
				value: '%',
				action() {
					setCalcul(calcul + '%')
				}
			},
			{
				value: ''
			},
			{
				value: 'x^2'
			},
			{
				value: '1/x'
			}
		],
		[
			{
				value: 'CE'
			},
			{
				value: 'C'
			},
			{
				value: '',
				action() {
					setCalcul(
						calcul.length <= 1 ?
							'0' : calcul
								.split('')
								.splice(0, calcul.length - 1)
								.join(''));
				}
			},
			{
				value: '/',
				action() {
					setCalcul(calcul + '/')
				}
			}
		],
		[
			{
				value: '7',
				action() {
					setCalcul(calcul === '0' ? '7' : (calcul + '7'))
				}
			},
			{
				value: '8',
				action() {
					setCalcul(calcul === '0' ? '8' : (calcul + '8'))
				}
			},
			{
				value: '9',
				action() {
					setCalcul(calcul === '0' ? '8' : (calcul + '9'))
				}
			},
			{
				value: '*',
				action() {
					setCalcul(calcul + '*')
				}
			}
		],
		[
			{
				value: '4',
				action() {
					setCalcul(calcul === '0' ? '4' : (calcul + '4'))
				}
			},
			{
				value: '5',
				action() {
					setCalcul(calcul === '0' ? '5' : (calcul + '5'))
				}
			},
			{
				value: '6',
				action() {
					setCalcul(calcul === '0' ? '6' : (calcul + '6'))
				}
			},
			{
				value: '-',
				action() {
					setCalcul(calcul + '-')
				}
			}
		],
		[
			{
				value: '1',
				action() {
					setCalcul(calcul === '0' ? '1' : (calcul + '1'))
				}
			},
			{
				value: '2',
				action() {
					setCalcul(calcul === '0' ? '2' : (calcul + '2'))
				}
			},
			{
				value: '3',
				action() {
					setCalcul(calcul === '0' ? '3' : (calcul + '3'))
				}
			},
			{
				value: '+',
				action() {
					setCalcul(calcul + '+')
				}
			}
		],
		[
			{
				value: '?'
			},
			{
				value: '0',
				action() {
					setCalcul(calcul === '0' ? '0' : (calcul + '0'))
				}
			},
			{
				value: ',',
				action() {
					setCalcul(calcul + '.')
				}
			},
			{
				value: '=',
				action() {
					let r;
					eval(`r = ${calcul}`)
					setCalcul(r.toString());
				}
			}
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
		<div className={calculatrice}>
			<div className={ecran}>
				{calcul}
			</div>

			<div className={touchesStyle}>
				{touches.map((line, i) => (<div key={i} style={{ display: 'flex', flexDirection: 'row', flex: 1 }}>
					{line.map((touche, j) => (
						<button onClick={touche?.action ?? (() => null)}
								className={toucheStyle}
								key={j} disabled={!!!(touche?.action)} >
							{touche.value}
						</button>))}
				</div>))}
			</div>
		</div>
	</Window>)
};
