import React from "react";
import { Calendar } from "../Calendar";

export default {
	title: 'App/UI/Calendar',
	component: Calendar,
	parameters: {
		// More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
		layout: 'fullscreen',
	},
};

const Template = (args) => <Calendar {...args} />;

export const WithoutSpecifiedDate = Template.bind({});
WithoutSpecifiedDate.args = {
	opened: true
};

export const WithSpecifiedDate = Template.bind({});
WithSpecifiedDate.args = {
	date: new Date('2022-03-13 12:00:00'),
	opened: true
};
