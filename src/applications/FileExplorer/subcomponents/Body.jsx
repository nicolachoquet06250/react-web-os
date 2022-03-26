import { useStyle } from "../style";
import { useTree } from "../hooks";
import { useEffect, useState } from "react";
import { directoryIcon } from "./TreeMenu";
import { DragAndDropUploader } from "../../../components/DragAndDropUploader/DragAndDropUploader";

export const Body = ({ selectedDirectory = [], onSelectDirectory = () => null }) => {
	const { appBody, appBodyButton } = useStyle({});
	const [tree] = useTree();
	const [_children, setChildren] = useState([]);
	const [showUploader, setShowUploader] = useState(false);

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
		<DragAndDropUploader id={'body'} show={showUploader}
		                     showPreview={true}
		                     onShow={() => setShowUploader(true)}
		                     onHide={() => setShowUploader(false)}
		                     showBackground={{ backgroundColor: 'rgba(0, 0, 0, .5)' }}>
			{_children.map((c, i) =>
				(<button key={c.path.replace('/', '-') + '-' + i}
				         className={appBodyButton}
				         title={c.title}
				         onDoubleClick={() => onSelectDirectory(c.path)}>
					<img src={directoryIcon} alt={'directory'} />

					<span> {c.title} </span>
				</button>))}
		</DragAndDropUploader>
	</div>);
};
