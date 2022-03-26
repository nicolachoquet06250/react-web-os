import React, { useRef, useState } from "react";
import { useStyle } from "../style";
import { removeDirectory } from "../hooks";
import { useClickAway, useKey } from "react-use";
import { directoryIcon } from "./TreeMenu";

export const FileExplorerElement = ({
	                                    title,
	                                    path,
	                                    editable = false,
	                                    onSelect = () => null,
	                                    onCancel = () => null,
	                                    onValid = () => null
                                    }) => {
	const { appBodyButton } = useStyle({});
	const [tmpTitle, setTmpTitle] = useState(title);

	const ref = useRef();

	const handleDelete = e => {
		if (e.target.tagName.toLowerCase() === 'button') {
			e.preventDefault();
			e.stopPropagation();

			console.log(`/${path}/${e.target.getAttribute('data-title')}`);

			removeDirectory(`/${path}/${e.target.getAttribute('data-title')}`);
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
		<img src={directoryIcon} alt={'directory'} />

		{!editable && (<span> {title} </span>)}
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
			                     border: '1px solid blue',
			                     color: 'white'
		                     }} />)}
	</button>);
};
