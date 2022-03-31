import {ComponentType} from "discord-api-types/v9";
import {ButtonStyle} from "discord-api-types/v10";
import {APISelectMenuOption} from "discord-api-types/payloads/v10";


export enum ButtonType {
    WithCustomId = 0,
    WithUrl = 1,
}


export interface ComponentBase {
    type: ComponentType
}

export interface ButtonBase extends ComponentBase {
    type: ComponentType.Button
    buttonType: ButtonType
    style: ButtonStyle

    label?: string
    disabled?: boolean
}

export interface LinkButton extends ButtonBase {
    buttonType: ButtonType.WithUrl
    url: string
    style: ButtonStyle.Link
}

export interface Button extends ButtonBase {
    buttonType: ButtonType.WithCustomId
    customId: string
    style: ButtonStyle.Success | ButtonStyle.Danger | ButtonStyle.Primary | ButtonStyle.Secondary
}

export interface SelectMenu extends ComponentBase {
    type: ComponentType.SelectMenu
    customId: string
    options: APISelectMenuOption[]
}


export type ActionRow = (Button | LinkButton)[] | SelectMenu

export type Components = ActionRow[]
