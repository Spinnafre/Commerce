import { Response, Request } from 'express';
import { IShowUserController } from '../../Protocols/showUser/IShowUserController';
import { IShowUsersUserCase } from '../../Protocols/showUser/IShowUsersUserCase';


export class ShowUsersController implements IShowUserController{
    constructor(private showUsersUserCase:IShowUsersUserCase){}
    async handle(req: Request, res: Response):Promise<Response>{
        const users=await this.showUsersUserCase.execute()
        return res.status(200).json(users)
    }
}