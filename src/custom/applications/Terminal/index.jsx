import React from "react";
import { useTerminalStyle } from "../../../applications/Terminal/style";
import { useLocation } from "../../../applications/Terminal/hooks";
import { createUseStyles } from "react-jss";
import { useCommandWriter } from "../../../applications/Terminal/hooks/terminal-write";

const useCustomPromptStyle = createUseStyles({
	customPrompt: {
		flexDirection: 'column'
	},

	groupList: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		width: '100%'
	},

	group: {
		display: 'flex',
		flexDirection: 'row'
	},

	writeGroup: {
		display: 'flex',
		flexDirection: 'row',
		width: '100%'
	},

	beforeWrite: {
		'&::before': {
			content: `'$~'`,
			marginRight: '5px',
		}
	},

	system: {
		backgroundColor: 'yellow',
		color: 'black',
		cursor: 'default',

		paddingLeft: '5px',
		paddingRight: '5px',
		borderRadius: '50px'
	},

	path: {
		marginLeft: '5px',
		backgroundColor: 'blue',
		color: 'black',
		cursor: 'default',

		paddingLeft: '5px',
		paddingRight: '5px',
		borderRadius: '50px'
	},

	shell: {
		backgroundColor: 'red',
		color: 'black',
		cursor: 'default',

		paddingLeft: '5px',
		paddingRight: '5px',
		borderRadius: '50px'
	},

	usernameStyle: {
		marginLeft: '5px',
		backgroundColor: 'purple',
		color: 'black',
		cursor: 'default',

		paddingLeft: '5px',
		paddingRight: '5px',
		borderRadius: '50px'
	}
});

export const Prompt2 = ({ username, active, onResult = () => null }) => {
	const { prompt, cursor, promptWrite, afterCursor } = useTerminalStyle({});
	const { customPrompt, groupList, group, system, writeGroup, path, shell, usernameStyle, beforeWrite } = useCustomPromptStyle();

	const [currentLocation] = useLocation();
	const { tmpWrite } = useCommandWriter(username, active, { onResult });

	return (<div className={prompt + ' ' + customPrompt}>
		<div className={groupList}>
			<div className={group}>
				<div className={shell}> bash </div>

				<div className={usernameStyle}>
					{username}
				</div>

				<div className={path} title={currentLocation.replace('//', '/')}>
					{currentLocation === '/'
						? currentLocation : currentLocation.split('/')[currentLocation.split('/').length - 1]}
				</div>
			</div>

			<div className={group}>
				<div className={system}> webos </div>
			</div>
		</div>

		<div className={writeGroup}>
			<span className={beforeWrite} />

			<span className={promptWrite}> {tmpWrite} </span>

			<span className={cursor + ` ${!active ? 'inactive' : ''}`}> | </span>

			<span className={afterCursor} />
		</div>
	</div>);
};
