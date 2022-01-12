import { IUser } from "../IUser";

export interface IShowUsersUserCase{
    execute(): Promise<Array<IUser>>
}