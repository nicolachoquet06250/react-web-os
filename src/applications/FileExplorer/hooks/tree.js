import cePc from "../../../assets/images/ce-pc.png";
import bureau from "../../../assets/images/bureau.png";
import { BehaviorSubject } from "rxjs";
import { createRxJsUseGetter } from "../../../hooks/utils/rxjs-getter";

const originalTree = [
	{
		type: 'directory',
		title: 'Ce PC',
		textTitle: 'ce-pc',
		icon: cePc,
		path: 'Ce PC',
		children: [
			{
				type: 'directory',
				title: 'Bureau',
				icon: bureau,
				path: 'Ce PC/Bureau',
				children: [
					{
						type: 'directory',
						title: 'agile tour',
						textTitle: 'agile-tour',
						path: 'Ce PC/Bureau/agile tour',
						children: []
					}
				]
			},
			{
				type: 'directory',
				title: 'Documents',
				path: 'Ce PC/Documents',
				children: [
					{
						type: 'directory',
						title: 'CyberLink',
						path: 'Ce PC/Documents/CyberLink',
						children: []
					},
					{
						type: 'directory',
						title: 'Enregistrement audio',
						textTitle: 'enregistrement-audio',
						path: 'Ce PC/Documents/Enregistrement audio',
						children: []
					},
					{
						type: 'directory',
						title: 'vidéos',
						path: 'Ce PC/Documents/vidéos',
						children: []
					},
					{
						type: 'directory',
						title: 'Virtual Machines',
						textTitle: 'virtual-machines',
						path: 'Ce PC/Documents/Virtual Machines',
						children: []
					},
					{
						type: 'directory',
						title: 'WindowsPowerShell',
						path: 'Ce PC/Documents/WindowsPowerShell',
						children: []
					},
					{
						type: 'directory',
						title: 'Wondershare',
						path: 'Ce PC/Documents/Wondershare',
						children: []
					},
					{
						type: 'directory',
						title: 'XSplit',
						path: 'Ce PC/Documents/XSplit',
						children: []
					}
				]
			},
			{
				type: 'directory',
				title: 'Images',
				path: 'Ce PC/Images',
				children: [
					{
						type: 'directory',
						title: 'Captures d\'écran',
						textTitle: 'captures-d-ecran',
						path: 'Ce PC/Images/Captures d\'écran',
						children: []
					},
					{
						type: 'directory',
						title: 'Galerie Samsung',
						textTitle: 'galerie-samsung',
						path: 'Ce PC/Images/Galerie Samsung',
						children: []
					},
					{
						type: 'directory',
						title: 'Images enregistées',
						textTitle: 'images-enregistrées',
						path: 'Ce PC/Images/Images enregistées',
						children: []
					},
					{
						type: 'directory',
						title: 'Pellicule',
						path: 'Ce PC/Images/Pellicule',
						children: []
					},
					{
						type: 'directory',
						title: 'Projets vidéo',
						textTitle: 'projets-vidéo',
						path: 'Ce PC/Images/Projets vidéo',
						children: []
					},
					{
						type: 'directory',
						title: 'Saved Pictures',
						textTitle: 'saved-pictures',
						path: 'Ce PC/Images/Saved Pictures',
						children: []
					},
					{
						type: 'directory',
						title: 'Téléchargements Mobile',
						textTitle: 'téléchargements-mobiles',
						path: 'Ce PC/Images/Téléchargements Mobile',
						children: []
					},
					{
						type: 'directory',
						title: 'windows-terminal',
						path: 'Ce PC/Images/windows-terminal',
						children: []
					},
					{
						type: 'directory',
						title: 'youtube',
						path: 'Ce PC/Images/youtube',
						children: []
					}
				]
			},
			{
				type: 'directory',
				title: 'Musiques',
				path: 'Ce PC/Musiques',
				children: [
					{
						type: 'directory',
						title: 'youtube',
						path: 'Ce PC/Musiques/youtube',
						children: []
					}
				]
			},
			{
				type: 'directory',
				title: 'Téléchargements',
				path: 'Ce PC/Téléchargements',
				children: []
			},
			{
				type: 'directory',
				title: 'Vidéos',
				path: 'Ce PC/Vidéos',
				children: [
					{
						type: 'directory',
						title: 'Captures',
						path: 'Ce PC/Vidéos/Captures',
						children: []
					},
					{
						type: 'directory',
						title: 'Movavi Vidéo Editor',
						textTitle: 'movavi-video-editor',
						path: 'Ce PC/Vidéos/Movavi Vidéo Editor',
						children: [
							{
								type: 'directory',
								title: 'Projects',
								path: 'Ce PC/Vidéos/Movavi Vidéo Editor/Projects',
								children: []
							}
						]
					}
				]
			},
		]
	}
];
const tree$ = new BehaviorSubject(originalTree);

export const useTree = createRxJsUseGetter(originalTree, tree$);

/**
 * @param {string} directoryPath
 */
