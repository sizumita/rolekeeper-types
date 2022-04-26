import {ActionBase, ActionId} from "../action";

export interface SendHiddenMessageAction extends ActionBase {
    id: ActionId.SendHiddenMessage
    envs: {
        message: string
    }
}
