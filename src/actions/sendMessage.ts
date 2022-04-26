import {ActionBase, ActionId} from "../action";

export interface SendMessageAction extends ActionBase {
    id: ActionId.SendMessage
    envs: {
        content: string
        channel: string | null
    }
}
