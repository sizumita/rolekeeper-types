export enum MessageRoleContentType {
    FullMatch = "full",
    Prefix = "prefix",
    Suffix = "suffix",
    Partial = "partial",
}

export enum MessageRoleEditType {
    Add = 0,
    Remove = 1,
    Toggle = 2,
}

export enum MessageRoleResponseType {
    Nothing = 0,
    AddReaction = 1,
    SendMessage = 2,
}


export interface MessageRole {
    role: string
    content: string
    type: MessageRoleContentType
    editType: MessageRoleEditType
    responseType: MessageRoleResponseType,
}
