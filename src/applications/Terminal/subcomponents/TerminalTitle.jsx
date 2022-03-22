import React from "react";
import { setDefaultPrompt, useDefaultPromptComponent, usePromptList } from "../hooks";
import { createUseStyles } from "react-jss";
import { FaIcon, FaIconsType } from "../../../components/FaIcon/FaIcon";

const useTerminalTitleStyle = createUseStyles({
	promptSelector: {
		backgroundColor: 'transparent',
		border: 'none',
		color: 'wheat',
		marginLeft: '10px',
		cursor: 'pointer',
		appearance: 'none',

		'& > option': {
			color: 'black'
		}
	}
});

export const TerminalTitle = () => {
	const { promptSelector } = useTerminalTitleStyle();
	const [promptList] = usePromptList();
	const { name: defaultPrompt } = useDefaultPromptComponent();
	const handleChange = e => setDefaultPrompt(e.target.value);

	return (<>
		<span className={'emoji'}>
			<FaIcon type={FaIconsType.SOLID} icon={'terminal'} />
		</span>
		<span> Terminal </span>

		<select className={promptSelector}
		        value={defaultPrompt}
		        onMouseDown={e => e.stopPropagation()}
				onMouseUp={e => e.stopPropagation()}
				onChange={handleChange}>
			{promptList.map((p, i) =>
				(<option key={i} value={p.name}>
					{p.name}
				</option>))}
		</select>
	</>);
};
