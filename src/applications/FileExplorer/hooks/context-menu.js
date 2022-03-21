import { BehaviorSubject } from "rxjs";
import { createRxJsUseGetter } from "../../../hooks/utils/rxjs-getter";

const contextMenuSelectedFile = '';
const contextMenuSelectedFile$ = new BehaviorSubject(contextMenuSelectedFile);

export const useContextMenuSelectedDirectory = createRxJsUseGetter(contextMenuSelectedFile, contextMenuSelectedFile$);

export const setContextMenuSelectedDirectory = (selectedFile) => contextMenuSelectedFile$.next(selectedFile);
