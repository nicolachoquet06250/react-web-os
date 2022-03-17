import React from "react";
import { StartMenu } from "../StartMenu";

export default {
	title: 'App/UI/StartMenu',
	component: StartMenu
};

const Template = (args) => <StartMenu {...args} />;

export const Opened = Template.bind({});
Opened.args = {
	opened: true
};
