import { ContextualMenu } from "../ContextualMenu";
import { useRegisterContextualMenu } from "../../../hooks/contextual-menu";

export default {
	title: 'App/UI/ContextualMenu',
	component: ContextualMenu
};

const Template = (args) => {
	useRegisterContextualMenu(args.id, () => (<div style={{ padding: '5px' }}>
		<span>My context menu</span>
	</div>));

	return <ContextualMenu id={args.id} {...args} />
};

export const Opened = Template.bind({});
Opened.args = {
	id: 'demo',
	position: {
		x: 10,
		y: 10
	},
	show: true,
	onHide: () => null
};

export const Closed = Template.bind({});
Closed.args = {
	id: 'demo',
	position: {
		x: 10,
		y: 10
	},
	show: false,
	onHide: () => null
};
