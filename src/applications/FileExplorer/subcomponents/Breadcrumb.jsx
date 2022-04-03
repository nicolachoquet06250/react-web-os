import { useStyle } from "../style";

export const Breadcrumb = ({ selectedDirectory = [], onSelectDirectory = () => null }) => {
	const { breadcrumb } = useStyle({});

	return (<div className={breadcrumb}>
		{selectedDirectory.map((d, i) => (<button key={i} type={'button'} onClick={() => {
			const index = selectedDirectory.indexOf(d);
			const { result: newSelectedDirectory } = selectedDirectory.reduce((r, c, i) => ({
				result: [...r.result, ...(i <= index && !r.finished ? [c] : [])],
				finished: r.finished ?? i === index
			}), {
				finished: false,
				result: []
			});
			onSelectDirectory(newSelectedDirectory.join('/'));
		}}>
			{d}
		</button>))}
	</div>);
};
