import {ActionBase, ActionId} from "../action";
import {TextInputStyle} from "discord-api-types/v10";

export interface ReadTextFromModalAction extends ActionBase {
    id: ActionId.ReadTextFromModal
    envs: {
        title: string
        minLength: number
        maxLength: number
        style: TextInputStyle
        label: string
        castTo: string
    }
}