export const createDirectory = directoryPath => {
	const tree = tree$.getValue();
	const splitDirectoryPath = directoryPath.split('/');
	const directoryName = splitDirectoryPath.pop();
	const path = splitDirectoryPath.join('/');

	/**
	 * @param {{ type: string, title: string, textTitle?: string, path: string, children: Array<any> }|Array<{ type: string, title: string, textTitle?: string, path: string, children: Array<any> }>} tree
	 * @param {string} path
	 * @param {string} directoryName
	 * @return {{ type: string, title: string, textTitle?: string, path: string, children: Array<any> }|Array<{ type: string, title: string, textTitle?: string, path: string, children: Array<any> }>}
	 */
	const getNewTree = (tree, path, directoryName) => {
		if (!(tree instanceof Array)) {
			return tree.type === 'directory' ? {
				...tree,
				children: getNewTree(tree.children, path, directoryName)
			} : tree;
		}

		const splitPath = path.split('/');
		if (splitPath[0] === '') splitPath.shift();

		return tree.map(e => {
			if (e.title === splitPath[0]) {
				if (splitPath.length > 1 && e.children.length > 0) {
					splitPath.shift();
					return getNewTree(e, splitPath.join('/'), directoryName);
				}

				const r = {
					...e,
					children: [
						...e.children,
						{
							type: 'directory',
							title: directoryName,
							path: directoryPath.substring(0, 1) === '/' ? directoryPath.substring(1, directoryPath.length) : directoryPath,
							children: []
						}
					]
				};

				if (directoryName.indexOf(' ') !== -1) {
					r.children[r.children.length - 1].textTitle = directoryName.toLowerCase().replace(/ /g, '-');
				}

				return r;
			}

			return e;
		});
	};

	tree$.next(getNewTree(tree, path, directoryName));
};

/**
 * @param {string} directoryPath
 */
export const removeDirectory = directoryPath => {
	const tree = tree$.getValue();
	const splitDirectoryPath = directoryPath.split('/');
	const directoryName = splitDirectoryPath.pop();
	const path = splitDirectoryPath.join('/');

	/**
	 * @param {{ type: string, title: string, textTitle?: string, path: string, children: Array<any> }|Array<{ type: string, title: string, textTitle?: string, path: string, children: Array<any> }>} tree
	 * @param {string} path
	 * @param {string} directoryName
	 * @return {{ type: string, title: string, textTitle?: string, path: string, children: Array<any> }|Array<{ type: string, title: string, textTitle?: string, path: string, children: Array<any> }>}
	 */
	const getNewTree = (tree, path, directoryName) => {
		if (!(tree instanceof Array)) {
			return tree.type === 'directory' ? {
				...tree,
				children: getNewTree(tree.children, path, directoryName)
			} : tree;
		}

		const splitPath = path.split('/');
		if (splitPath[0] === '') splitPath.shift();

		return tree.reduce((r, e) => {
			if (e.title === splitPath[0]) {
				if (splitPath.length > 1 && e.children.length > 0) {
					splitPath.shift();
					return [...r, getNewTree(e, splitPath.join('/'), directoryName)];
				}

				return [...r, {
					...e,
					children: e.children.filter(v => v.path !== directoryPath.substring(1, directoryPath.length))
				}];
			}

			return [...r, e];
		}, []);
	};

	tree$.next(getNewTree(tree, path, directoryName));
};

export const addImageToDirectory = (directoryPath, name, content, mime, size) => {
	// console.log(directoryPath, name, content, mime, size);

	const tree = tree$.getValue();

	/**
	 * @param {{ type: string, title: string, textTitle?: string, path: string, children: Array<any> }|Array<{ type: string, title: string, textTitle?: string, path: string, children: Array<any> }>} tree
	 * @param {string} path
	 * @param {string} name
	 * @param {string} content
	 * @param {string} mime
	 * @param {string} size
	 * @return {{ type: string, title: string, textTitle?: string, path: string, children: Array<any> }|Array<{ type: string, title: string, textTitle?: string, path: string, children: Array<any> }>}
	 */
	const getNewTree = (tree, path, name, content, mime, size) => {
		if (!(tree instanceof Array)) {
			return {
				...tree,
				children: getNewTree(tree.children, path, name, content, mime, size)
			}
		}

		const splitPath = path.split('/');
		if (splitPath[0] === '') splitPath.shift();

		return tree.map(e => {
			if (e.title === splitPath[0]) {
				if (splitPath.length > 1 && e.children.length > 0) {
					splitPath.shift();
					return getNewTree(e, splitPath.join('/'), name, content, mime, size);
				}

				const r = {
					...e,
					children: [
						...e.children,
						{
							type: 'file',
							title: name,
							path: directoryPath.substring(0, 1) === '/' ? directoryPath.substring(1, directoryPath.length) : directoryPath,
							mime,
							content,
							size
						}
					]
				};

				if (name.indexOf(' ') !== -1) {
					r.children[r.children.length - 1].textTitle = name.toLowerCase().replace(/ /g, '-');
				}

				return r;
			}

			return e;
		});
	};

	tree$.next(getNewTree(tree, directoryPath, name, content, mime, size));
	// console.log(getNewTree(tree, directoryPath, name, content, mime, size))
};

/**
 * @param {string} path
 * @param {Array<{ title: string, textTitle?: string, path: string, children: Array<any> }>} tree
 * @return {{ title: string, textTitle?: string, path: string, children: Array<any> }}
 */
export const findElementInTree = (path, tree) => {
	const splitPath = path.substring((path[0] === '/' ? 1 : 0), path.length).split('/');

	for (const e of tree) {
		if (e.title === splitPath[0]) {
			if (splitPath.length > 1 && e.children.length > 0) {
				splitPath.shift();
				return findElementInTree(splitPath.join('/'), e.children);
			}

			return e;
		}
	}
};

export const getIntermediatePaths = path => {
	const splitPath = path.split('/');

	const tmp = [];

	for (const e of splitPath) {
		if (tmp.length === 0) {
			tmp.push(e);
		} else {
			tmp.push(tmp[tmp.length - 1] + '/' + e);
		}
	}

	return tmp;
};
