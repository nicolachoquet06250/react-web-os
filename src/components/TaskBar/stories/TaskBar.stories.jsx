import React from "react";
import { TaskBar } from "../TaskBar.jsx";
import { OsDesktop } from "../../OsDesktop/OsDesktop.jsx";

export default {
	title: 'App/UI/TaskBar',
	component: TaskBar,
	parameters: {
		// More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
		layout: 'fullscreen',
	},
};

const background = 'https://lafibre.info/images/smileys/201604_warty-final-ubuntu.png';

const Template = (args) => <OsDesktop background={background}>
	<TaskBar {...args} />
</OsDesktop>;

export const WithRunningApps = Template.bind({});
WithRunningApps.args = {
	pinApps: [
		{
			title: 'Calculatrice',
			icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/GNOME_Calculator_icon_2018.svg/1200px-GNOME_Calculator_icon_2018.svg.png'
		},
		{
			title: 'Vs Code',
			icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/2048px-Visual_Studio_Code_1.35_icon.svg.png'
		}
	],
	runningApps: {
		'Calculatrice': {
			instanceNb: 2
		},
		'Vs Code': {
			instanceNb: 3
		}
	}
};

export const WithoutRunningApps = Template.bind({});
WithoutRunningApps.args = {
	pinApps: [
		{
			title: 'Calculatrice',
			icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/GNOME_Calculator_icon_2018.svg/1200px-GNOME_Calculator_icon_2018.svg.png'
		},
		{
			title: 'Vs Code',
			icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/2048px-Visual_Studio_Code_1.35_icon.svg.png'
		}
	]
};
