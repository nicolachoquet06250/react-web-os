import React from "react";
import './Cursor.css';
import { useVsCodeStyles } from "../style";

export const Cursor = ({ color, height = '20px' }) => {
	const { cursor, afterCursor } = useVsCodeStyles({ color, height });

	return (<>
		<div className={cursor}/>

		<div className={afterCursor} />
	</>);
};
