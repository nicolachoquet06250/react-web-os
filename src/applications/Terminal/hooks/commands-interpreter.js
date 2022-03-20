import { useTree } from "../../FileExplorer/hooks";
import { useLocation, useLocationControls } from "./location";
import { useDate, useMonthName } from "../../../hooks/utils/date";

export const useCommandInterpreter = (state, setState) => {
	const tree = useTree();
	const [currentLocation] = useLocation();
	const { set: setLocation, exists } = useLocationControls();
	const currentMonthName = useMonthName();
	const date = useDate();

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
				const [newLocation] = args;

				if (exists(newLocation)) {
					setLocation(newLocation);
					setState([]);
				} else {
					setState([`Error: ${newLocation} is not a directory`]);
				}
			}
		},
		{
			regex: /^ls( -l)?$/gm,
			run(args, username) {
				args.shift();

				const getSubTreeFromPath = (path, tree) => {
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
						const path = currentLocation.split('/');
						path.shift();
						return path;
					})(), tree).map(e => e.textTitle ?? e.title).join(' ')]);
				} else if (args[0] === '-l') {
					setState(getSubTreeFromPath((() => {
						const path = currentLocation.split('/');
						path.shift();
						return path;
					})(), tree).map(e => {
						const hours = `${date.getHours() < 10 ? '0' : ''}${date.getHours()}`;
						const minutes = `${date.getMinutes() < 10 ? '0' : ''}${date.getMinutes()}`;
						const dayNumber = `${date.getDate() < 10 ? '0' : ''}${date.getDate()}`;

						return `drwxr-xr-x ${e.children.length} ${username} ${username} ? ${currentMonthName.substring(0, 3)} ${dayNumber} ${hours}:${minutes} ${e.textTitle ?? e.title}`;
					}));
				}

				console.log(args, username);
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
