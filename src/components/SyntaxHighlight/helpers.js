export const LANGUAGES = {
	JAVASCRIPT: 'javascript'
};

export const symbols = [
	'[', ']',
	'{', '}',
	'(', ')',
	'&&', '||',
	';', '=',
	'\'', '"',
	' ', '?',
	'!', '+',
	'-', '*',
	'/', '.',
	'=>'
];
export const keywords = [
	'const',
	'let',
	'var',
	'return',
	'function',
	'console',
	'log',
	'alert',
	'error',
	'warn',
	'table',
	'window',
	'document',
	'querySelector',
	'querySelectorAll',
	'innerHTML',
	'innerText',
	'classList',
	'addEventListener',
	'removeEventListener'
];

export const generateWordClasses = (text, line, c, j) => {
	const classes = [];

	if (symbols.includes(c)) classes.push('symbol');

	if (keywords.includes(c)) classes.push('keyword');

	if (line[j + 1] === '(' && !keywords.includes(c)) {
		classes.push('function-name');

		if (text.indexOf(`function ${c}`) === -1 && text.indexOf(`const ${c} = (`) === -1) {
			classes.push('error');
		}
	}

	if (!keywords.includes(c) && !symbols.includes(c) && line[j + 1] !== '(') {
		if (
			(line[j - 1] === "'") || (line[j - 1] === '"')
		) {
			classes.push('string');
		} else {
			classes.push('variable');

			if (text.indexOf(`const ${c}`) === -1 && text.indexOf(`let ${c}`) === -1 && text.indexOf(`var ${c}`) === -1) {
				classes.push('error');
			}
		}
	}

	return classes.join(' ');
};
