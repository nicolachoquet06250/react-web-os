import React from "react";
import { SyntaxHighlight } from "../SyntaxHighlight";
import { Cursor } from "../../../applications/VsCode/subcomponents";

export default {
	title: 'App/UI/SyntaxHighlight',
	component: SyntaxHighlight
};

const javascript = `const test = 'coucou';

console.log(test);

console.log(notFoundVariable);

function nouvelleFonction() {
  return 'youhouuuuu';
}

alert(nouvelleFonction());

maNouvelleFonction();`;

const Template = (args) =>
	(<div style={{ backgroundColor: 'black', width: '100%', height: 'calc(100vh - 40px)' }}>
		<SyntaxHighlight {...args} />
	</div>);

export const WithCursorAndLineNumbers = Template.bind({});
WithCursorAndLineNumbers.args = {
	value: javascript,
	linesNumbers: true,
	cursor: Cursor
};

export const JusteWithCursor = Template.bind({});
JusteWithCursor.args = {
	value: javascript,
	cursor: Cursor
};

export const JusteWithLineNumbers = Template.bind({});
JusteWithLineNumbers.args = {
	value: javascript,
	linesNumbers: true
};
