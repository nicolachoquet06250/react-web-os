import React, { useRef, useState } from "react";
import { removeDirectory } from "../../../applications/FileExplorer/hooks";
import { useClickAway, useKey } from "react-use";
import { FaIcon, FaIconsType } from "../../FaIcon/FaIcon";
import { directoryIcon } from "../../../applications/FileExplorer/subcomponents";

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

	const ref = useRef();

	const imageMiniatureStyle = {
		height: '70px',
		width: '70px',
		backgroundImage: `url(${content})`,
		backgroundPosition: 'center',
		backgroundRepeat: 'no-repeat',
		backgroundSize: '60px auto'
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
	                onDoubleClick={onRun}
	                style={{ alignItems: (editable ? 'flex-start' : false), maxWidth: '70px' }}>

		{type === 'directory' && (<span style={iconsStyle}>
			<FaIcon type={FaIconsType.SOLID} icon={'folder'} />
		</span>)}
		{type === 'file' && acceptedFileFormats.indexOf(mime) !== -1 && (() => {
			if (['image/png', 'image/jpeg'].indexOf(mime) !== -1) {
				return (<div style={imageMiniatureStyle} />);
			} else if (['text/plain'].indexOf(mime) !== -1) {
				return (<span style={iconsStyle}>
					<FaIcon type={FaIconsType.SOLID} icon={'file-lines'} />
				</span>)
			}

			return (<></>);
		})()}

		{(type === 'directory' || acceptedFileFormats.indexOf(mime) !== -1) && (<>
			{!editable && (<span style={{
				maxWidth: '70px',
				overflow: 'hidden',
				wordWrap: 'inherit',
				whiteSpace: 'nowrap',
				textOverflow: 'ellipsis',
			}}> {title} </span>)}
			{editable && (<input type={'text'}
			                     defaultValue={title}
			                     placeholder={'new directory'}
			                     autoFocus={true}
			                     onInput={e => {
				                     setTmpTitle(e.target.value);
			                     }}
			                     style={{
				                     maxWidth: '80px',
				                     backgroundColor: 'transparent',
				                     border: '1px solid blue'
			                     }} />)}
		</>)}
	</button>);
};
