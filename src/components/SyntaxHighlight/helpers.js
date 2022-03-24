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
	'/', '.'
];
export const keywords = [
	'const',
	'let',
	'var',
	'function',
	'console',
	'log'
];

export const generateWordClasses = (line, c, j) => {
	const classes = [];

	if (symbols.includes(c)) classes.push('symbol');

	if (keywords.includes(c)) classes.push('keyword');

	if (line[j + 1] === '(' && !keywords.includes(c)) classes.push('function-name');

	if (!keywords.includes(c) && !symbols.includes(c) && line[j + 1] !== '(') {
		if (
			(line[j - 1] === "'") || (line[j - 1] === '"')
		) {
			classes.push('string');
		} else {
			classes.push('variable');
		}
	}

	return classes.join(' ');
};
