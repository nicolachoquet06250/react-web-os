import React from "react";
import { createUseStyles } from "react-jss";

const useContextMenuStyle = createUseStyles({
	button: {
		backgroundColor: 'transparent',
		color: 'white',
		border: 'none',
		cursor: 'pointer',
		display: 'flex',
		justifyContent: 'flex-start',
		alignItems: 'center'
	}
});

export const ContextualMenuDesktopContent = ({ onHide = () => null, onNewDirectory = () => null }) => {
	const { button } = useContextMenuStyle();

	return (<div style={{ padding: '10px' }}>
		<button type={'button'} className={button} onClick={() => {
			onNewDirectory();
			onHide();
		}}>
			Créer un nouveau répertoire
		</button>

		{/*<button className={button}>
			Créer un nouveau fichier
		</button>*/}
	</div>);
}
