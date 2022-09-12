import { useCallback, useEffect, useRef, useState } from "react";
import { useUniqId } from "../../hooks/utils/uniqid";
import { BehaviorSubject } from "rxjs";
import { createRxJsUseGetter } from "../../hooks/utils/rxjs-getter";

const screenId = '';
const screenId$ = new BehaviorSubject(screenId);

export const useScreenId = createRxJsUseGetter(screenId, screenId$);

export const useRegisterScreenId = id => {
	if (!screenId$.getValue()) {
		screenId$.next(id);
	}
};

const screenPrimary = {
	isPrimary: undefined
};
const screenPrimary$ = new BehaviorSubject(screenPrimary);

const _useScreenPrimary = createRxJsUseGetter(screenPrimary$, screenPrimary$);

export const useScreenPrimary = () => {
	const [{ isPrimary }, f] = _useScreenPrimary();
	const set = useSetScreenPrimary()

	const proxy = !window.screen.isExtended ? true : isPrimary;

	window.getScreenDetails?.().then(() => {
		set(true)
	}).catch(() => {
		set(false)
	})

	return [{ isPrimary: proxy }, f];
};

export const useSetScreenPrimary = () => {
	return (isPrimary = true) => {
		screenPrimary$.next({
			isPrimary
		});
	};
};

export const useScreen = (onChange = () => null) => {
	const [screenDetailsState, setScreenDetails] = useState();
	const currentScreenRef = useRef();
	const setScreenPrimary = useSetScreenPrimary();

	const logScreenDetails = useCallback((line) => {
		if (screenDetailsState) {
			console.log(screenDetailsState, line);
		}
	}, [screenDetailsState]);
	const onLocalChange = useCallback(() => {
		if (!localStorage.getItem('screens')) {
			localStorage.setItem('screens', JSON.stringify([
				{
					id: screenId$.getValue(),
					label: currentScreenRef.current?.label
				}
			]));
		}
		else if (Array.from(JSON.parse(localStorage.getItem('screens'))).filter(c => c.id === screenId$.getValue()).length === 0) {
			localStorage.setItem('screens', JSON.stringify([
				...JSON.parse(localStorage.getItem('screens')),
				{
					id: screenId$.getValue(),
					label: currentScreenRef.current?.label
				}
			]));
		}
		else {
			localStorage.setItem('screens', JSON.stringify(
					Array.from(
						JSON.parse(localStorage.getItem('screens'))
							.map(c => {
								if (c.id === screenId$.getValue()) {
									return {
										...c,
										label: currentScreenRef.current?.label
									}
								}
								return c;
							})
					)
				)
			)
		}

		setScreenPrimary((currentScreenRef.current?.isPrimary ?? false));
	}, []);

	useEffect(() => {
		useRegisterScreenId(useUniqId());

		const onUnload = () => {
			localStorage.setItem('screens',
				JSON.stringify(
					Array.from(JSON.parse((localStorage.getItem('screens') ?? '[]')))
						.filter(c => c.id !== screenId$.getValue())
				)
			)
		};

		const onCurrentScreenChange = () => {
			window.getScreenDetails?.().then(screenDetails => {
				if (screenDetails) {
					setScreenDetails(screenDetails);
					currentScreenRef.current = screenDetails.currentScreen;

					if (screenDetailsState) {
						if (screenId$.getValue()) {
							onLocalChange();
						}
						onChange(screenDetails, screenDetails.currentScreen);
					}
				}
			}).catch(() => {
				setScreenPrimary(false)
			});
		};

		if (window.screen.isExtended) {
			window.getScreenDetails?.().then(screenDetails => {
				if (screenDetails) {
					setScreenDetails(screenDetails);
					currentScreenRef.current = screenDetails.currentScreen;

					if (screenDetailsState) {
						if (screenId$.getValue()) {
							onLocalChange();
						}
						onChange(screenDetails, screenDetails.currentScreen);
					}
				}
				screenDetailsState?.addEventListener('currentscreenchange', onCurrentScreenChange);
			}).catch(() => {
				setScreenPrimary(false)
			});
		}

		window.addEventListener('unload', onUnload);
		window.addEventListener('beforeunload', onUnload);

		return () => {
			screenDetailsState?.removeEventListener('currentscreenchange', onCurrentScreenChange);

			window.removeEventListener('unload', onUnload);
			window.removeEventListener('beforeunload', onUnload);

			onUnload();
		}
	});

	return {
		screenId: screenId$.getValue(),
		isExtended: window.screen.isExtended,
		currentScreen: currentScreenRef,
		screenDetails: screenDetailsState,
		logScreenDetails
	};
};
