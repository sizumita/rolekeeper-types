import {APIRole} from "discord-api-types/v10";

export enum ActionId {
    SendHiddenMessage,
    EditRole,
    DelayAddRole,
    DelayRemoveRole,
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
            addRoles: [] as APIRole[],
            removeRoles: [] as APIRole[],
            toggleRoles: [] as APIRole[],
        }
    },
    [ActionId.DelayAddRole]: {
        id: ActionId.DelayAddRole,
        envs: {
            role: null as APIRole | null,
            minutes: 30
        }
    },
    [ActionId.DelayRemoveRole]: {
        id: ActionId.DelayRemoveRole,
        envs: {
            role: null as APIRole | null,
            minutes: 30,
        }
    }
}
