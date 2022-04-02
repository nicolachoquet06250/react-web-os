import React, { Fragment, useCallback, useEffect, useRef, useState } from "react";
import { FaIcon, FaIconsType } from "../../components/FaIcon/FaIcon";
import { Window } from "../../components/Window/Window";
import { useStyle } from './style';
import { MonCVTitle, StarNotation } from './subcomponents';
import { VsCodeIcon } from '../VsCode/VsCode';
import android from './assets/logo-android.png';
import angular from './assets/logo-angular.png';
import capacitor from './assets/logo-capacitor.png';
import deno from './assets/logo-deno.png';
import electron from './assets/logo-electron.png';
import ionic from './assets/logo-ionic.png';
import js from './assets/logo-js.png';
import laravel from './assets/logo-laravel.png';
import node from './assets/logo-node.png';
import php from './assets/logo-php.png';
import react from './assets/logo-react.png';
import symfony from './assets/logo-symfony.png';
import ts from './assets/logo-ts.png';
import vue from './assets/logo-vue.png';
import { useScroll } from "react-use";

export const MonCVIcon = 'https://media-exp1.licdn.com/dms/image/C4E03AQEwtxo_iShUoQ/profile-displayphoto-shrink_200_200/0/1639727436609?e=1654128000&v=beta&t=7LZK63GBj8KWkE7gBalPM5SE21czYhIKuIu7vN7cmag';

