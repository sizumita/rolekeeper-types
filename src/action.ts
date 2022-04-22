import {APIRole, TextInputStyle} from "discord-api-types/v10";

export enum ActionId {
    SendHiddenMessage,
    EditRole,
    DelayAddRole,
    DelayRemoveRole,
    Verify2Fa,
    ReadTextFromModal,
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
    },
    [ActionId.Verify2Fa]: {
        id: ActionId.Verify2Fa,
        envs: {}
    },
    [ActionId.ReadTextFromModal]: {
        id: ActionId.ReadTextFromModal,
        envs: {
            title: "",
            minLength: 0,
            maxLength: 2000,
            style: TextInputStyle.Short,
            label: "",
            castTo: "MODAL_INPUT"
        }
    }
}
