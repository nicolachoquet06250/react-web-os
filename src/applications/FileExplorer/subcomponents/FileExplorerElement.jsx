import React, { useRef, useState } from "react";
import { useStyle } from "../style";
import { removeDirectory } from "../hooks";
import { useClickAway, useKey } from "react-use";
import { directoryIcon } from "./TreeMenu";
import { FaIcon, FaIconsType } from "../../../components/FaIcon/FaIcon";

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

	const handleDoubleClick = () => {
		if (type === 'directory') onSelect();
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
	                onDoubleClick={handleDoubleClick}>
		{type === 'directory' && (<img src={directoryIcon} alt={'directory'} />)}
		{type === 'file' && acceptedImageFormats.indexOf(mime) !== -1 && (() => {
			if (['image/png', 'image/jpeg'].indexOf(mime) !== -1) {
				return (<img src={content} alt={title} style={imageMiniatureStyle} />);
			} else if (['text/plain'].indexOf(mime) !== -1) {
				return (<span style={iconsStyle}>
					<FaIcon type={FaIconsType.SOLID} icon={'file-lines'} />
				</span>);
			}

			return (<></>);
		})()}

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
