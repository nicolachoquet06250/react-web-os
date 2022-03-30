import { BehaviorSubject } from "rxjs";
import { createRxJsUseGetter } from "../../../hooks/utils/rxjs-getter";

const blueScreen = false;
const blueScreen$ = new BehaviorSubject(blueScreen);

export const useBlueScreen = createRxJsUseGetter(blueScreen, blueScreen$);

export const showBlueScreen = () => {
    blueScreen$.next(true);
};

export const hideBlueScreen = () => {
    blueScreen$.next(false);
};