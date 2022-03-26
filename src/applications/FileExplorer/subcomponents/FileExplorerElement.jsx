import React, { useRef, useState } from "react";
import { useStyle } from "../style";
import { removeDirectory } from "../hooks";
import { useClickAway, useKey } from "react-use";
import { directoryIcon } from "./TreeMenu";

/**
 * @param {'directory'|'file'} type
 * @param {string} title
 * @param {string} path
 * @param {number|null} size
 * @param {string|null} content
 * @param {string|null} mime
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
    editable = false,
    onSelect = () => null,
    onCancel = () => null,
    onValid = () => null
}) => {
	const { appBodyButton } = useStyle({});
	const [tmpTitle, setTmpTitle] = useState(title);

	const ref = useRef();

	const images = ['image/png'];
	const imageMiniatureStyle = {
		maxHeight: '50px',
		width: 'auto'
	};

	const handleDelete = e => {
		if (e.target.tagName.toLowerCase() === 'button') {
			e.preventDefault();
			e.stopPropagation();

			console.log(`${path}/${e.target.getAttribute('data-title')}`);

			removeDirectory(`${path}/${e.target.getAttribute('data-title')}`);
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
	                className={appBodyButton}
	                title={title}
	                data-title={tmpTitle}
	                onDoubleClick={onSelect}>
		{type === 'directory' && (<img src={directoryIcon} alt={'directory'}/>)}
		{type === 'file' && images.indexOf(mime) !== -1 && (<img src={content} alt={title} style={imageMiniatureStyle} />)}

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
	</button>);
};
