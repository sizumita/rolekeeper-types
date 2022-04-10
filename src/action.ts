export enum ActionId {
    SendHiddenMessage,
    EditRole,
}

export interface Action {
    id: ActionId // アクションの種類用
    envs: { [p: string]: any }
}

export interface WrappedAction {
    customId: string // ボタンと紐付ける用.
    actions: Action[]
}

export const actionInitials: { [p in ActionId]: Action } = {
    [ActionId.SendHiddenMessage]: {
        id: ActionId.SendHiddenMessage,
        envs: {message: "$USERさんがボタンをクリックしました。"}
    },
    [ActionId.EditRole]: {
        id: ActionId.EditRole,
        envs: {
            addRoles: [],
            removeRoles: [],
            toggleRoles: [],
        }
    }
}
