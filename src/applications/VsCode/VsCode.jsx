import React, { Fragment, useEffect, useState } from "react";
import './VsCode.css';
import { Window } from "../../components/Window/Window";
import { createContextMenuHandler } from "../../hooks/utils/handler";
import { useVsCodeStyles } from "./style";
import { VsCodeTitle } from "./subcomponents";
import { createUseStyles } from "react-jss";

export const VsCodeIcon = 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/2048px-Visual_Studio_Code_1.35_icon.svg.png';

const LANGUAGES = {
	JAVASCRIPT: 'javascript'
};

const useSyntaxHighlightStyles = createUseStyles({
	javascript: {
		'& > *': {
			color: 'wheat'
		},

		'& > .symbol': {
			color: 'lightblue'
		},

		'& > .keyword': {
			color: 'pink'
		}
	}
});

/**
 * @param {string} value
 * @param {string} language
 * @param {boolean} linesNumbers
 * @param {false|(() => JSX.Element)} cursor
 * @return {JSX.Element}
 */
const SyntaxHighlight = ({ value = '', language = LANGUAGES.JAVASCRIPT, linesNumbers = false, cursor = false }) => {
	const styles = useSyntaxHighlightStyles();

	const symbols = [
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
	const keywords = [
		'const',
		'let',
		'var',
		'function',
		'console',
		'log'
	];

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
		return (<>
			{analysedCode.map((line, i) =>
				(<div className={(styles[language] ?? '') + ' line'}
				      style={{ minHeight: '20px' }}
				      key={i}>
					{line.map((c, j) =>
						(<span key={j} style={{ height: '20px', marginLeft: j === 0 ? '20px' : false }}
						       className={(symbols.includes(c) ? 'symbol' : '') + ' ' + (keywords.includes(c) ? 'keyword' : '')}>
							{c === ' ' ? <pre> </pre> : c}
						</span>))}
					{cursor && i === analysedCode.length - 1 && <Cursor />}
				</div>))}
		</>);
	};

	return jsx(analyse(value, symbols));
};

export const VsCode = ({ onContextMenu = () => null, ...otherProps }) => {
	const handleContextMenu = createContextMenuHandler(e => onContextMenu('vs-code', e.clientX, e.clientY))

	const [active, setActive] = useState(true);
	const [width, setWidth] = useState('auto');

	const { editor, cursor, afterCursor } = useVsCodeStyles({ maxWidth: width });

	const js = `const name = 'Nicolas';

function sayHello(name) {
  console.log('Hello ' + name);
}

sayHello(name);
`;

	return (<Window headerBackground={'rgb(0, 0, 0)'}
	                headerColor={'white'}
	                bodyBackground={'rgb(0, 0, 0)'}
	                title={<VsCodeTitle />}
	                onContextMenu={handleContextMenu}
	                onResize={(_width) => setWidth(_width + 'px')}
	                onActive={() => setActive(true)}
	                onUnactive={() => setActive(false)}
					{...otherProps}>
		<div className={editor}>
			<SyntaxHighlight value={js} linesNumbers={true} cursor={() => (<>
				<div className={cursor}/>

				<div className={afterCursor} />
			</>)} />

			{/*{lines.map((l, i) => (<div key={i}>
				<div>{l}</div>

				{i === lines.length - 1 && (<>
					<div className={cursor}/>

					<div className={afterCursor} />
				</>)}
			</div>))}*/}
		</div>
	</Window>);
};
