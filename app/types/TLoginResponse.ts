export type TLoginResponse  = {
    user:  TUser;
    token: string;
}
export type TUser  = {
    id:        number;
    login:     string;
    createdAt: Date;
    updatedAt: Date;
}
