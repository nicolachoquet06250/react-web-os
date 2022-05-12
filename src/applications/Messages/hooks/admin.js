import { BehaviorSubject } from "rxjs";
import { createRxJsUseGetter } from '../../../hooks/utils/rxjs-getter';

const admin = false;
const admin$ = new BehaviorSubject(admin);

export const useAdmin = createRxJsUseGetter(admin, admin$);

export const setAdmin = a => admin$.next(a);