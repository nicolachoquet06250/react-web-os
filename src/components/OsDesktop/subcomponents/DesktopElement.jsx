import React, { useRef, useState } from "react";
import { removeDirectory } from "../../../applications/FileExplorer/hooks";
import { useClickAway, useKey } from "react-use";
import { FaIcon, FaIconsType } from "../../FaIcon/FaIcon";

export const DesktopElement = ({
    title,
    editable = false,
    onRun = () => null,
    onChange = () => null,
    onCancel = () => null,
    onValid = () => null
}) => {
	const ref = useRef();
	const [tmpTitle, setTmpTitle] = useState(title);

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
	                data-title={tmpTitle}
	                onDoubleClick={onRun}
	                style={{ alignItems: editable ? 'flex-start' : false }}>
		<span>
			<FaIcon type={FaIconsType.SOLID} icon={'folder'} />
		</span>

		{!editable && (<span> {title} </span>)}
		{editable && (<input type={'text'}
		                     defaultValue={title}
		                     placeholder={'new directory'}
		                     autoFocus={true}
		                     onInput={e => {
			                     onChange(e.target.value);
			                     setTmpTitle(e.target.value);
		                     }}
		                     style={{
			                     maxWidth: '80px',
			                     backgroundColor: 'transparent',
			                     border: '1px solid blue'
		                     }} />)}
	</button>);
};
