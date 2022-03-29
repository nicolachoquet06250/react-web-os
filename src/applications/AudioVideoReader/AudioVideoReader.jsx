import React, { useEffect, useState } from "react";
import { Window } from "../../components/Window/Window";
import { createContextMenuHandler } from "../../hooks/utils/handler";
import { getFileContent } from "../FileExplorer/hooks";
import { useVideoReaderStyle } from "./style";
import { AudioVideoReaderTitle, Video, Audio } from './subcomponents';

export const AudioVideoReaderIcon = 'https://fr.seaicons.com/wp-content/uploads/2015/10/multimedia-video-player-icon.png';

export const AudioVideoReader = ({ videoPath = '', mime = '', onContextMenu = () => null, ...otherProps }) => {
	const [content, setContent] = useState('');
	// const [path, setPath] = useState('');
	const [mimeType, setMimeType] = useState('');
	const [width, setWidth] = useState('100%');
	const [height, setHeight] = useState('100%');
	const [active, setActive] = useState(true);
	const [moving, setMoving] = useState(false);

	const { container } = useVideoReaderStyle({});

	useEffect(() => {
		setContent(getFileContent(videoPath));
		// setPath(videoPath);
		setMimeType(mime);
	}, []);

	const handleContextMenu = createContextMenuHandler(e => onContextMenu('video-viewer', e.clientX, e.clientY));

	const handleResize = (w, h) => {
		setWidth(w + 'px');
		setHeight(h + 'px');
	};

	return (<Window bodyBackground={active ? 'black' : 'rgba(0, 0, 0, .5)'}
	                headerBackground={active ? 'white' : 'rgba(255, 255, 255, .5)'}
	                headerColor={'black'}
	                minWidth={483} width={483}
	                title={<AudioVideoReaderTitle path={videoPath} />}
	                onContextMenu={handleContextMenu}
	                onResize={handleResize}
	                onActive={() => setActive(true)}
	                onUnactive={() => setActive(false)}
	                onMoving={() => setMoving(true)}
	                onMoveEnd={() => setMoving(false)}
	                {...otherProps}>
		<div className={container}>
			{content && mimeType.indexOf('video/') !== -1 && 
				(<Video active={active} moving={moving} 
						width={width} height={height} 
						content={content} mime={mimeType} />)}
			{content && mimeType.indexOf('audio/') !== -1 && 
				(<Audio active={active} moving={moving} 
						width={width} height={height} 
						content={content} mime={mimeType} />)}
		</div>
	</Window>);
};
