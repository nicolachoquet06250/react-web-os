import React from "react";
import { Window } from "../Window";

export default {
	title: 'App/UI/Window',
	component: Window,
	parameters: {
		layout: 'fullscreen'
	},
	argTypes: {
		headerBackground: { control: 'color' },
		headerColor: { control: 'color' },
		bodyBackground: { control: 'color' }
	}
};

const Template = (args) => <Window {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const Resized = Template.bind({});
Resized.args = {
	width: 350,
	height: 500
};

export const Moved = Template.bind({});
Moved.args = {
	positionX: 10,
	positionY: 30
};

export const FullScreen = Template.bind({});
FullScreen.args = {
	fullScreen: true
};

export const NotResizable = Template.bind({});
NotResizable.args = {
	resizable: false
};

export const Colorized = Template.bind({});
Colorized.args = {
	headerBackground: 'rgba(0, 0, 0, .5)',
	headerColor: 'white',
	bodyBackground: 'rgba(0, 0, 0, .5)'
};
