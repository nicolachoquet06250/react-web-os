import React from "react";
import { Window } from "../../components/Window/Window";
import { FaIcon, FaIconsType } from "../../components/FaIcon/FaIcon";

export const MessagesIcon = 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/IMessage_logo.svg/1200px-IMessage_logo.svg.png';

const MessagesTitle = () => (<>
	<span className={'emoji'}>
		<img src={MessagesIcon} alt={'messages icon'}
		     style={{ width: '15px', height: '15px', transform: 'translateY(2px)' }} />
	</span>

	<span> Messages </span>
</>);

export const Messages = ({ ...otherProps }) => {

	return (<Window bodyBackground={'black'}
	                headerBackground={'black'}
	                headerColor={'white'}
	                title={<MessagesTitle />}
	                minWidth={700} width={700}
	                {...otherProps}>
		<div style={{ height: '100%', color: 'white', display: 'flex', flexDirection: 'row' }}>
			<aside style={{ height: '100%', minWidth: '200px', borderRight: '1px solid white' }}>
				<ul style={{
					margin: 0,
					padding: '10px',
					paddingBottom: 0,
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'flex-start',
					alignItems: 'center',
					overflowX: 'hidden'
				}}>
					<li style={{
						display: 'flex',
						alignItems: 'center',
						height: '30px',
						border: '1px solid white',
						width: '100%',
						padding: '5px',
						borderRadius: '5px',
						backgroundColor: '#17CA38',
						color: 'black'
					}}>
						Yann Choquet
					</li>
				</ul>
			</aside>

			<main style={{
				height: '100%',
				flex: 1,
				overflow: 'hidden',
				overflowY: 'auto',
				display: 'flex',
				flexDirection: 'column'
			}}>
				<div style={{ height: 'calc(100% - 100px)', paddingLeft: '10px' }}>
					<div className={'you'} style={{ display: 'flex', justifyContent: 'flex-start' }}>
						<div className={"bubble"} style={{ maxWidth: '50%', minHeight: '50px', padding: '5px', margin: '5px', borderRadius: '5px', borderBottomLeftRadius: 0, backgroundColor: '#17CA38', color: 'black' }}>
							<span> Yann </span>

							<p style={{ fontSize: '12px', margin: 0 }}>
								Un message écrit par yann
							</p>
						</div>
					</div>

					<div className={'me'} style={{ display: 'flex', justifyContent: 'flex-end' }}>
						<div className={"bubble"} style={{ maxWidth: '50%', minHeight: '50px', padding: '5px', margin: '5px', borderRadius: '5px', borderBottomRightRadius: 0, backgroundColor: 'white', color: 'black' }}>
							<span> Moi </span>

							<p style={{ fontSize: '12px', margin: 0 }}>
								Un message écrit par moi
							</p>
						</div>
					</div>

					<div className={'you'} style={{ display: 'flex', justifyContent: 'flex-start' }}>
						<div className={"bubble"} style={{ maxWidth: '50%', minHeight: '50px', padding: '5px', margin: '5px', borderRadius: '5px', borderBottomLeftRadius: 0, backgroundColor: '#17CA38', color: 'black' }}>
							<span> Yann </span>

							<p style={{ fontSize: '12px', margin: 0 }}>
								Un message écrit par yann
							</p>
						</div>
					</div>

					<div className={'me'} style={{ display: 'flex', justifyContent: 'flex-end' }}>
						<div className={"bubble"} style={{ maxWidth: '50%', minHeight: '50px', padding: '5px', margin: '5px', borderRadius: '5px', borderBottomRightRadius: 0, backgroundColor: 'white', color: 'black' }}>
							<span> Moi </span>

							<p style={{ fontSize: '12px', margin: 0 }}>
								Un message écrit par moi
							</p>
						</div>
					</div>

					<div className={'you'} style={{ display: 'flex', justifyContent: 'flex-start' }}>
						<div className={"bubble"} style={{ maxWidth: '50%', minHeight: '50px', padding: '5px', margin: '5px', borderRadius: '5px', borderBottomLeftRadius: 0, backgroundColor: '#17CA38', color: 'black' }}>
							<span> Yann </span>

							<p style={{ fontSize: '12px', margin: 0 }}>
								Un message écrit par yann
							</p>
						</div>
					</div>

					<div className={'me'} style={{ display: 'flex', justifyContent: 'flex-end' }}>
						<div className={"bubble"} style={{ maxWidth: '50%', minHeight: '50px', padding: '5px', margin: '5px', borderRadius: '5px', borderBottomRightRadius: 0, backgroundColor: 'white', color: 'black' }}>
							<span> Moi </span>

							<p style={{ fontSize: '12px', margin: 0 }}>
								Un message écrit par moi
							</p>

							<p style={{ fontSize: '12px', margin: 0 }}>
								Un message écrit par moi
							</p>
						</div>
					</div>
				</div>

				<form style={{
					height: '100px',
					flex: 1,
					borderTop: '1px solid gray',
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center'
				}}>
					<textarea style={{
						maxHeight: 'calc(100% - 10px)',
						minHeight: '50%',
						resize: 'none',
						border: 'none',
						marginBottom: '5px',
						width: 'calc(100% - 6px)',
						backgroundColor: 'transparent',
						color: 'white',
						outline: 'none'
					}} placeholder={'Votre message ici...'} />

					<div style={{ width: 'calc(100% - 12px)', display: 'flex', justifyContent: 'flex-end' }}>
						<button type={'button'}
						        style={{
									cursor: 'pointer',
							        backgroundColor: 'transparent',
							        border: '1px solid white',
							        color: 'white',
							        borderRadius: '5px',
							        paddingTop: '2px',
							        paddingBottom: '2px'
								}}>
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
