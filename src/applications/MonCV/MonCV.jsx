import React from "react";
import { Window } from "../../components/Window/Window";
import { useStyle } from './style';
import { MonCVTitle } from './subcomponents';

export const MonCVIcon = 'https://media-exp1.licdn.com/dms/image/C4E03AQEwtxo_iShUoQ/profile-displayphoto-shrink_200_200/0/1639727436609?e=1654128000&v=beta&t=7LZK63GBj8KWkE7gBalPM5SE21czYhIKuIu7vN7cmag';

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
