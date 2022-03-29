import React from "react";
import { Window } from "../../components/Window/Window";
import { createUseStyles } from "react-jss";

const useStyle = createUseStyles({
	monCVContainer: {
		width: '100%',
		height: '100%',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		overflowY: 'auto',
		overflowX: 'hidden',
		backgroundColor: 'rgba(0, 0, 0, .5)',
		backdropFilter: 'blur(1.5rem)'
	},

	monCV: {
		maxWidth: '600px',
		width: '100%',
		minHeight: '100%',
		borderLeft: '1px solid black',
		borderRight: '1px solid black',
		backgroundColor: 'black'
	}
});

export const MonCVIcon = 'https://media-exp1.licdn.com/dms/image/C4E03AQEwtxo_iShUoQ/profile-displayphoto-shrink_200_200/0/1639727436609?e=1654128000&v=beta&t=7LZK63GBj8KWkE7gBalPM5SE21czYhIKuIu7vN7cmag';

const MonCVTitle = () => (<>
	<span className={'emoji'}>
		<img src={MonCVIcon} alt={'video reader icon'}
		     style={{ width: '15px', height: '15px', transform: 'translateY(2px)' }} />
	</span>

	<span> Mon CV </span>
</>);

export const MonCV = ({ ...otherProps }) => {
	const { monCVContainer, monCV } = useStyle();

	return (<Window headerBackground={'black'}
	                headerColor={'white'}
	                title={<MonCVTitle />}
	                {...otherProps}>
		<div className={monCVContainer}>
			<div className={monCV}>
				{/* temporaire pour tester l'affichage avec scroll */}
				{Array.from(new Array(50).keys()).map(i => (<br key={i} />))}
			</div>
		</div>
	</Window>);
};
