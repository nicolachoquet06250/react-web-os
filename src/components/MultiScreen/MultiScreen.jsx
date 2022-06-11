import { useScreen } from "./screen";

export const MultiScreen = ({ children }) => {
	const { screenId } = useScreen();

	return (<>
		{children}
	</>);
}
