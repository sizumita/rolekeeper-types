import {APIRole, TextInputStyle} from "discord-api-types/v10";
import {EditRoleAction} from "./actions/editRole";
import {SendHiddenMessageAction} from "./actions/sendHiddenMessage";
import {DelayAddRoleAction, DelayRemoveRoleAction} from "./actions/delayRole";
import {Verify2FaAction} from "./actions/verify2Fa";
import {ReadTextFromModalAction} from "./actions/readTextFromModal";
import {SendMessageAction} from "./actions/sendMessage";

export enum ActionId {
    SendHiddenMessage,
    EditRole,
    DelayAddRole,
    DelayRemoveRole,
    Verify2Fa,
    ReadTextFromModal,
    SendMessage,
}

export interface ActionBase {
    id: ActionId // アクションの種類用
    envs: { [p: string]: any }
}

export type Action
    = EditRoleAction
    | SendHiddenMessageAction
    | DelayAddRoleAction
    | DelayRemoveRoleAction
    | Verify2FaAction
    | ReadTextFromModalAction
    | SendMessageAction


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
            title: "タイトル",
            minLength: 0,
            maxLength: 2000,
            style: TextInputStyle.Short,
            label: "ラベル",
            castTo: "MODAL_INPUT"
        }
    },
    [ActionId.SendMessage]: {
        id: ActionId.SendMessage,
        envs: {
            content: "内容",
            channel: null as string | null
        }
    }
}
