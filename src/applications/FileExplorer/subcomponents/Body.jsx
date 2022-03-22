import { useStyle } from "../style";
import { useTree } from "../hooks";
import { useEffect, useState } from "react";
import { directoryIcon } from "./TreeMenu";

export const Body = ({ selectedDirectory = [], onSelectDirectory = () => null }) => {
	const { appBody, appBodyButton } = useStyle({});
	const tree = useTree();
	const [_children, setChildren] = useState([]);

	useEffect(() => {
		setChildren(selectedDirectory
			.reduce((r, c) =>
					r.filter(v =>
						(v.title === c) || (v.textTitle && v.textTitle === c)
					)[0]?.children ?? [],
				[...tree]
			));
	}, [selectedDirectory]);

	return (<div className={appBody}>
		{_children.map((c, i) =>
			(<button key={c.path.replace('/', '-') + '-' + i}
			         className={appBodyButton}
			         title={c.title}
			         onDoubleClick={() => onSelectDirectory(c.path)}>
				<img src={directoryIcon} alt={'directory'} />

				<span> {c.title} </span>
			</button>))}
	</div>);
};
