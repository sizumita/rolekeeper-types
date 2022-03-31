export enum NewUserRoleType {
    Always = "全ての新規ユーザー", // いつでも付与
    WhenComeback = "前に参加していたことがある新規ユーザー", // 再度戻ってきた場合に付与
    WhenNew = "一度も参加したことがないユーザー", // まだ一度も入ったことがない場合に付与
}

export interface NewUserRole {
    roleId: string
    addDelay: number
    removeDelay?: number
    type: NewUserRoleType
}

export interface SavedRoles {
    roles: string[]
    timestamp: number
    ttl: number
}

export interface UserData {
    roles: string[]
    user_id: string
    pending: boolean
}