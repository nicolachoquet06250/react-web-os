import React from "react";
import { OsDesktop } from "../OsDesktop.jsx";

export default {
	title: 'App/UI/OsDesktop',
	component: OsDesktop,
	parameters: {
		// More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
		layout: 'fullscreen',
	},
};

const Template = (args) => <OsDesktop {...args} />;

export const Default = Template.bind({});
Default.args = {
	background: 'https://lafibre.info/images/smileys/201604_warty-final-ubuntu.png'
};
