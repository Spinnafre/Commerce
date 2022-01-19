import { IUser } from "../IUser";

export interface IUpdateUsersUserCase{
    execute({id,name,login,address,email,password,confirmPassword,isAdmin}:IUser): Promise<void>
}