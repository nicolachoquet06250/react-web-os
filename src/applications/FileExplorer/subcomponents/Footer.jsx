import { useStyle } from "../style";

export const Footer = ({ children }) => {
	const { footer } = useStyle({});

	return (<div className={footer}>
		{children}
	</div>);
};
