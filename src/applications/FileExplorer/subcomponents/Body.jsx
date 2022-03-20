import { useStyle } from "../style";

export const Body = () => {
	const { appBody } = useStyle({});

	return (<div className={appBody}>
		body
	</div>);
};
