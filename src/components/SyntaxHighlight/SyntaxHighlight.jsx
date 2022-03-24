import React from "react";
import { useSyntaxHighlightStyles } from "./style";
import { generateWordClasses, LANGUAGES, symbols } from "./helpers";

/**
 * @param {string} value
 * @param {string} language
 * @param {boolean} linesNumbers
 * @param {false|(() => JSX.Element)} cursor
 * @return {JSX.Element}
 */
export const SyntaxHighlight = ({ value = '', language = LANGUAGES.JAVASCRIPT, linesNumbers = false, cursor = false }) => {
	const {highlighter, ...styles} = useSyntaxHighlightStyles({});

	const Cursor = cursor;

	const analyse = (code, symbols) => code.split(['\n'])
		.map(c => c.split('')
			.reduce((r, _c, i) => {
				if (symbols.includes(_c)) r.push(_c);
				else if (i === 0 || symbols.includes(c.split('')[i - 1])) r.push(_c);
				else r[r.length - 1] += _c;

				return r;
			}, [])
		);

	const jsx = (analysedCode = []) => {
		return (<div className={highlighter}>
			{analysedCode.map((line, i) =>
				(<div key={i}
				      className={(styles[language] ?? '') + ' line ' + (linesNumbers ? 'show-line-number' : '')}>
					{line.map((c, j) =>
						(<span key={j}
						       className={generateWordClasses(line, c, j)}>
							{c === ' ' ? <pre> </pre> : c}
						</span>))}

					{cursor && i === analysedCode.length - 1 && <Cursor />}
				</div>))}
		</div>);
	};

	return jsx(analyse(value, symbols));
};
