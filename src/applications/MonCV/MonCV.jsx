import React from "react";
import { FaIcon, FaIconsType } from "../../components/FaIcon/FaIcon";
import { Window } from "../../components/Window/Window";
import { useStyle } from './style';
import { MonCVTitle } from './subcomponents';
import { VsCodeIcon } from '../VsCode/VsCode';

export const MonCVIcon = 'https://media-exp1.licdn.com/dms/image/C4E03AQEwtxo_iShUoQ/profile-displayphoto-shrink_200_200/0/1639727436609?e=1654128000&v=beta&t=7LZK63GBj8KWkE7gBalPM5SE21czYhIKuIu7vN7cmag';

export const MonCV = ({ ...otherProps }) => {
	const {
		monCVContainer, monCV,
		header, linksContainer,
		technicals_skills, experiences,
		projects, formations,
		badge, danger, success, card
	} = useStyle();

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
							{header_data.links.map((l, i) =>
								(<span key={i}>
									<FaIcon type={l.icon.type} icon={l.icon.icon} style={{ transform: 'translateY(4px)', marginRight: '5px' }} />

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

						{s.subTitle &&
							(<p title={s.subTitle ?? false}>
								{s.subTitle.label}
							</p>)}

						<div>
							{s.languages.map((l, j) =>
								(<div key={j}>
									<h2>
										{l.title}
										{l.version &&
											(<span className={badge}>
												{l.version}
											</span>)}
									</h2>

									<ul>
										{l.frameworks.map((f, k) =>
											(<li key={k}>
												{f.icon && (<FaIcon type={f.icon.type} icon={f.icon.icon} />)}

												{f.image &&
													(<img src={f.image.src}
													      alt={f.image.alt}
													      style={f.image.style ?? {}} />)}

												{f.title}

												{f.version &&
													(<span className={badge}>
														{f.version}
													</span>)}
											</li>))}
									</ul>
								</div>))}
						</div>
					</section>))}

				<section className={experiences}>
					<h1> Experiences </h1>

					<div>
						<div className={card}>
							<header>
								<img src={'data:image/png;base64,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'}
								     alt={'icon norsys'} style={{ borderRadius: '15px', width: '100px' }} />

								<div>
									<div className={'titles-container'}>
										<h2>
											Norsys

											<span className={badge}> CDI </span>
											<span className={badge + ' ' + success}> Actuel </span>
										</h2>

										<h3> Ingénieur en étude et développement </h3>
									</div>

									<span>
										<FaIcon type={FaIconsType.SOLID} icon={'location-dot'} />&nbsp;
										Sophia-Antipolis - Biot
									</span>

									<span>
										<FaIcon type={FaIconsType.SOLID} icon={'hourglass-start'} /> 2019&nbsp;
										<FaIcon type={FaIconsType.SOLID} icon={'hourglass'} /> En cours
									</span>
								</div>
							</header>

							<main>
								<h2> Missions </h2>

								<ul>
									<li>
										<div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
											<img src={'https://lafibre.info/images/orange/logo_orange_miniatures.png'}
											     alt={'icon orange'}
												 style={{ width: '50px', height: '50px' }}/>

											<h3> Projet ATOL - Orange </h3>
										</div>

										<div>
											<span className={badge}>docker</span>
											<span className={badge}>PHP 7.4</span>
											<span className={badge}>jQuery</span>
											<span className={badge}>redis</span>
										</div>

										<span style={{ display: 'inline-block', paddingLeft: '10px', marginTop: '10px' }}>
											<FaIcon type={FaIconsType.SOLID} icon={'hourglass-start'} /> 2019&nbsp;
											<FaIcon type={FaIconsType.SOLID} icon={'hourglass'} /> En cours
										</span>

										<div>
											<FaIcon type={FaIconsType.SOLID} icon={'globe'}
											        style={{ marginRight: '10px', transform: 'translateY(4px)' }} />

											<a href={'https://tester-depanner-vos-services.orange.fr'} target={'_blank'}>
												https://tester-depanner-vos-services.orange.fr
											</a>
										</div>

										<p style={{ marginRight: '20px' }}>
											ATOL signifit: <blockquote style={{ fontStyle: 'italic' }}>Assistance Technique OnLine.</blockquote>
											Le but de cette mission est de maintenir l'application
											en répondant aux besoins métiers.
										</p>
									</li>
								</ul>
							</main>
						</div>

						<div className={card}>
							<header>
								<img src={'https://www.ordissinaute.fr/sites/default/files/styles/full_new_main_no_crop/public/field/image/doctissimo-logo-carre1.jpg?itok=72nCMJts'}
								     alt={'icon doctissimo'} style={{ borderRadius: '15px', width: '100px' }} />

								<div>
									<div className="titles-container">
										<h2>
											Doctissimo

											<span className={badge}> Contrat pro </span>
										</h2>

										<h3>
											Développeur PHP
										</h3>
									</div>

									<span> <FaIcon type={FaIconsType.SOLID} icon={'location-dot'} /> Sophia-Antipolis </span>

									<span>
										<FaIcon type={FaIconsType.SOLID} icon={'hourglass-start'} /> 2017&nbsp;
										<FaIcon type={FaIconsType.SOLID} icon={'hourglass-end'} /> 2019
									</span>
								</div>
							</header>

							<div>
								<FaIcon type={FaIconsType.SOLID} icon={'globe'}
								        style={{ marginRight: '10px', transform: 'translateY(4px)' }} />

								<a href={'https://tester-depanner-vos-services.orange.fr'} target={'_blank'}>
									https://tester-depanner-vos-services.orange.fr
								</a>
							</div>

							<main>
								<ul>
									<li>
										<p style={{ marginRight: '20px' }}>
											Chez Doctissimo, je contribuais au développement
											du forum et de la partie réseau social du site et de celui ses client comme
											<strong> Caradisiac</strong> ou <strong>Développez.net</strong>
										</p>
									</li>
								</ul>
							</main>
						</div>

						<div className={card}>
							<header>
								<img src={'https://www.piscine-clic.com/img/piscine-clic-logo.svg'}
								     alt={'icon piscine clic'} style={{ borderRadius: '15px', width: '100px' }} />

								<div>
									<div className="titles-container">
										<h2>
											Ovadys / Piscine Clic

											<span className={badge}> Contrat pro </span>

											<span className={badge + ' ' + danger}> fermé </span>
										</h2>

										<h3>
											Développeur PHP
										</h3>
									</div>

									<span>
										<FaIcon type={FaIconsType.SOLID} icon={'location-dot'} /> Antibes
									</span>

									<span>
										<FaIcon type={FaIconsType.SOLID} icon={'hourglass-start'} /> 2015&nbsp;
										<FaIcon type={FaIconsType.SOLID} icon={'hourglass-end'} /> 2017
									</span>
								</div>
							</header>

							<main>
								<ul>
									<li>
										<p style={{ marginRight: '20px' }}>
											Chez Ovadys, je devais développer un CRM pour la gestion des clients,
											des conversations avec ces client ( peu impote le type de conversation ),
											ainsi que l'hystorique des appels et le sujet de ces appels.
										</p>
									</li>
								</ul>
							</main>
						</div>
					</div>
				</section>

				<section className={projects}>
					<h1> Projets </h1>

					<div>
						<ul>
							<li>
								<h4 style={{ margin: 0 }}>
									Système d'exploitation web
									<span className={badge}>
										<FaIcon type={FaIconsType.BRANDS} icon={'react'} style={{ marginRight: '5px' }} />
										React.js
									</span>
									<span className={badge}>
										<FaIcon type={FaIconsType.BRANDS} icon={'windows'} style={{ marginRight: '5px' }} />
										Windows 10
									</span>
								</h4>

								<h5 style={{ marginTop: '10px', marginBottom: '10px' }}>Inspiration du disign windows 10</h5>

								<span style={{ fontSize: '12px' }}>
									<FaIcon type={FaIconsType.SOLID} icon={'hourglass-start'} /> Févr. 2022&nbsp;
									<FaIcon type={FaIconsType.SOLID} icon={'hourglass'} /> En cours
								</span>

								<div>
									<FaIcon type={FaIconsType.SOLID} icon={'globe'} style={{ marginRight: '10px' }} />
									<a href={window.location.href} target={'_blank'}>{window.location.href}</a>
								</div>
							</li>

							<li>
								<h4 style={{ marginBottom: '10px' }}>
									Editeur visuel
									<span className={badge}>
										<FaIcon type={FaIconsType.BRANDS} icon={'react'} style={{ marginRight: '5px' }} /> React.js
									</span>
								</h4>

								<span style={{ fontSize: '12px' }}>
									<FaIcon type={FaIconsType.SOLID} icon={'hourglass-start'} /> Déc. 2021&nbsp;
									<FaIcon type={FaIconsType.SOLID} icon={'hourglass-end'} /> Févr. 2022
								</span>

								<div>
									<FaIcon type={FaIconsType.SOLID} icon={'globe'} style={{ marginRight: '10px' }} />
									<a href={'https://visual-editor.react.nicolaschoquet.fr'} target={'_blank'}>
										https://visual-editor.react.nicolaschoquet.fr
									</a>
								</div>
							</li>

							<li>
								<h4 style={{ marginBottom: '10px' }}>
									Editeur visuel
									<span className={badge}>
										<FaIcon type={FaIconsType.BRANDS} icon={'vuejs'} style={{ marginRight: '5px' }} /> Vue.js
									</span>
								</h4>

								<span style={{ fontSize: '12px' }}>
									<FaIcon type={FaIconsType.SOLID} icon={'hourglass-start'} /> Déc. 2021&nbsp;
									<FaIcon type={FaIconsType.SOLID} icon={'hourglass-end'} /> Févr. 2022
								</span>

								<div>
									<FaIcon type={FaIconsType.SOLID} icon={'globe'} style={{ marginRight: '10px' }} />
									<a href={'https://visual-editor.vue.nicolaschoquet.fr'} target={'_blank'}>
										https://visual-editor.vue.nicolaschoquet.fr
									</a>
								</div>
							</li>

							<li>
								<h4 style={{ marginBottom: 0 }}>
									Système d'exploitation web
									<span className={badge}>
										<FaIcon type={FaIconsType.BRANDS} icon={'vuejs'} style={{ marginRight: '5px' }} /> Vue.js
									</span>
									<span className={badge}>
										<FaIcon type={FaIconsType.BRANDS} icon={'apple'} style={{ marginRight: '5px' }} />
										MacOS
									</span>
								</h4>

								<h5 style={{ marginTop: '10px', marginBottom: '10px' }}>Inspiration du disign MacOS Big Sur</h5>

								<span style={{ fontSize: '12px' }}>
									<FaIcon type={FaIconsType.SOLID} icon={'hourglass-start'} /> Nov. 2021&nbsp;
									<FaIcon type={FaIconsType.SOLID} icon={'hourglass'} /> En cours
								</span>

								<div>
									<FaIcon type={FaIconsType.SOLID} icon={'globe'} style={{ marginRight: '10px' }} />
									<a href={'https://www.nicolaschoquet.fr'} target={'_blank'}>
										https://www.nicolaschoquet.fr
									</a>
								</div>
							</li>
						</ul>
					</div>
				</section>

				<section className={formations} />
			</div>
		</div>
	</Window>);
};
