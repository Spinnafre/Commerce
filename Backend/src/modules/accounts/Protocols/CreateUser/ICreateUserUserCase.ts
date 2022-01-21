import { IUser } from "../IUser";

export interface ICreateUserUserCase{
    execute({id,name,login,address,email,password,isAdmin}:IUser):Promise<void>
}