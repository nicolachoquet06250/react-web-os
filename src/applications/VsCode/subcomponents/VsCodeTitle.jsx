import React from "react";
import { VsCodeIcon } from "../VsCode";
import { FaIcon, FaIconsType } from "../../../components/FaIcon/FaIcon";
import { createUseStyles } from "react-jss";

const useVsCodeTitleStyle = createUseStyles({
	button: {
		height: '18px',
		backgroundColor: 'transparent',
		border: 'none',
		color: 'white',
		marginLeft: '10px',
		cursor: 'pointer',
		transition: 'background-color .5s ease-out',

		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',

		'&:hover': {
			backgroundColor: 'white',
			color: 'black'
		}
	}
});

export const VsCodeTitle = ({ onPlay }) => {
	const { button } = useVsCodeTitleStyle();

	return (<>
	    <span className={'emoji'}>
			<img src={VsCodeIcon} alt={'vs code icon'} style={{ width: '15px', height: '15px', transform: 'translateY(2px)' }} />
		</span>

		<span style={{ color: 'white' }}> VsCode </span>

		<button type={'button'} className={button} onClick={onPlay}>
			<FaIcon type={FaIconsType.SOLID} icon={'play'} />
		</button>
	</>);
}
