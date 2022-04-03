import { useStartMenuStyle } from "../style";
import React from "react";

export const ListedApplicationCategoryButton = ({ letter }) => {
	const { letterCategory } = useStartMenuStyle({});

	return (<button type={'button'} className={letterCategory}>
		{letter}
	</button>);
};
