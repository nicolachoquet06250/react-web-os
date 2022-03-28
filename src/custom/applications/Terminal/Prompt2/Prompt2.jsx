import React from "react";
import { useLocation } from "../../../../applications/Terminal/hooks";
import { useCommandWriter } from "../../../../applications/Terminal/hooks/terminal-write";
import { useCustomPromptStyle } from "./style";
import { useDefaultPromptStyle } from "../../../../applications/Terminal/style";

export const Prompt2 = ({ username, active, onResult = () => null }) => {
	const {
		prompt, cursor,
		promptWrite, afterCursor
	} = useDefaultPromptStyle({});
	const {
		customPrompt, groupList,
		writeGroup, group,
		beforeWrite, system,
		path, shell, usernameStyle
	} = useCustomPromptStyle();

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
