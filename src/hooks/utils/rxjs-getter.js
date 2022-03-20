import { useEffect, useState } from "react";

export const createRxJsUseGetter = (defaultValue, observable$) => () => {
	const [state, setState] = useState(defaultValue);

	useEffect(() => {
		observable$.subscribe(v => setState(v));
	}, []);

	return [state, () => observable$.next(defaultValue)];
};
