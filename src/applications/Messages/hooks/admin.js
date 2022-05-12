import { BehaviorSubject } from "rxjs";
import { createRxJsUseGetter } from '../../../hooks/utils/rxjs-getter';

const admin = localStorage.getItem('admin') === 'true';
const admin$ = new BehaviorSubject(admin);

export const useAdmin = createRxJsUseGetter(admin, admin$);

export const setAdmin = a => {
    localStorage.setItem('admin', (a ? 'true' : 'false'))
    admin$.next(a);
}