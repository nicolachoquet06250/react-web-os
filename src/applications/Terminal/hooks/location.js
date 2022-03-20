import { BehaviorSubject } from "rxjs";
import { createRxJsUseGetter } from "../../../hooks/utils/rxjs-getter";
import { useTree } from "../../FileExplorer/hooks";

const defaultLocation = '/';
const currentLocation$ = new BehaviorSubject(defaultLocation);

export const useLocation = createRxJsUseGetter(defaultLocation, currentLocation$);

export const useLocationControls = () => {
	const [_, resetCurrentLocation] = useLocation();
	const tree = useTree();

	return {
		set(newLocation) {
			currentLocation$.next(newLocation);
		},
		reset() {
			resetCurrentLocation();
		},
		exists(location) {
			const buildFlatTree = (tree, parent = '') => {
				let tmp = [];
				for (const e of tree) {
					const title = e.textTitle ?? e.title;
					tmp.push(parent + '/' + title);

					if (e.children.length > 0) {
						tmp = [...tmp, ...buildFlatTree(e.children, parent + '/' + title)];
					}
				}
				return tmp;
			};

			return buildFlatTree(tree).includes(location);
		}
	};
};
