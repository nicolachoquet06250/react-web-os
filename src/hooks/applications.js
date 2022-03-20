import { BehaviorSubject } from "rxjs";
import { createRxJsUseGetter } from "./utils/rxjs-getter";
import { useUniqId } from "./utils/uniqid";

const applications = [];
const applications$ = new BehaviorSubject(applications);

const pinApplications = [];
const pinApplications$ = new BehaviorSubject(pinApplications);

const runningApps = [];
const runningApps$ = new BehaviorSubject(runningApps);

// applications
export const useApplications = createRxJsUseGetter(applications, applications$);

/**
 * @param {string} title
 * @param {string} icon
 * @param {(props: any[]) => JSX.Element} component
 */
export const useRegisterApplication = (title, icon, component) => {
	const oldApps = applications$.getValue();

	if (oldApps.map(v => v.title).indexOf(title) === -1) {
		const _applications = [
			...oldApps,
			{title, icon, component}
		];

		applications$.next(_applications);
	}
};

// pin applications
export const usePinApplications = createRxJsUseGetter(pinApplications, pinApplications$);

/**
 * @param {string} title
 */
export const useRegisterPinApp = (title) => ({
	/**
	 * @param {boolean|undefined} taskBar
	 * @param {boolean|undefined} startMenu
	 */
	register({ taskBar, startMenu }) {
		const oldPinApps = pinApplications$.getValue();
		const applications = applications$.getValue();
		let _pinApplications;

		if (applications.map(v => v.title).indexOf(title) !== -1) {
			if (oldPinApps.map(v => v.title).indexOf(title) === -1) {
				_pinApplications = [
					...oldPinApps,
					{
						title,
						icon: applications.reduce((r, c) => c.title === title ? c.icon : r, ''),
						options: {
							taskBar: taskBar ?? false,
							startMenu: startMenu ?? false
						}
					}
				];
			} else {
				_pinApplications = oldPinApps.reduce((r, c) =>
					c.title === title ? [
						...r,
						{
							title,
							icon: applications.reduce((r, c) => c.title === title ? c.icon : r, ''),
							options: {
								taskBar: taskBar ?? c.options.taskBar,
								startMenu: startMenu ?? c.options.startMenu
							}
						}
					] : [...r, c], []
				);
			}

			pinApplications$.next(_pinApplications);
		}
	}
});

export const useStartMenuPinApplications = () => {
	const [pinApplications] = usePinApplications();

	return pinApplications.filter(v => v.options.startMenu);
};

export const useTaskbarPinApplications = () => {
	const [pinApplications] = usePinApplications();

	return pinApplications.filter(v => v.options.taskBar);
};

// running applications
export const useRunningApplications = createRxJsUseGetter(runningApps, runningApps$);

export const useApplicationsInstances = () => {
	const applications = applications$.getValue();
	const [runningApplications] = useRunningApplications();

	return applications.map(a => a.title).reduce((r, title) => ({
		...r,
		[title]: {
			instanceNb: runningApplications.filter(v => v.title === title).length
		}
	}), {});
};

export const useControlApplication = () => ({
	run(title) {
		const uniqId = useUniqId();
		const oldRunningApplications = runningApps$.getValue();
		const apps = applications$.getValue();

		runningApps$.next([
			...oldRunningApplications,
			{
				title,
				id: uniqId,
				component: apps.filter(v => v.title === title)[0].component
			}
		]);
	},

	stop(title, id) {
		const oldRunningApplications = runningApps$.getValue();

		runningApps$.next(oldRunningApplications.filter((v, i) => i !== id));
	}
});
