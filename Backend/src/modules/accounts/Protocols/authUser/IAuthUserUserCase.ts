import { IAuthUser } from './IAuthUser';

interface IRequest{
    email:string,
    password:string
}
export interface IAuthUserUserCase{
    execute({email,password}:IRequest):Promise<IAuthUser>
}