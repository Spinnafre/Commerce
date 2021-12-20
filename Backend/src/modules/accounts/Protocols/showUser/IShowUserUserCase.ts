import { IUser } from "../IUser";

export interface IShowUserUserCase{
    execute(id:string): Promise<IUser>
}