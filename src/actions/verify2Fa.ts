import {ActionBase, ActionId} from "../action";


export interface Verify2FaAction extends ActionBase {
    id: ActionId.Verify2Fa
    envs: {}
}
