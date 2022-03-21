import { useStartMenuStyle } from "../style";
import { useApplications } from "../../../hooks/applications";
import React, { Fragment } from "react";
import { ListedApplicationCategoryButton } from "./ListedApplicationCategoryButton";
import { ListedApplicationButton } from "./ListedApplicationButton";

export const ListedApplications = ({ onRunApp = () => null }) => {
	const { applicationList } = useStartMenuStyle({});

	const [applications] = useApplications();

	return (<div className={applicationList} style={{color: 'white'}}>
		{Array.from(Object.keys(applications
			.sort((a, b) => a.title.substring(0, 1) < b.title.substring(0, 1) ? -1 : 1)
			.reduce((r, c) =>
				Array.from(Object.keys(r)).indexOf(c.title.substring(0, 1).toLowerCase()) === -1
					? {...r, [c.title.substring(0, 1).toLowerCase()]: [c]}
					: {...r, [c.title.substring(0, 1).toLowerCase()]: [...r[c.title.substring(0, 1).toLowerCase()], c]}, {})))
			.map(letter => (<Fragment key={letter}>
				<ListedApplicationCategoryButton letter={letter} />

				{applications
					.filter(v => v.title.substring(0, 1).toLowerCase() === letter)
					.map((a, i) => (<ListedApplicationButton {...a} key={i} onRun={onRunApp} />))}
			</Fragment>))}
	</div>);
};
