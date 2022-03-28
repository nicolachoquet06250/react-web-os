import React, { useCallback, useEffect, useState } from "react";

const preventDefaults = e => {
	e.preventDefault();
	e.stopPropagation();
};

export const DragAndDropUploader = ({
	id,
    children,
    width = '100%', height = '100%',
    x = 0, y = 0,
	showBackground = {},
	acceptedFileTypes = [],
	show = false,
	showPreview = false,
	onShow = () => null,
    onHide = () => null,
	onUpload = () => null
}) => {
	const [style, setStyle] = useState({});
	const [imagesPreview, setImagesPreview] = useState([]);

	const handleDrag = useCallback(e => {
		preventDefaults(e);

		setStyle({
			...style,
			...(Object.keys(showBackground).length > 0 ? showBackground : { backgroundColor: 'purple' }),
		});
	}, [style]);
	const handleDrop = useCallback(e => {
		preventDefaults(e);

		const files = Array.from(e.dataTransfer.files).filter(v => acceptedFileTypes.indexOf(v.type) !== -1);

		Promise.all(files.map(file => new Promise(resolve => {
			let reader = new FileReader()
			reader.readAsDataURL(file)
			reader.onloadend = () => resolve(reader.result);
		})))
			.then(_files => {
				setImagesPreview(_files);
				onUpload(files, _files);
				document.dispatchEvent(new CustomEvent('hide-all-drag-zone', {
					detail: { id }
				}));
			});
	}, [imagesPreview, style, acceptedFileTypes]);
	const handleDragLeave = e => {
		preventDefaults(e);
		onHide();
	};
	const handleHideAllDragZone = e => {
		if (e.detail.id !== id) {
			onHide();
		}
	};

	/**
	 * @type {React.MutableRefObject<HTMLDivElement>}
	 */
	useEffect(() => {
		setStyle({
			width, height,
			position: 'fixed',
			top: y, left: x,
			zIndex: 1
		});

		document.addEventListener('dragenter', onShow);
		document.addEventListener('hide-all-drag-zone', handleHideAllDragZone);

		return () => {
			document.removeEventListener('dragenter', onShow);
			document.removeEventListener('hide-all-drag-zone', handleHideAllDragZone);
		}
	}, []);
	useEffect(() => {
		setStyle({
			width, height,
			position: 'absolute',
			top: y, left: x,
			zIndex: 1,
			display: show ? 'block' : 'none'
		});
	}, [show]);

	return (<>
		<div style={style}
		      onDragEnter={handleDrag}
		      onDragEnterCapture={handleDrag}
		      onDragOver={handleDrag}
		      onDrop={handleDrop}
		      onDragLeave={handleDragLeave}
		      onDragLeaveCapture={handleDragLeave}>
			{showPreview && imagesPreview && (<>
				{imagesPreview.map((imagePreview, i) =>
					(<img key={i} src={imagePreview}
					      alt={'preview'}
					      style={{maxHeight: '200px'}}/>))}
			</>)}
		</div>

		{children}
	</>);
};
