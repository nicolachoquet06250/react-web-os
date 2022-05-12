import React, { useEffect, useState } from "react";
import { Window } from "../../components/Window/Window";
import { FaIcon, FaIconsType } from "../../components/FaIcon/FaIcon";
import { MessagesTitle, Message, BubbleMe, BubbleYou } from './subcomponents';
import { useStyle } from "./style";
import { useAdmin } from "./hooks/admin";
import { useWebsocket } from '../../hooks/utils/websocket';

export const MessagesIcon = 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/IMessage_logo.svg/1200px-IMessage_logo.svg.png';

const getAdminInterlocuters = () => JSON.parse(localStorage.getItem('messages-interlocuters') ?? '[]');

export const Messages = ({ ...otherProps }) => {
	const { appContainer, sidebar, main } = useStyle();
	const [admin] = useAdmin();
	const [interlocuers, setInterlocuters] = useState([]);
	const { message, error, closed } = useWebsocket('', null, false, admin);

	useEffect(() => {
		if (admin) {
			setInterlocuters(getAdminInterlocuters());
		} else {
			setInterlocuters(['Nicolas Choquet']);
		}
	}, [admin]);

	return (<Window bodyBackground={'black'}
	                headerBackground={'black'}
	                headerColor={'white'}
	                title={<MessagesTitle />}
	                minWidth={700} width={700}
	                {...otherProps}>
		<div className={appContainer}>
			<aside className={sidebar}>
				<ul>
					{interlocuers.map((i, index) => (<li key={index}>
						{i}
					</li>))}
				</ul>
			</aside>

			<main className={main}>
				<div>
					<BubbleYou user={'Yann'}>
						<Message>
							Un message écrit par yann
						</Message>
					</BubbleYou>

					<BubbleMe>
						<Message>
							Un message écrit par moi
						</Message>
					</BubbleMe>

					<BubbleYou user={'Yann'}>
						<Message>
							Un message écrit par yann
						</Message>
					</BubbleYou>

					<BubbleMe>
						<Message>
							Un message écrit par moi
						</Message>
					</BubbleMe>

					<BubbleYou user={'Yann'}>
						<Message>
							Un message écrit par yann
						</Message>
					</BubbleYou>

					<BubbleMe>
						<Message>
							Un message écrit par moi
						</Message>
					</BubbleMe>
				</div>

				<form>
					<textarea placeholder={'Votre message ici...'} />

					<div>
						<button type={'button'}>
							<FaIcon type={FaIconsType.SOLID} icon={'paper-plane'}
							        style={{ marginRight: '5px' }} />

							Envoyer
						</button>
					</div>
				</form>
			</main>
		</div>
	</Window>);
};
