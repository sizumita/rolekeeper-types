import {WrappedAction} from "./action";
import {Components} from "./component";

type Snowflake = string
type Url = string


export interface EmbedField {
    name: string
    value: string
    inline: boolean | null
}

export interface Embed {
    title?: string
    description?: string
    url?: Url
    timestamp?: number
    color?: string
    footer?: {
        text: string
        icon_url?: Url
    }
    image?: {
        url: Url
    }
    author?: {
        name: string
        url?: Url
        icon_url?: Url
    }
    fields?: EmbedField[]
}


export interface ActionPanel {
    // metadata
    id: string
    title: string
    guild_id: Snowflake
    member_id: Snowflake

    // user data
    username?: string
    avatar_url?: string

    // message
    content?: string
    tts?: boolean
    components?: Components
    embeds?: Embed[]
    actions: WrappedAction[]
}


export type Section = "index" | "message" | "action" | "sender" | "button"

