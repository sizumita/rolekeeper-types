import {ActionBase, ActionId} from "../action";
import {APIRole} from "discord-api-types/v10";

export interface DelayAddRoleAction extends ActionBase {
    id: ActionId.DelayAddRole
    envs: {
        role: APIRole | null
        minutes: number
    }
}

export interface DelayRemoveRoleAction extends ActionBase {
    id: ActionId.DelayRemoveRole
    envs: {
        role: APIRole | null
        minutes: number
    }
}
