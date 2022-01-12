export interface IUser{
    id?:string,
    name:string,
    login:string,
    address:string,
    email:string,
    password:string,
    confirmPassword?:string,
    isAdmin?:boolean,
    created_at?:Date,
}