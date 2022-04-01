import React from "react";
import { FaIcon, FaIconsType } from "../../components/FaIcon/FaIcon";
import { Window } from "../../components/Window/Window";
import { useStyle } from './style';
import { MonCVTitle } from './subcomponents';
import { VsCodeIcon } from '../VsCode/VsCode';

export const MonCVIcon = 'https://media-exp1.licdn.com/dms/image/C4E03AQEwtxo_iShUoQ/profile-displayphoto-shrink_200_200/0/1639727436609?e=1654128000&v=beta&t=7LZK63GBj8KWkE7gBalPM5SE21czYhIKuIu7vN7cmag';

export const MonCV = ({ ...otherProps }) => {
	const { monCVContainer, monCV, header, linksContainer, technicals_skills, experiences, projects, formations, badge } = useStyle();

	const header_data = {
		image: MonCVIcon,
		title: 'Nicolas Choquet',
		subTitle: 'Développeur Web Full-stack',
		links: [
			{
				icon: {
					type: FaIconsType.SOLID,
					icon: 'globe'
				},
				href: 'https://www.nicolaschoquet.fr'
			},
			{
				icon: {
					type: FaIconsType.SOLID,
					icon: 'globe'
				},
				href: 'https://webos.react.nicolaschoquet.fr'
			},
			{
				icon: {
					type: FaIconsType.BRANDS,
					icon: 'github'
				},
				href: 'https://github.com/nicolachoquet06250'
			}
		]
	};

	const skills = [
		{
			title: 'Programation web front',
			languages: [
				{
					title: 'JavaScript',
					frameworks: [
						{
							icon: {
								type: FaIconsType.BRANDS,
								icon: 'js'
							},
							title: 'Vanilla',
							version: 'ES6+'
						},
						{
							icon: {
								type: FaIconsType.BRANDS,
								icon: 'react'
							},
							title: 'React.js',
							version: 'v16+'
						},
						{
							icon: {
								type: FaIconsType.BRANDS,
								icon: 'vuejs'
							},
							title: 'Vue.js',
							version: 'v3+'
						},
					]
				},
				{
					title: 'TypeScript',
					frameworks: [
						{
							icon: {
								type: FaIconsType.BRANDS,
								icon: 'angular'
							},
							title: 'Angular',
							version: 'v10+'
						},
					]
				},
			]
		},
		{
			title: 'Programation web back',
			languages: [
				{
					title: 'PHP',
					version: 'v7/8',
					frameworks: [
						{
							icon: {
								type: FaIconsType.BRANDS,
								icon: 'laravel'
							},
							title: 'Laravel',
							version: 'v5+'
						},
						{
							icon: {
								type: FaIconsType.BRANDS,
								icon: 'symfony'
							},
							title: 'Symfony',
							version: 'v5+'
						},
					]
				},
				{
					title: 'Python',
					version: 'v3+',
					frameworks: [
						{
							icon: {
								type: FaIconsType.BRANDS,
								icon: 'python'
							},
							title: 'Django',
							version: 'v4+'
						}
					]
				},
				{
					title: 'JavaScript / TypeScript',
					frameworks: [
						{
							icon: {
								type: FaIconsType.BRANDS,
								icon: 'node'
							},
							title: 'Node.js',
							version: 'v10+'
						},
						{
							image: {
								src: 'https://cdn.iconscout.com/icon/free/png-256/deno-3629899-3031711.png',
								alt: 'icon deno.js',
								style: {
									width: '20px',
									height: '20px',
									marginRight: '10px'
								}
							},
							title: 'Deno.js',
							version: 'v1+'
						},
					]
				},
			]
		},
		{
			title: 'Programation mobile',
			subTitle: {
				label: 'Cross plateform'
			},
			languages: [
				{
					title: 'JavaScript',
					frameworks: [
						{
							title: 'Capacitor.js',
							image: {
								src: 'https://seeklogo.com/images/C/capacitor-logo-DF3634DD70-seeklogo.com.png',
								alt: 'icon capacitor.js',
								style: {
									width: '20px',
									height: '20px',
									marginRight: '10px'
								}
							},
							version: 'v3+'
						},
						{
							title: 'React Native',
							icon: {
								type: FaIconsType.BRANDS,
								icon: 'react'
							}
						}
					]
				}
			]
		},
		{
			title: 'Programation desktop',
			subTitle: {
				label: 'Cross plateform'
			},
			languages: [
				{
					title: 'JavaScript',
					frameworks: [
						{
							icon: {
								type: FaIconsType.SOLID,
								icon: 'atom'
							},
							title: 'Electron.js',
							version: 'v10+'
						}
					]
				}
			]
		},
		{
			title: 'Programation réalité virtuel web',
			subTitle: {
				label: 'Navigateurs web / Oculus / HTC Vive / ...',
				title: 'tous les casques de VR'
			},
			languages: [
				{
					title: 'JavaScript',
					frameworks: [
						{
							title: 'React 360',
							icon: {
								type: FaIconsType.BRANDS,
								icon: 'react'
							}
						},
						{
							title: 'Aframe.js',
							image: {
								src: 'https://aframe.io/images/blog/introducing-aframe.png',
								alt: 'icon aframe.js',
								style: {
									width: '15px',
									height: '15px',
									marginRight: '10px',
									borderRadius: '50px'
								}
							},
							version: 'v1+'
						}
					]
				}
			]
		},
		{
			title: 'Requêtage de bases de données',
			languages: [
				{
					title: 'SQL',
					frameworks: [
						{
							title: 'MySQL',
							image: {
								src: 'https://freepikpsd.com/file/2019/10/mysql-icon-png-4-Transparent-Images.png',
								alt: 'icon mysql',
								style: {
									width: '15px',
									height: '15px',
									marginRight: '10px'
								}
							}
						},
						{
							title: 'MariaDB',
							image: {
								src: 'https://freepikpsd.com/file/2019/10/mysql-icon-png-4-Transparent-Images.png',
								alt: 'icon mariadb',
								style: {
									width: '15px',
									height: '15px',
									marginRight: '10px'
								}
							}
						},
					]
				},
				{
					title: 'NoSQL',
					frameworks: [
						{
							title: 'MongoDB',
							image: {
								src: 'https://user-images.githubusercontent.com/11978772/40430921-73d53922-5e63-11e8-8dcd-1662136c3212.png',
								alt: 'icon mongodb',
								style: {
									width: '15px',
									height: '15px',
									marginRight: '10px'
								}
							}
						}
					]
				}
			]
		},
		{
			title: 'IDEs',
			languages: [
				{
					title: 'Microsoft',
					frameworks: [
						{
							title : 'VsCode',
							image: {
								src: VsCodeIcon,
								alt: 'icon vscode',
								style: {
									width: '15px',
									height: '15px',
									marginRight: '10px'
								}
							}
						}
					]
				},
				{
					title: 'JetBrain',
					frameworks: [
						{
							title: 'WebStorm',
							image: {
								src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/WebStorm_Icon.png/600px-WebStorm_Icon.png',
								alt: 'icon webstorm',
								style: {
									width: '15px',
									height: '15px',
									marginRight: '10px'
								}
							}
						},
						{
							title: 'PhpStorm',
							image: {
								src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/PhpStorm_Icon.png/600px-PhpStorm_Icon.png',
								alt: 'icon phpstorm',
								style: {
									width: '15px',
									height: '15px',
									marginRight: '10px'
								}
							}
						},
						{
							title: 'PyCharm',
							image: {
								src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/PyCharm_Icon.svg/512px-PyCharm_Icon.svg.png?20200803065702',
								alt: 'icon pycharm',
								style: {
									width: '15px',
									height: '15px',
									marginRight: '10px'
								}
							}
						}
					]
				}
			]
		}
	];

	return (<Window headerBackground={'black'}
	                headerColor={'white'}
	                minWidth={422} width={422}
	                title={<MonCVTitle />}
	                {...otherProps}>
		<div className={monCVContainer}>
			<div className={monCV}>
				<header className={header}>
					<div style={{ maxWidth: '200px' }}>
						<img src={header_data.image} alt={'photo de moi'} />
					</div>

					<div>
						<h1> {header_data.title} </h1>
						<p> {header_data.subTitle} </p>

						<div className={linksContainer}>
							{header_data.links.map((l, i) => (<span key={i}>
								<FaIcon type={l.icon.type} icon={l.icon.icon} />

								<a href={l.href} target={'_blank'}>
									{l.href}
								</a>
							</span>))}
						</div>
					</div>
				</header>

				{skills.map((s, i) =>
					(<section key={i} className={technicals_skills}>
						<h1> {s.title} </h1>

						{s.subTitle && (<p title={s.subTitle ?? false}> {s.subTitle.label} </p>)}

						<div>
							{s.languages.map((l, j) => (<div key={j}>
								<h2> {l.title} {l.version && (<span className={badge}> {l.version} </span>)} </h2>

								<ul>
									{l.frameworks.map((f, k) => (<li key={k}>
										{f.icon && (<FaIcon type={f.icon.type} icon={f.icon.icon} />)}

										{f.image && (<img src={f.image.src} alt={f.image.alt} style={f.image.style ?? false} />)}

										{f.title} {f.version && (<span className={badge}> {f.version} </span>)}
									</li>))}
								</ul>
							</div>))}
						</div>
					</section>))};

				{/*<section className={technicals_skills}>
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

				<section className={technicals_skills}>
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
										 alt={'icon deno.js'}
										 style={{ width: '20px', height: '20px', marginRight: '10px' }} />

									Deno <span className={badge}>v1+</span>
								</li>
							</ul>
						</div>
					</div>
				</section>

				<section className={technicals_skills}>
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

				<section className={technicals_skills}>
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

				<section className={technicals_skills}>
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

				<section className={technicals_skills}>
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

				<section className={technicals_skills}>
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
				</section>*/}

				<section className={experiences} />

				<section className={projects} />

				<section className={formations} />
			</div>
		</div>
	</Window>);
};
