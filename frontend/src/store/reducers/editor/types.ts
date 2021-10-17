
export interface EditorState {
    media: File | null;
    isLoading: boolean;
    error: string;
}

export enum EditorActionsEnum {
    SET_MEDIA="SET_MEDIA",
    SET_IS_LOADING="SET_IS_LOADING",
    SET_ERROR="SET_ERROR",
}

export interface SetMediaAction {
    type: EditorActionsEnum.SET_MEDIA;
    payload: File;
}

export interface SetIsLoadingAction {
    type: EditorActionsEnum.SET_IS_LOADING;
    payload: boolean;
}

export interface SetErrorAction {
    type: EditorActionsEnum.SET_ERROR;
    payload: string;
}


export type EditorAction =
    SetMediaAction |
    SetIsLoadingAction |
    SetErrorAction;