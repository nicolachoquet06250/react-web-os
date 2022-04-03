import React, { useRef, useState } from "react";
import { useStyle } from "../style";
import { removeDirectory } from "../hooks";
import { useClickAway, useKey } from "react-use";
import { directoryIcon } from "./TreeMenu";
import { FaIcon, FaIconsType } from "../../../components/FaIcon/FaIcon";
import { useControlApplication } from "../../../hooks/applications";
import { GifImage } from '../../../components/GifImage/GifImage';

/**
 * @param {'directory'|'file'} type
 * @param {string} title
 * @param {string} path
 * @param {number|null} size
 * @param {string|null} content
 * @param {string|null} mime
 * @param {Array<string>} acceptedImageFormats
 * @param {boolean} editable
 * @param {() => any} onSelect
 * @param {() => any} onCancel
 * @param {() => any} onValid
 * @return {JSX.Element}
 */
export const FileExplorerElement = ({
	type = 'directory',
    title,
    path,
	size = null,
	content = null,
	mime = null,
	acceptedImageFormats = [],
    editable = false,
    onSelect = () => null,
    onCancel = () => null,
    onValid = () => null
}) => {
	const { appBodyButton } = useStyle({});
	const [tmpTitle, setTmpTitle] = useState(title);

	const { run } = useControlApplication();

	const ref = useRef();

	const imageMiniatureStyle = {
		maxHeight: '50px',
		width: 'auto'
	};
	const iconsStyle = {
		display: 'inline-block',
		fontSize: '40px',
		width: '50px',
		height: '50px'
	};

	const handleDelete = e => {
		if (e.target.tagName.toLowerCase() === 'button') {
			e.preventDefault();
			e.stopPropagation();

			console.log(`${path}/${e.target.getAttribute('data-title')}`);

			removeDirectory(`${path}/${e.target.getAttribute('data-title')}`);
		}
	};

	const formats = {
		text: {
			format: ['text/plain'],
			run() {
				run('Bloc Note', {
					filePath: `${path}/${title}`
				});
			},
			component: () => (<span style={iconsStyle}>
				<FaIcon type={FaIconsType.SOLID} icon={'file-lines'} />
			</span>)
		},
		image: {
			format: ['image/png', 'image/jpeg', 'image/gif'],
			run() {
				run(`Visionneuse d'images`, {
					imagePath: `${path}/${title}`,
					mime
				});
			},
			component: () => (mime === 'image/gif'
				? (<GifImage src={content} alt={title} style={imageMiniatureStyle} />)
					: (<img src={content} alt={title} style={imageMiniatureStyle} />))
		},
		video: {
			format: ['video/mp4'],
			run() {
				run('Lecteur multimédia', {
					videoPath: `${path}/${title}`,
					mime
				});
			},
			component: () => (<span style={iconsStyle}>
				<FaIcon type={FaIconsType.SOLID} icon={'film'} />
			</span>)
		},
		audio: {
			format: ['audio/mpeg'],
			run() {
				run('Lecteur multimédia', {
					videoPath: `${path}/${title}`,
					mime
				});
			},
			component: () => (<span style={iconsStyle}>
				<FaIcon type={FaIconsType.SOLID} icon={'file-audio'} />
			</span>)
		}
	};

	const handleDoubleClick = () => {
		if (type === 'directory') onSelect();
		if (type === 'file') {
			Array.from(Object.keys(formats))
				.reduce((r, c) =>
					formats[c].format.indexOf(mime) !== -1
						? formats[c] : r, null)?.run();
		}
	};

	useKey('Escape', () => {
		if (editable) onCancel();
	});
	useKey('Enter', e => {
		if (editable) {
			e.preventDefault();
			e.stopPropagation();

			onValid(e.target.parentElement.getAttribute('data-title'));
		}
	});
	useKey('Backspace', handleDelete);
	useKey('Delete', handleDelete);
	useClickAway(ref, () => {
		if (editable) onValid(tmpTitle);
	});

	return (<button ref={ref}
	                type={'button'}
	                className={appBodyButton}
	                title={title}
	                data-title={tmpTitle}
	                onDoubleClick={handleDoubleClick}>
		{type === 'directory' && (<img src={directoryIcon} alt={'directory'} />)}
		{type === 'file' && acceptedImageFormats.indexOf(mime) !== -1 &&
			(() => Array.from(Object.keys(formats))
				.reduce((r, c) =>
					formats[c].format.indexOf(mime) !== -1
						? formats[c] : r, null)?.component() ?? (<></>))()}

		{(type === 'directory' || acceptedImageFormats.indexOf(mime) !== -1) && (<>
			{!editable && (<span> {title} </span>)}
			{editable && (<input type={'text'}
			                     defaultValue={title}
			                     placeholder={'new directory'}
			                     autoFocus={true}
			                     onInput={e => setTmpTitle(e.target.value)}
			                     style={{
				                     maxWidth: '80px',
				                     backgroundColor: 'transparent',
				                     border: '1px solid blue',
				                     color: 'white'
			                     }} />)}
		</>)}
	</button>);
};
