import cePc from "../../../assets/images/ce-pc.png";
import bureau from "../../../assets/images/bureau.png";

export const useTree = () => {
	return [
		{
			title: 'Ce PC',
			textTitle: 'ce-pc',
			icon: cePc,
			path: 'Ce PC',
			children: [
				{
					title: 'Bureau',
					icon: bureau,
					path: 'Ce PC/Bureau',
					children: [
						{
							title: 'agile tour',
							path: 'Ce PC/Bureau/agile tour',
							children: []
						}
					]
				},
				{
					title: 'Documents',
					path: 'Ce PC/Documents',
					children: [
						{
							title: 'CyberLink',
							path: 'Ce PC/Documents/CyberLink',
							children: []
						},
						{
							title: 'Enregistrement audio',
							path: 'Ce PC/Documents/Enregistrement audio',
							children: []
						},
						{
							title: 'vidéos',
							path: 'Ce PC/Documents/vidéos',
							children: []
						},
						{
							title: 'Virtual Machines',
							path: 'Ce PC/Documents/Virtual Machines',
							children: []
						},
						{
							title: 'WindowsPowerShell',
							path: 'Ce PC/Documents/WindowsPowerShell',
							children: []
						},
						{
							title: 'Wondershare',
							path: 'Ce PC/Documents/Wondershare',
							children: []
						},
						{
							title: 'XSplit',
							path: 'Ce PC/Documents/XSplit',
							children: []
						}
					]
				},
				{
					title: 'Images',
					path: 'Ce PC/Images',
					children: [
						{
							title: 'Captures d\'écran',
							path: 'Ce PC/Images/Captures d\'écran',
							children: []
						},
						{
							title: 'Galerie Samsung',
							path: 'Ce PC/Images/Galerie Samsung',
							children: []
						},
						{
							title: 'Images',
							path: 'Ce PC/Images/Galerie Samsung',
							children: []
						},
						{
							title: 'Images enregistées',
							path: 'Ce PC/Images/Images enregistées',
							children: []
						},
						{
							title: 'Pellicule',
							path: 'Ce PC/Images/Pellicule',
							children: []
						},
						{
							title: 'Projets vidéo',
							path: 'Ce PC/Images/Projets vidéo',
							children: []
						},
						{
							title: 'Saved Pictures',
							path: 'Ce PC/Images/Saved Pictures',
							children: []
						},
						{
							title: 'Téléchargements Mobile',
							path: 'Ce PC/Images/Téléchargements Mobile',
							children: []
						},
						{
							title: 'windows-terminal',
							path: 'Ce PC/Images/windows-terminal',
							children: []
						},
						{
							title: 'youtube',
							path: 'Ce PC/Images/youtube',
							children: []
						}
					]
				},
				{
					title: 'Musiques',
					path: 'Ce PC/Musiques',
					children: [
						{
							title: 'youtube',
							path: 'Ce PC/Musiques/youtube',
							children: []
						}
					]
				},
				{
					title: 'Téléchargements',
					path: 'Ce PC/Téléchargements',
					children: []
				},
				{
					title: 'Vidéos',
					path: 'Ce PC/Vidéos',
					children: [
						{
							title: 'Captures',
							path: 'Ce PC/Vidéos/Captures',
							children: []
						},
						{
							title: 'Movavi Vidéo Editor',
							path: 'Ce PC/Vidéos/Captures/Movavi Vidéo Editor',
							children: [
								{
									title: 'Projects',
									path: 'Ce PC/Vidéos/Captures/Movavi Vidéo Editor/Projects',
									children: []
								}
							]
						}
					]
				},
			]
		}
	];
};