export const MonCV = ({ ...otherProps }) => {
	/**
	 * @type {React.MutableRefObject<HTMLDivElement>}
	 */
	const body = useRef();
	const containerRef = useRef(null);
	const [sideWidth, setSideWidth] = useState(0);
	const [windowWidth, setWindowWidth] = useState(0);
	const [rotation, setRotation] = useState(0);
	const [githubAccountData, setGithubAccountData] = useState(null);
	const { y: scrollY } = useScroll(containerRef);

	const {
		monCVContainer, monCV,
		header, linksContainer,
		technicals_skills, experiences,
		projects, formations,
		badge, danger, success,
		card, side, hobbies
	} = useStyle({ sideWidth, rotation });

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
					icon: 'linkedin'
				},
				href: 'https://www.linkedin.com/in/nicolas-choquet-23323993/'
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
							version: 'ES6+',
							note: 4.5
						},
						{
							icon: {
								type: FaIconsType.BRANDS,
								icon: 'react'
							},
							title: 'React.js',
							version: 'v16+',
							note: 4
						},
						{
							icon: {
								type: FaIconsType.BRANDS,
								icon: 'vuejs'
							},
							title: 'Vue.js',
							version: 'v3+',
							note: 4
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
							version: 'v10+',
							note: 3
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
					version: 'v8.1',
					frameworks: [
						{
							icon: {
								type: FaIconsType.BRANDS,
								icon: 'php'
							},
							title: 'From Scratch',
							version: 'v5+',
							note: 4.5
						},
						{
							icon: {
								type: FaIconsType.BRANDS,
								icon: 'laravel'
							},
							title: 'Laravel',
							version: 'v5+',
							note: 4
						},
						{
							icon: {
								type: FaIconsType.BRANDS,
								icon: 'symfony'
							},
							title: 'Symfony',
							version: 'v5+',
							note: 3
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
							version: 'v4+',
							note: 4.5
						}
					]
				},
				{
					title: 'JavaScript',
					frameworks: [
						{
							icon: {
								type: FaIconsType.BRANDS,
								icon: 'node'
							},
							title: 'Node.js',
							version: 'v10+',
							note: 4.5
						},
					]
				},
				{
					title: 'TypeScript',
					frameworks: [
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
							version: 'v1+',
							note: 3
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
							version: 'v3+',
							note: 3
						},
						{
							title: 'React Native',
							icon: {
								type: FaIconsType.BRANDS,
								icon: 'react'
							},
							note: 4
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
							version: 'v10+',
							note: 4
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
							},
							note: 3
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
							version: 'v1+',
							note: 4
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
							},
							note: 2
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
							},
							note: 2
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
							},
							note: 3
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
	const proExperiences = [
		{
			title: {
				title: 'Norsys',
				badges: [
					{
						label: 'CDI'
					},
					{
						label: 'actuel',
						classes: success
					}
				]
			},
			image: {
				src: 'data:image/png;base64,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',
				alt: 'icon Norsys',
				style: { borderRadius: '15px', width: '100px' }
			},
			subTitle: 'Ingénieur en étude et développement',
			location: 'Sophia-Antipolis - Biot',
			time: {
				start: '2019',
				end: false
			},
			missions: [
				{
					title: 'Projet ATOL - Orange',
					badges: [
						{
							icon: {
								type: FaIconsType.BRANDS,
								icon: 'docker'
							},
							label: 'docker'
						},
						{
							icon: {
								type: FaIconsType.BRANDS,
								icon: 'php'
							},
							label: 'PHP 7.4'
						},
						{
							icon: {
								type: FaIconsType.BRANDS,
								icon: 'js-square'
							},
							label: 'jQuery'
						},
						{
							label: 'redis'
						},
					],
					image: {
						src: 'https://lafibre.info/images/orange/logo_orange_miniatures.png',
						alt: 'icon Orange',
						style: { width: '50px', height: '50px' }
					},
					time: {
						start: '2019',
						end: false
					},
					link: 'https://tester-depanner-vos-services.orange.fr',
					description: {
						described: 'ATOL',
						description: 'Assistance Technique OnLine.'
					},
					text: 'Le but de cette mission est de maintenir l\'application en répondant aux besoins métiers.'
				}
			]
		},
		{
			title: {
				title: 'Doctissimo',
				badges: [
					{
						label: 'Contrat pro'
					}
				]
			},
			subTitle: 'Développeur PHP',
			image: {
				src: 'https://www.ordissinaute.fr/sites/default/files/styles/full_new_main_no_crop/public/field/image/doctissimo-logo-carre1.jpg?itok=72nCMJts',
				alt: 'icon Doctissimo',
				style: { borderRadius: '15px', width: '100px' }
			},
			location: 'Sophia-Antipolis',
			time: {
				start: '2017',
				end: '2019'
			},
			badges: [
				{
					icon: {
						type: FaIconsType.BRANDS,
						icon: 'docker'
					},
					label: 'docker'
				},
				{
					icon: {
						type: FaIconsType.BRANDS,
						icon: 'php'
					},
					label: 'PHP 7.4'
				},
				{
					icon: {
						type: FaIconsType.BRANDS,
						icon: 'js-square'
					},
					label: 'jQuery'
				},
				{
					icon: {
						type: FaIconsType.BRANDS,
						icon: 'amazon'
					},
					label: 'elastic-search'
				},
				{
					icon: {
						type: FaIconsType.BRANDS,
						icon: 'amazon'
					},
					label: 'aws'
				},
				{
					image: {
						src: 'https://freepikpsd.com/file/2019/10/mysql-icon-png-4-Transparent-Images.png',
						alt: 'icon mysql',
						style: { width: '15px', height: '15px', marginRight: '5px' }
					},
					label: 'mysql'
				}
			],
			link: 'https://forum.doctissimo.fr',
			text: <>
				Chez Doctissimo, je contribuais au développement
				du forum et de la partie réseau social du site
				et de celui ses client comme <b>Caradisiac</b> ou <b>Développez.net</b>
			</>
		},
		{
			title: {
				title: 'Ovadys / Piscine Clic',
				badges: [
					{
						label: 'Contrat pro'
					},
					{
						label: 'fermé',
						classes: danger
					}
				]
			},
			subTitle: 'Développeur PHP',
			image: {
				src: 'https://www.piscine-clic.com/img/piscine-clic-logo.svg',
				alt: 'icon Piscine Clic',
				style: { borderRadius: '15px', width: '100px' }
			},
			location: 'Sophia-Antipolis - Antibes',
			time: {
				start: '2015',
				end: '2017'
			},
			badges: [
				{
					icon: {
						type: FaIconsType.BRANDS,
						icon: 'php'
					},
					label: 'PHP 5'
				},
				{
					icon: {
						type: FaIconsType.BRANDS,
						icon: 'js-square'
					},
					label: 'jQuery'
				},
				{
					image: {
						src: 'https://freepikpsd.com/file/2019/10/mysql-icon-png-4-Transparent-Images.png',
						alt: 'icon mysql',
						style: { width: '15px', height: '15px', marginRight: '5px' }
					},
					label: 'mysql'
				}
			],
			text: `Chez Ovadys, je devais développer un CRM en interne pour reconnaitre les clients 
			lorsequ'ils appelaient, avoir l'historique des appels (avec le sujet et le temps des l'appel), 
			des mails, ainsi que toutes les informations client qui pouvaient être importées depuis 
			une base de donnée prestashop.`
		}
	];
	const personalProjects = [
		{
			title: `Système d'exploitation web`,
			subTitle: 'Inspiration du design Windows 10',
			time: {
				start: 'Févr. 2022',
				end: false
			},
			link: window.location.href,
			badges: [
				{
					icon: {
						type: FaIconsType.BRANDS,
						icon: 'react'
					},
					label: 'React.js'
				},
				{
					icon: {
						type: FaIconsType.BRANDS,
						icon: 'windows'
					},
					label: 'Windows 10'
				}
			]
		},
		{
			title: `Editeur visuel`,
			time: {
				start: 'Déc. 2021',
				end: 'Févr. 2022'
			},
			link: 'https://visual-editor.react.nicolaschoquet.fr',
			badges: [
				{
					icon: {
						type: FaIconsType.BRANDS,
						icon: 'react'
					},
					label: 'React.js'
				}
			]
		},
		{
			title: `Editeur visuel`,
			time: {
				start: 'Déc. 2021',
				end: 'Févr. 2022'
			},
			link: 'https://visual-editor.vue.nicolaschoquet.fr',
			badges: [
				{
					icon: {
						type: FaIconsType.BRANDS,
						icon: 'vuejs'
					},
					label: 'Vue.js'
				}
			]
		},
		{
			title: `Système d'exploitation web`,
			time: {
				start: 'Nov. 2021',
				end: false
			},
			link: 'https://www.nicolaschoquet.fr',
			badges: [
				{
					icon: {
						type: FaIconsType.BRANDS,
						icon: 'vuejs'
					},
					label: 'Vue.js'
				},
				{
					label: 'IndexedDB'
				},
				{
					icon: {
						type: FaIconsType.BRANDS,
						icon: 'apple'
					},
					label: 'MacOS'
				},
			]
		},
	];
	const myFormations = [
		{
			image: {
				src: 'data:image/jpeg;base64,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',
				alt: 'icon CampusID'
			},
			title: 'Master SDS',
			badges: [
				{
					label: 'Software Development Specialist'
				},
				{
					label: 'Bac +5'
				}
			],
			location: 'CampusID - Sophia-Antipolis',
			time: {
				start: '2017',
				end: '2019'
			}
		},
		{
			image: {
				src: 'data:image/jpeg;base64,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',
				alt: 'icon CampusID'
			},
			title: 'Bachelor SDS',
			badges: [
				{
					label: 'Software Development Specialist'
				},
				{
					label: 'Bac +3'
				}
			],
			location: 'CampusID - Sophia-Antipolis',
			time: {
				start: '2014',
				end: '2017'
			}
		},
		{
			image: {
				src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwyua5x9_KcmwUmewXxjsab5vLMVYR9HoTMA&usqp=CAU',
				alt: 'icon Lycée Jules Ferry'
			},
			title: 'Bac STI2D - Option SIN',
			badges: [
				{
					label: `Sciences et Technologies de l'Industrie et du Développement Durable`
				},
				{
					label: `Système d'Information et Numérique`
				},
				{
					label: 'Bac'
				}
			],
			location: 'Lycée Jules Ferry - Cannes',
			time: {
				start: '2013',
				end: '2014'
			}
		},
	];
	const hobbiesCategories = [
		{
			title: 'Technologie',
			hobbies: [
				{
					label: 'Programmation'
				},
				{
					label: 'Veille technologique'
				},
				{
					label: 'Réalité virtuelle',
					badges: ['VR']
				},
				{
					label: 'Réalité augmentée',
					badges: ['AR']
				}
			]
		},
		{
			title: 'Art',
			hobbies: [
				{
					label: 'Dessin'
				},
				{
					label: 'Peinture'
				},
				{
					label: 'Architecture'
				}
			]
		},
		{
			title: 'Sport',
			badges: ['amateur'],
			hobbies: [
				{
					label: 'Natation'
				},
				{
					label: 'Badminton'
				},
				{
					label: 'Ping-Pong'
				}
			]
		},
		{
			title: 'Sciences',
			hobbies: [
				{
					label: 'Astronomie'
				},
				{
					label: 'Paléontologie'
				},
				{
					label: 'Archéologie'
				}
			]
		},
		{
			title: 'Autres',
			hobbies: [
				{
					label: 'Théâtre'
				},
				{
					label: 'Voyages',
					badges: ['Croisières']
				},
				{
					label: 'Karaokés',
					badges: [`Keen'V`, `Ben l'oncle soul`, 'Michel Delpech']
				},
				{
					label: 'Cinéma',
					badges: ['Super-Héros', 'Science-fiction']
				},
				{
					label: 'Musique',
					badges: ['Rap', 'Pop', 'R&B', 'Soul', 'Reggae']
				}
			]
		}
	];
	const langes = [
		{
			label: 'Français',
			note: 4,
			badges: ['natale']
		},
		{
			label: 'Anglais',
			note: 3
		}
	];

	useEffect(() => {
		setRotation(scrollY / 10);
	}, [scrollY]);

	const onResize = useCallback(() => {
		const bodyWidth = body.current.offsetWidth;
		setSideWidth(((windowWidth - bodyWidth) / 2));
	}, [windowWidth]);

	useEffect(() => {
		onResize();

		window.addEventListener('resize', onResize);

		return () => {
			window.removeEventListener('resize', onResize);
		}
	}, [windowWidth]);

	useEffect(() => {
		fetch('https://api.github.com/users/nicolachoquet06250', {
			method: 'get',
		}).then(r => r.json())
			.then(json => {
				console.log(json);

				setGithubAccountData({
					avatar: json.avatar_url,
					bio: json.bio,
					url: json.html_url,
					name: json.name,
					public_repos: json.public_repos
				});
			});
	}, []);

	return (<Window headerBackground={'black'}
	                headerColor={'white'}
	                minWidth={422} width={422}
	                title={<MonCVTitle />}
	                onResize={w => setWindowWidth(w)}
	                {...otherProps}>
		<div className={monCVContainer} ref={containerRef}>
			<div className={side}>
				<div>
					<img src={android} alt={'logo android'} style={{ height: 'auto' }} />
				</div>

				<div>
					<img src={angular} alt={'logo angular'} style={{ height: 'auto' }} />
				</div>

				<div>
					<img src={capacitor} alt={'logo capacitor'} style={{ height: 'auto' }} />
				</div>

				<div>
					<img src={deno} alt={'logo deno'} style={{ height: 'auto' }} />
				</div>

				<div>
					<img src={electron} alt={'logo electron'} style={{ height: 'auto' }} />
				</div>

				<div>
					<img src={ionic} alt={'logo ionic'} style={{ height: 'auto' }} />
				</div>

				<div>
					<img src={js} alt={'logo js'} style={{ height: 'auto' }} />
				</div>
			</div>

			<div ref={body} className={monCV}>
				<header className={header}>
					<div style={{ maxWidth: '200px' }}>
						<img src={header_data.image} alt={'photo de moi'} />
					</div>

					<div>
						<h1> {header_data.title} </h1>
						<p> {header_data.subTitle} </p>

						<div>
							<FaIcon type={FaIconsType.SOLID} icon={'car'}
									style={{ marginRight: '5px' }} />

							Permis B
						</div>

						<div>
							<FaIcon type={FaIconsType.SOLID} icon={'cake-candles'}
									style={{ marginRight: '5px' }} />

							21/07/1995
						</div>

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

				<div style={{ width: '100%', display: 'flex', flexDirection: 'column' }}>
					{githubAccountData &&
						(<a href={githubAccountData.url} target={'_blank'} style={{ textDecoration: 'none', color: 'white' }}>
							<div style={{width: 'calc(100% - 10px)', display: 'flex', flexDirection: 'column', border: '1px solid white', borderRadius: '5px' }}>
								<div style={{ display: 'flex', flexDirection: 'row' }}>
									<div style={{ maxWidth: '100px', display: 'flex', justifyContent: 'flex-start', alignItems: 'flex-start' }}>
										<img src={githubAccountData.avatar} alt={'github account avatar'}
										     style={{ height: 'min-content', borderBottomRightRadius: '5px' }} />
									</div>

									<div style={{ paddingLeft: '10px' }}>
										<h4 style={{ margin: 0 }}>{githubAccountData.name}</h4>
										<p style={{ maxWidth: '400px' }}>{githubAccountData.bio.split('\r\n').map((c, i) =>
											(<Fragment key={i}>{c}<br /></Fragment>))}</p>
									</div>
								</div>

								<div>
									<span style={{ paddingLeft: '5px' }}>
										<FaIcon type={FaIconsType.BRANDS} icon={'github'} style={{ marginRight: '5px' }} />

										{githubAccountData.public_repos}
									</span>
								</div>
							</div>
						</a>)}
				</div>

				<section className={technicals_skills}>
					<h1> Compétences techniques </h1>

					<ul>
						{skills.map((s, i) =>
							(<li key={i}>
								<div className={card}>
									<h2> {s.title} </h2>

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
															<div>
																{f.icon &&
																	(<FaIcon type={f.icon.type} icon={f.icon.icon} />)}

																{f.image &&
																	(<img src={f.image.src}
																	      alt={f.image.alt}
																	      style={f.image.style ?? {}} />)}

																{f.title}

																{f.version &&
																	(<span className={badge}>
																		{f.version}
																	</span>)}
															</div>
															{f.note && (<p>
																<StarNotation note={f.note}/>
															</p>)}
														</li>))}
												</ul>
											</div>))}
									</div>
								</div>
							</li>))}
					</ul>
				</section>

				<section className={experiences}>
					<h1> Experiences </h1>

					<div>
						<ul>
							{proExperiences.map((e, i) =>
								(<li key={i}>
									<div className={card}>
										<header>
											<img src={e.image.src} alt={e.image.alt} style={e.image.style ?? {}} />

											<div>
												<div className={'titles-container'}>
													<h2>
														{e.title.title}

														{e.title.badges && e.title.badges.map((b, j) =>
															(<span key={j} className={badge + ' ' + (b.classes ?? '')}>
																{b.icon &&
																	(<FaIcon type={b.icon.type} icon={b.icon.icon} />)}
																{b.image &&
																	(<img src={b.image.src} alt={b.image.alt}
																	      style={b.image.style ?? {}} />)}

																{b.label}
															</span> ))}
													</h2>

													{e.subTitle && (<h3> {e.subTitle} </h3>)}
												</div>

												<span>
													<FaIcon type={FaIconsType.SOLID} icon={'location-dot'} />&nbsp;
													{e.location}
												</span>

												<span>
													<FaIcon type={FaIconsType.SOLID} icon={'hourglass-start'} /> {e.time.start}&nbsp;
													<FaIcon type={FaIconsType.SOLID} icon={`hourglass${e.time.end ? '-end' : ''}`} /> {e.time.end ? e.time.end : 'En cours'}
												</span>

												{e.badges && (<span style={{ display: 'flex', flexWrap: 'wrap' }}>
													{e.badges.map((b, j) =>
														(<span key={j} className={badge} style={{ display: 'flex', marginTop: '2px' }}>
															{b.image &&
																(<img src={b.image.src} alt={b.image.alt}
																      style={b.image.style ?? {}} />)}
															{b.icon &&
																(<FaIcon type={b.icon.type} icon={b.icon.icon}
																         style={{ marginRight: '5px' }} />)}

															{b.label}
														</span>))}
												</span>)}
											</div>
										</header>

										{e.link &&
											(<div style={{ textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}>
												<FaIcon type={FaIconsType.SOLID} icon={'globe'}
												        style={{ marginRight: '10px', transform: 'translateY(4px)' }} />

												<a href={e.link} target={'_blank'}>{e.link}</a>
											</div>)}

										<main>
											{e.missions &&
												(<>
													<h2> Missions </h2>

													<ul>
														{e.missions.map((m, j) =>
															(<li key={j}>
																<div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
																	<img src={m.image.src} alt={m.image.alt} style={m.image.style ?? {}} />

																	<h3>{m.title}</h3>
																</div>

																{m.badges &&
																	(<div>
																		{m.badges.map((b, k) =>
																			(<span key={k} className={badge}>
																				{b.image &&
																					(<img src={b.image.src} alt={b.image.alt}
																					      style={b.image.style ?? {}} />)}
																				{b.icon &&
																					(<FaIcon type={b.icon.type} icon={b.icon.icon}
																					         style={{ marginRight: '5px' }} />)}

																				{b.label}
																			</span>))}
																	</div>)}

																<span style={{ display: 'inline-block', paddingLeft: '10px', marginTop: '10px' }}>
																	<FaIcon type={FaIconsType.SOLID} icon={'hourglass-start'} /> {m.time.start}&nbsp;
																	<FaIcon type={FaIconsType.SOLID} icon={`hourglass${m.time.end ? '-end' : ''}`} /> {m.time.end ? m.time.end : 'En cours'}
																</span>

																{m.link &&
																	(<div style={{ textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}>
																		<FaIcon type={FaIconsType.SOLID} icon={'globe'}
																		        style={{ marginRight: '10px', transform: 'translateY(4px)' }} />

																		<a href={m.link} target={'_blank'}>{m.link}</a>
																	</div>)}

																{m.description &&
																	(<dl style={{ marginTop: '10px' }}>
																		<dt style={{ fontWeight: 'bold' }}>
																			{m.description.described}
																		</dt>

																		<dd style={{ fontStyle: 'italic' }}>
																			{m.description.description}
																		</dd>
																	</dl>)}

																{m.text &&
																	(<p style={{ marginRight: '20px' }}>
																		{m.text}
																	</p>)}
															</li>))}
													</ul>
												</>)}

											{e.text &&
												(<ul>
													<li>
														<p style={{ marginRight: '20px' }}>
															{e.text}
														</p>
													</li>
												</ul>)}
										</main>
									</div>
								</li>))}
						</ul>
					</div>
				</section>

				<section className={projects}>
					<h1> Projets </h1>

					<div>
						<ul>
							{personalProjects.map((p, i) =>
								(<li key={i}>
									<h4 style={p.subTitle ? { margin: 0 } : { marginBottom: '10px' }}>
										{p.title}

										{p.badges &&
											p.badges.map((b, j) =>
												(<span key={j} className={badge}>
													{b.icon &&
														(<FaIcon type={b.icon.type} icon={b.icon.icon}
												                 style={{marginRight: '5px'}}/>)}

													{b.label}
												</span>))}
									</h4>

									{p.subTitle &&
										(<h5 style={{ marginTop: '10px', marginBottom: '10px' }}>{p.subTitle}</h5>)}

									<span style={{ fontSize: '12px' }}>
										<FaIcon type={FaIconsType.SOLID} icon={'hourglass-start'} /> {p.time.start}&nbsp;
										<FaIcon type={FaIconsType.SOLID} icon={`hourglass${p.time.end ? '-end' : ''}`} /> {p.time.end ? p.time.end : 'En cours'}
									</span>

									{p.link &&
										(<div style={{ textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}>
											<FaIcon type={FaIconsType.SOLID} icon={'globe'}
											        style={{marginRight: '10px', transform: 'translateY(4px)'}}/>

											<a href={p.link} target={'_blank'}>{p.link}</a>
										</div>)}
								</li>))}
						</ul>
					</div>
				</section>

				<section className={formations}>
					<h1> Formations </h1>

					<div>
						<ul>
							{myFormations.map((f, i) =>
								(<li key={i}>
									<div className={card}>
										<header>
											<img src={f.image.src} alt={f.image.alt}
											     style={{ width: '100px', minWidth: '100px', marginRight: '10px', borderRadius: '15px' }} />

											<div>
												<div className="titles-container">
													<h2> {f.title} </h2>

													{f.badges && f.badges.map((b, j) =>
														(<span key={j} className={badge}>{b.label}</span>))}
												</div>

												<span>
													<FaIcon type={FaIconsType.SOLID} icon={'location-dot'} />&nbsp;

													{f.location}
												</span>

												<span style={{ fontSize: '12px' }}>
													<FaIcon type={FaIconsType.SOLID} icon={'hourglass-start'} /> {f.time.start}&nbsp;
													<FaIcon type={FaIconsType.SOLID} icon={'hourglass-end'} /> {f.time.end}
												</span>
											</div>
										</header>
									</div>
								</li>))}
						</ul>
					</div>
				</section>

				<section>
					<h1> Langues parlées </h1>

					<ul>
						{langes.map((l, i) =>
							(<li key={i}>
								{l.label}:

								<StarNotation note={l.note} style={{ marginLeft: '5px' }} />

								{l.badges && l.badges.map((b, j) =>
									(<span key={j} className={badge}> {b} </span>))}
							</li>))}
					</ul>
				</section>

				<section className={hobbies}>
					<h1> Centres d'intérêt </h1>

					<ul>
						{hobbiesCategories.map((c, i) =>
							(<li key={i}>
								<h2>
									{c.title}

									{c.badges && c.badges.map((b, j) =>
										(<span key={j} className={badge}> {b} </span>))}
								</h2>

								<ul>
									{c.hobbies.map((h, j) =>
										(<li key={j}>
											{h.label}

											{h.badges && h.badges.map((b, k) =>
												(<span key={k} className={badge}> {b} </span>))}
										</li>))}
								</ul>
							</li>))}
					</ul>
				</section>
			</div>

			<div className={side}>
				<div>
					<img src={laravel} alt={'logo laravel'} style={{ height: 'auto' }} />
				</div>

				<div>
					<img src={node} alt={'logo node'} style={{ height: 'auto' }} />
				</div>

				<div>
					<img src={php} alt={'logo php'} style={{ height: 'auto' }} />
				</div>

				<div>
					<img src={react} alt={'logo react'} style={{ height: 'auto' }} />
				</div>

				<div>
					<img src={symfony} alt={'logo symfony'} style={{ height: 'auto' }} />
				</div>

				<div>
					<img src={ts} alt={'logo ts'} style={{ height: 'auto' }} />
				</div>

				<div>
					<img src={vue} alt={'logo vue'} style={{ height: 'auto' }} />
				</div>
			</div>
		</div>
	</Window>);
};
