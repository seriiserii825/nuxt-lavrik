export type TPost = {
    id:        number;
    url:       string;
    title:     string;
    content:   string;
    createdAt: Date;
    updatedAt: Date;
    UserId:    number;
    User:      TUser;
}
export type TUser  = {
    id:    number;
    login: string;
}
