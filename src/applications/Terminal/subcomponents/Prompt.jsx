import React from "react";
import { useDefaultPromptStyle } from "../style";
import { useLocation } from "../hooks";
import { useCommandWriter } from "../hooks/terminal-write";

export const Prompt = ({ username, active, onResult = () => null }) => {
	const { prompt, promptHeader, cursor, promptWrite, afterCursor } = useDefaultPromptStyle({});

	const [currentLocation] = useLocation();
	const { tmpWrite } = useCommandWriter(username, active, { onResult });

	return (<div className={prompt}>
		<span className={promptHeader}> {username}@react-webos [ {currentLocation} ] $~</span>

		<span className={promptWrite}> {tmpWrite} </span>

		<span className={cursor + ` ${!active ? 'inactive' : ''}`}> | </span>

		<span className={afterCursor} />
	</div>);
};
