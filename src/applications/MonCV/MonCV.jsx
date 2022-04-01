import React from "react";
import { FaIcon, FaIconsType } from "../../components/FaIcon/FaIcon";
import { Window } from "../../components/Window/Window";
import { useStyle } from './style';
import { MonCVTitle } from './subcomponents';
import { VsCodeIcon } from '../VsCode/VsCode';

export const MonCVIcon = 'https://media-exp1.licdn.com/dms/image/C4E03AQEwtxo_iShUoQ/profile-displayphoto-shrink_200_200/0/1639727436609?e=1654128000&v=beta&t=7LZK63GBj8KWkE7gBalPM5SE21czYhIKuIu7vN7cmag';

export const MonCV = ({ ...otherProps }) => {
	const { monCVContainer, monCV, header, linksContainer, technicals_skils, experiences, projects, formations, badge } = useStyle();

	return (<Window headerBackground={'black'}
	                headerColor={'white'}
	                title={<MonCVTitle />}
	                {...otherProps}>
		<div className={monCVContainer}>
			<div className={monCV}>
				<header className={header}>
					<div style={{ maxWidth: '200px' }}>
						<img src={MonCVIcon} alt={'photo de moi'} />
					</div>

					<div>
						<h1> Nicolas Choquet </h1>
						<p> Développeur Web Full-stack </p>

						<div className={linksContainer}>
							<span>
								<FaIcon type={FaIconsType.SOLID} icon={'globe'} /> <a href="https://www.nicolaschoquet.fr">https://www.nicolaschoquet.fr</a>
							</span>

							<span>
								<FaIcon type={FaIconsType.SOLID} icon={'globe'} /> <a href="https://webos.react.nicolaschoquet.fr">https://webos.react.nicolaschoquet.fr</a>
							</span>
							
							<span>
								<FaIcon type={FaIconsType.BRANDS} icon={'github'} /> <a href="https://github.com/nicolachoquet06250">https://github.com/nicolachoquet06250</a>
							</span>
						</div>
					</div>
				</header>

				<section className={technicals_skils}>
					<h1> Programmation Web Front </h1>

					<div>
						<div>
							<h2> JavaScript </h2>

							<ul>
								<li>
									<FaIcon type={FaIconsType.BRANDS} icon={'js'} />

									Vanilla <span className={badge}>ES6+</span>
								</li>

								<li>
									<FaIcon type={FaIconsType.BRANDS} icon={'react'} />

									React.js <span className={badge}>v16+</span>
								</li>

								<li>
									<FaIcon type={FaIconsType.BRANDS} icon={'vuejs'} />

									Vue <span className={badge}>v3+</span>
								</li>
							</ul>
						</div>

						<div>
							<h2> TypeScript </h2>

							<ul>
								<li>
									<FaIcon type={FaIconsType.BRANDS} icon={'angular'} />

									Angular <span className={badge}>v10+</span>
								</li>
							</ul>
						</div>
					</div>
				</section>

				<section className={technicals_skils}>
					<h1> Programmation Web Back </h1>

					<div>
						<div>
							<h2> PHP <span className={badge}>v7/8</span> </h2>

							<ul>
								<li>
									<FaIcon type={FaIconsType.BRANDS} icon={'laravel'} />

									Laravel <span className={badge}>v5+</span>
								</li>

								<li>
									<FaIcon type={FaIconsType.BRANDS} icon={'symfony'} />

									Synfony <span className={badge}>v5+</span>
								</li>
							</ul>
						</div>

						<div>
							<h2> Python </h2>

							<ul>
								<li>
									<FaIcon type={FaIconsType.BRANDS} icon={'python'} />

									Django <span className={badge}>v4+</span>
								</li>
							</ul>
						</div>

						<div>
							<h2> JavaScript / TypeScript </h2>

							<ul>
								<li>
									<FaIcon type={FaIconsType.BRANDS} icon={'node'} />

									Node.js <span className={badge}>v10+</span>
								</li>
								
								<li>
									<img src={'https://cdn.iconscout.com/icon/free/png-256/deno-3629899-3031711.png'} 
										 alt={'icon deno.js'} style={{ width: '20px', height: '20px', marginRight: '10px' }} />

									Deno <span className={badge}>v1+</span>
								</li>
							</ul>
						</div>
					</div>
				</section>

				<section className={technicals_skils}>
					<h1> Programmation Mobile </h1>

					<p> Cross plateform </p>

					<div>
						<div>
							<h2> JavaScript </h2>

							<ul>
								<li>
									<img src={'https://seeklogo.com/images/C/capacitor-logo-DF3634DD70-seeklogo.com.png'} 
										 alt={'icon capacitor.js'} style={{ width: '20px', height: '20px', marginRight: '10px' }} />

									Capacitor.js <span className={badge}>v3+</span>
								</li>

								<li>
									<FaIcon type={FaIconsType.BRANDS} icon={'react'} />

									React Native
								</li>
							</ul>
						</div>
					</div>
				</section>

				<section className={technicals_skils}>
					<h1> Programmation Desktop </h1>

					<p> Cross plateform </p>

					<div>
						<div>
							<h2> JavaScript </h2>

							<ul>
								<li>
									<FaIcon type={FaIconsType.SOLID} icon={'atom'} />

									Electron.js <span className={badge}>v10+</span>
								</li>
							</ul>
						</div>
					</div>
				</section>

				<section className={technicals_skils}>
					<h1> Programmation Réalité virtuelle </h1>

					<p title={'tous les casques de VR'}> Navigateurs web / Oculus / HTC Vive / ... </p>

					<div>
						<div>
							<h2> JavaScript </h2>

							<ul>
								<li>
									<FaIcon type={FaIconsType.BRANDS} icon={'react'} />

									React 360
								</li>

								<li>
									<img src={'https://aframe.io/images/blog/introducing-aframe.png'} 
										 alt={'icon aframe.js'} style={{ width: '15px', height: '15px', marginRight: '10px', borderRadius: '50px' }} />

									AFRAME.js <span className={badge}>v1+</span>
								</li>
							</ul>
						</div>
					</div>
				</section>

				<section className={technicals_skils}>
					<h1> Requêtage de bases de données </h1>

					<div>
						<div>
							<h2> SQL </h2>

							<ul>
								<li>
									<img src={'https://freepikpsd.com/file/2019/10/mysql-icon-png-4-Transparent-Images.png'} 
										 alt={'icon MySQL'} style={{ width: '15px', height: '15px', marginRight: '10px' }} />

									MySQL 
								</li>

								<li>
									<img src={'https://freepikpsd.com/file/2019/10/mysql-icon-png-4-Transparent-Images.png'} 
										 alt={'icon MariaDB'} style={{ width: '15px', height: '15px', marginRight: '10px' }} />

									MariaDB
								</li>
							</ul>
						</div>

						<div>
							<h2> NoSQL </h2>

							<ul>
								<li>
									<img src={'https://user-images.githubusercontent.com/11978772/40430921-73d53922-5e63-11e8-8dcd-1662136c3212.png'} 
										 alt={'icon aframe.js'} style={{ width: '15px', height: '15px', marginRight: '10px' }} />

									MongoDB
								</li>
							</ul>
						</div>
					</div>
				</section>

				<section className={technicals_skils}>
					<h1> IDEs </h1>

					<div>
						<div>
							<h2> Microsoft </h2>

							<ul>
								<li>
									<img src={VsCodeIcon} 
										 alt={'icon MySQL'} style={{ width: '15px', height: '15px', marginRight: '10px' }} />

									VsCode
								</li>
							</ul>
						</div>

						<div>
							<h2> Jetbrains suite </h2>

							<ul>
								<li>
									<img src={'https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/WebStorm_Icon.png/600px-WebStorm_Icon.png'} 
										 alt={'icon MySQL'} style={{ width: '15px', height: '15px', marginRight: '10px' }} />

									WebStorm
								</li>

								<li> 
									<img src={'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/PhpStorm_Icon.png/600px-PhpStorm_Icon.png'} 
										 alt={'icon MySQL'} style={{ width: '15px', height: '15px', marginRight: '10px' }} />

									PhpStorm
								</li>

								<li> 
									<img src={'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/PyCharm_Icon.svg/512px-PyCharm_Icon.svg.png?20200803065702'} 
										 alt={'icon MySQL'} style={{ width: '15px', height: '15px', marginRight: '10px' }} />
								
									PyCharm
								</li>
							</ul>
						</div>
					</div>
				</section>

				<section className={experiences} />

				<section className={projects} />

				<section className={formations} />
			</div>
		</div>
	</Window>);
};
