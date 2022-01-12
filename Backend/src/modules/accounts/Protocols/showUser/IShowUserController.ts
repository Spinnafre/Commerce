import { Response,Request } from 'express';
export interface IShowUserController{
    handle(req:Request, res: Response):Promise<Response>
}