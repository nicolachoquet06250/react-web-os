import React from "react";
import './Cursor.css';
import { useVsCodeStyles } from "../style";

export const Cursor = () => {
	const { cursor, afterCursor } = useVsCodeStyles({});

	return (<>
		<div className={cursor}/>

		<div className={afterCursor} />
	</>);
};
