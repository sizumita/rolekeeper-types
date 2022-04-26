import {ActionBase, ActionId} from "../action";
import {APIRole} from "discord-api-types/v10";

export interface EditRoleAction extends ActionBase {
    id: ActionId.EditRole
    envs: {
        addRoles: APIRole[]
        removeRoles: APIRole[]
        toggleRoles: APIRole[]
    }
}
