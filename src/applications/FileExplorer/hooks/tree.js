import cePc from "../../../assets/images/ce-pc.png";
import bureau from "../../../assets/images/bureau.png";

export const useTree = () => {
	return [
		{
			title: 'Ce PC',
			textTitle: 'ce-pc',
			icon: cePc,
			children: [
				{
					title: 'Bureau',
					icon: bureau,
					children: [
						{
							title: 'agile tour',
							children: []
						}
					]
				},
				{
					title: 'Documents',
					children: [
						{
							title: 'CyberLink',
							children: []
						},
						{
							title: 'Enregistrement audio',
							children: []
						},
						{
							title: 'vidéos',
							children: []
						},
						{
							title: 'Virtual Machines',
							children: []
						},
						{
							title: 'WindowsPowerShell',
							children: []
						},
						{
							title: 'Wondershare',
							children: []
						},
						{
							title: 'XSplit',
							children: []
						}
					]
				},
				{
					title: 'Images',
					children: [
						{
							title: 'Captures d\'écran',
							children: []
						},
						{
							title: 'Galerie Samsung',
							children: []
						},
						{
							title: 'Images',
							children: []
						},
						{
							title: 'Images enregistées',
							children: []
						},
						{
							title: 'Pellicule',
							children: []
						},
						{
							title: 'Projets vidéo',
							children: []
						},
						{
							title: 'Saved Pictures',
							children: []
						},
						{
							title: 'Téléchargements Mobile',
							children: []
						},
						{
							title: 'windows-terminal',
							children: []
						},
						{
							title: 'youtube',
							children: []
						}
					]
				},
				{
					title: 'Musiques',
					children: [
						{
							title: 'youtube',
							children: []
						}
					]
				},
				{
					title: 'Téléchargements',
					children: []
				},
				{
					title: 'Vidéos',
					children: [
						{
							title: 'Captures',
							children: []
						},
						{
							title: 'Movavi Vidéo Editor',
							children: [
								{
									title: 'Projects',
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
