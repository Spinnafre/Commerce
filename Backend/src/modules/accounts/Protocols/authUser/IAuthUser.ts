export interface IAuthUser{
    user:{
        id:string,
        name:string,
        email:string,
        isAdmin:boolean
    },
    token:string
}