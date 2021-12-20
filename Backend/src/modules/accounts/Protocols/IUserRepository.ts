import { IUser } from "./IUser";

export interface IUserRepository{
    create({name,login,address,email,password,isAdmin}:IUser):Promise<void>,
    show(): Promise<Array<IUser>>,
    findById(id:string): Promise<IUser>,
    findByEmail(email:string): Promise<IUser>,
    delete(id:string): Promise<void>
    
}