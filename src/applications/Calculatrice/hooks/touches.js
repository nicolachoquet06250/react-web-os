const addNumberToScreen = (v, calcul, setCalcul) => setCalcul(calcul === '0' ? `${v}` : (calcul + `${v}`));

const addSymbolToScreen = (s, calcul, setCalcul) => setCalcul(calcul + s);

export const useTouches = (calcul, setCalcul) => [
	[
		{
			value: '%',
			action() {
				addSymbolToScreen('%', calcul, setCalcul);
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
				addSymbolToScreen('/', calcul, setCalcul);
			}
		}
	],
	[
		{
			value: '7',
			action() {
				addNumberToScreen(7, calcul, setCalcul);
			}
		},
		{
			value: '8',
			action() {
				addNumberToScreen(8, calcul, setCalcul);
			}
		},
		{
			value: '9',
			action() {
				addNumberToScreen(9, calcul, setCalcul);
			}
		},
		{
			value: '*',
			action() {
				addSymbolToScreen('*', calcul, setCalcul);
			}
		}
	],
	[
		{
			value: '4',
			action() {
				addNumberToScreen(4, calcul, setCalcul);
			}
		},
		{
			value: '5',
			action() {
				addNumberToScreen(5, calcul, setCalcul);
			}
		},
		{
			value: '6',
			action() {
				addNumberToScreen(6, calcul, setCalcul);
			}
		},
		{
			value: '-',
			action() {
				addSymbolToScreen('-', calcul, setCalcul);
			}
		}
	],
	[
		{
			value: '1',
			action() {
				addNumberToScreen(1, calcul, setCalcul);
			}
		},
		{
			value: '2',
			action() {
				addNumberToScreen(2, calcul, setCalcul);
			}
		},
		{
			value: '3',
			action() {
				addNumberToScreen(3, calcul, setCalcul);
			}
		},
		{
			value: '+',
			action() {
				addSymbolToScreen('+', calcul, setCalcul);
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
				addNumberToScreen(0, calcul, setCalcul);
			}
		},
		{
			value: ',',
			action() {
				addSymbolToScreen('.', calcul, setCalcul);
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
