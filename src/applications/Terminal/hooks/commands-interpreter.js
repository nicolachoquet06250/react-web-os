import { useTree } from "../../FileExplorer/hooks";
import { useLocation, useLocationControls } from "./location";
import { useDate, useMonthName } from "../../../hooks/utils/date";

export const useCommandInterpreter = (state, setState) => {
	const tree = useTree();
	const [currentLocation] = useLocation();
	const { set: setLocation, exists } = useLocationControls();
	const currentMonthName = useMonthName();
	const date = useDate();

	const backInPath = (newPath, oldPath) => {
		newPath = newPath.split('/');
		oldPath = oldPath.split('/');

		if (newPath.length > 0 && newPath[0] === '..') {
			newPath.shift();
			oldPath.pop();

			return backInPath(newPath.join('/'), oldPath.join('/'));
		}

		let result = oldPath.join('/') + '/' + newPath.join('/');

		if (result[result.length - 1] === '/') {
			result = result.substring(0, result.length - 1);
		}

		return result;
	};

	return [
		{
			regex: /^clear$/gm,
			run() {
				setState(['clear']);
			}
		},
		{
			regex: /^cd (.+)$/gm,
			run(args) {
				args.shift();
				/**
				 * @const {string} newLocation
				 */
				const [newLocation] = args;

				if (exists(newLocation)) {
					setLocation(newLocation);
					setState([]);

					return true;
				} else if ((newLocation[0] !== '/' && newLocation[0] !== '.') || newLocation.substring(0, 2) === './') {
					const location = currentLocation + '/' + (newLocation.substring(0, 2) === './'
						? newLocation.substring(1, newLocation.length) : newLocation);

					if (exists(location)) {
						setLocation(location);
						setState([]);
					} else {
						setState([`Error: '${location}' is not a directory`]);
					}

					return true;
				} else if (newLocation.indexOf('../') !== -1 || newLocation.indexOf('..') !== -1) {
					let locationToBack = backInPath(newLocation, currentLocation.substring(1, currentLocation.length));

					if (locationToBack === '') {
						setState([`ERROR: '/' Permission denied`]);

						return true;
					}

					if (locationToBack[locationToBack.length - 1] === '/') {
						locationToBack = locationToBack.substring(0, locationToBack.length - 1);
					}

					if (exists(locationToBack)) {
						setLocation(locationToBack);
						setState([]);
					} else {
						setState([`Error: '${locationToBack}' is not a directory`]);
					}

					return true;
				}

				setState([`Error: '${newLocation}' is not a directory`]);
			}
		},
		{
			regex: /^ls( -l)?$/gm,
			run(args, username) {
				args.shift();

				const getSubTreeFromPath = (path, tree) => {
					if (path.length === 1 && path[0] === '') {
						return tree;
					}

					for (const e of tree) {
						const title = e.textTitle ?? e.title;

						if (path[0] === title) {
							if (path.length === 1) {
								return [...e.children];
							} else if (e.children.length === 0) {
								return false;
							} else {
								path.shift();
								return getSubTreeFromPath(path, e.children);
							}
						}
					}
				};

				if (!args[0]) {
					setState([getSubTreeFromPath((() => {
						const path = currentLocation.replace('//', '/').split('/');
						path.shift();
						return path;
					})(), tree).map(e => e.textTitle ?? e.title).join(' ')]);
				} else if (args[0] === '-l') {
					setState(getSubTreeFromPath((() => {
						const path = currentLocation.replace('//', '/').split('/');
						path.shift();
						return path;
					})(), tree).map(e => {
						const hours = `${date.getHours() < 10 ? '0' : ''}${date.getHours()}`;
						const minutes = `${date.getMinutes() < 10 ? '0' : ''}${date.getMinutes()}`;
						const dayNumber = `${date.getDate() < 10 ? '0' : ''}${date.getDate()}`;

						return `drwxr-xr-x ${e.children.length} ${username} ${username} ? ${currentMonthName.replace('//', '/').substring(0, 3)} ${dayNumber} ${hours}:${minutes} ${e.textTitle ?? e.title}`;
					}));
				}
			}
		},
		{
			regex: /(.+)/gm,
			run() {
				setState(['ERROR: command not found']);
			}
		}
	];
};
