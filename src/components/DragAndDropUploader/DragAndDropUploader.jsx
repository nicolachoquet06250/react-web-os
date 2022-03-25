import React, { useCallback, useEffect, useState } from "react";

const preventDefaults = e => {
	e.preventDefault();
	e.stopPropagation();
};

export const DragAndDropUploader = ({
    children,
    width, height,
    x, y,
	showBackground = {},
	show = false,
    directory,
	onShow = () => null,
    onHide = () => null
}) => {
	const [style, setStyle] = useState({});
	const [imagesPreview, setImagesPreview] = useState([]);

	/**
	 * @type {React.MutableRefObject<HTMLDivElement>}
	 */
	useEffect(() => {
		setStyle({
			width, height,
			position: 'absolute',
			top: y, left: x,
			backgroundColor: 'red'
		});

		document.addEventListener('dragenter', onShow);

		return () => document.removeEventListener('dragenter', onShow);
	}, []);

	const handleDrop = useCallback(e => {
		preventDefaults(e);

		setStyle({ ...style, backgroundColor: 'red' });
		const files = Array.from(e.dataTransfer.files);

		Promise.all(files.map(file => new Promise(resolve => {
			let reader = new FileReader()
			reader.readAsDataURL(file)
			reader.onloadend = () => resolve(reader.result);
		})))
			.then(_files => {
				setImagesPreview(_files);
				// onHide(files, _files);
			});
	}, [imagesPreview, style]);
	const handleDrag = useCallback(e => {
		preventDefaults(e);
		setStyle({
			...style,
			...(Object.keys(showBackground).length > 0 ? showBackground : { backgroundColor: 'purple' }),

		});
	}, [style]);

	return (<>
		{show &&
			(<div style={style}
			      onDragEnter={handleDrag}
			      onDragOver={handleDrag}
			      onDrop={handleDrop}
			      onDragLeave={onHide}>
				{imagesPreview && (<>
					{imagesPreview.map((imagePreview, i) =>
						(<img key={i} src={imagePreview}
						      alt={'preview'}
						      style={{maxHeight: '200px'}}/>))}
				</>)}
			</div>)}

		{children}
	</>);
};
