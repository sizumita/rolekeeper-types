export enum ActionId {
    SendHiddenMessage,
    EditRole,
}

export interface Action {
    id: ActionId // アクションの種類用
    envs: { [p: string]: string }
}

export interface WrappedAction {
    customId: string // ボタンと紐付ける用.
    actions: Action[]
}
