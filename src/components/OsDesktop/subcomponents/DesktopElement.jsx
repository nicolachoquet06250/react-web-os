import React, { useRef, useState } from "react";
import { removeDirectory } from "../../../applications/FileExplorer/hooks";
import { useClickAway, useKey } from "react-use";
import { FaIcon, FaIconsType } from "../../FaIcon/FaIcon";
import { useControlApplication } from "../../../hooks/applications";
import { GifImage } from '../../../components/GifImage/GifImage';

/**
 * @param {'directory'|'file'} type
 * @param {string} title
 * @param {number|null} size
 * @param {string|null} content
 * @param {string|null} mime
 * @param {Array<string>} acceptedFileFormats
 * @param {boolean} editable
 * @param {() => any} onRun
 * @param {() => any} onCancel
 * @param {() => any} onValid
 * @return {JSX.Element}
 */
export const DesktopElement = ({
   type = 'directory',
   title,
   size = null,
   content = null,
   mime = null,
   acceptedFileFormats = [],
   editable = false,
   onRun = () => null,
   onCancel = () => null,
   onValid = () => null
}) => {
	const [tmpTitle, setTmpTitle] = useState(title);

	const { run } = useControlApplication();

	const ref = useRef();

	const imageMiniatureStyle = {
		height: '70px',
		width: '70px',
		backgroundImage: `url(${content})`,
		backgroundPosition: 'center',
		backgroundRepeat: 'no-repeat',
		backgroundSize: '60px auto'
	};
	const gitContainerStyle = {
		width: '60px',
		height: '70px',
		padding: '5px',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center'
	};
	const gifMiniatureStyle = {
		width: '100%'
	};
	const iconsStyle = {
		display: 'inline-block',
		width: '70px',
		height: '70px'
	};

	const handleDelete = e => {
		if (e.target.tagName.toLowerCase() === 'button') {
			e.preventDefault();
			e.stopPropagation();

			removeDirectory(`/Ce PC/Bureau/${e.target.getAttribute('data-title')}`);
		}
	};

	const formats = {
		text: {
			format: ['text/plain'],
			run() {
				run('Bloc Note', {
					filePath: `/Ce PC/Bureau/${title}`
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
					imagePath: `/Ce PC/Bureau/${title}`,
					mime
				});
			},
			component: () => (mime === 'image/gif' 
				? (<div style={gitContainerStyle}><GifImage src={content} alt={title} style={gifMiniatureStyle} /></div>) 
					: (<div style={imageMiniatureStyle} />))
		},
		video: {
			format: ['video/mp4'],
			run() {
				run('Lecteur de vidéos', {
					videoPath: `/Ce PC/Bureau/${title}`
				});
			},
			component: () => (<span style={iconsStyle}>
				<FaIcon type={FaIconsType.SOLID} icon={'film'} />
			</span>)
		}
	};

	const handleDoubleClick = () => {
		if (type === 'directory') onRun();
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
	                title={tmpTitle}
	                data-title={tmpTitle}
	                onDoubleClick={handleDoubleClick}
	                style={{ alignItems: (editable ? 'flex-start' : false), maxWidth: '70px' }}>

		{type === 'directory' &&
			(<span style={iconsStyle}>
				<FaIcon type={FaIconsType.SOLID} icon={'folder'} />
			</span>)}
		{type === 'file' && acceptedFileFormats.indexOf(mime) !== -1 &&
			(() => Array.from(Object.keys(formats))
				.reduce((r, c) =>
					formats[c].format.indexOf(mime) !== -1
						? formats[c] : r, null)?.component() ?? (<></>))()}

		{(type === 'directory' || acceptedFileFormats.indexOf(mime) !== -1) && (<>
			{!editable && (<span style={{
				maxWidth: '70px',
				overflow: 'hidden',
				wordWrap: 'inherit',
				whiteSpace: 'nowrap',
				textOverflow: 'ellipsis',
				color: 'white'
			}}> {title} </span>)}
			{editable && (<input type={'text'}
			                     defaultValue={title}
			                     placeholder={'new directory'}
			                     autoFocus={true}
			                     onInput={e => setTmpTitle(e.target.value)}
			                     style={{
				                     maxWidth: '80px',
				                     backgroundColor: 'transparent',
				                     border: '1px solid blue'
			                     }} />)}
		</>)}
	</button>);
};
