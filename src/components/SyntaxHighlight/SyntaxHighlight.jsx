import React from "react";
import { useSyntaxHighlightStyles } from "./style";
import { generateWordClasses, LANGUAGES, symbols } from "./helpers";
import PropTypes from "prop-types";

const analyse = (code, symbols) => code.split(['\n'])
	.map(c => c.split('')
		.reduce((r, _c, i) => {
			if (symbols.includes(_c)) r.push(_c);
			else if (i === 0 || symbols.includes(c.split('')[i - 1])) r.push(_c);
			else r[r.length - 1] += _c;

			return r;
		}, [])
	);

const ArrayToJsx = ({
    originalText = '', analysedCode = [],
    containerStyle = '', lineStyle = '',
    lineNumbers = false, cursor = false
}) =>
	(<div className={containerStyle}>
		{analysedCode.map((line, i) =>
			(<div key={i}
			      className={lineStyle + ' line ' + (lineNumbers ? 'show-line-number' : '')}>
				{line.map((c, j) =>
					(<span key={j}
					       className={generateWordClasses(originalText, line, c, j)}>
								{c === ' ' ? <pre> </pre> : c}
							</span>))}

				{(() => {
					const Cursor = cursor;

					return cursor && i === analysedCode.length - 1 && (<Cursor />);
				})()}
			</div>))}
	</div>);

/**
 * @param {string} value
 * @param {string} language
 * @param {boolean} linesNumbers
 * @param {false|(() => JSX.Element)} cursor
 * @return {JSX.Element}
 */
export const SyntaxHighlight = ({
    value = '', language = LANGUAGES.JAVASCRIPT,
    linesNumbers = false, cursor = false
}) => {
	const {highlighter, ...styles} = useSyntaxHighlightStyles({});

	return (<ArrayToJsx analysedCode={analyse(value, symbols)}
	                    containerStyle={highlighter}
	                    lineStyle={styles[language]}
	                    lineNumbers={linesNumbers}
	                    cursor={cursor}
						originalText={value}/>);
};

SyntaxHighlight.propTypes = {
	value: PropTypes.string,
	language: PropTypes.string,
	linesNumbers: PropTypes.bool,
	cursor: PropTypes.func
};

SyntaxHighlight.defaultProps = {
	language: LANGUAGES.JAVASCRIPT,
	linesNumbers: false,
	cursor: false
};
