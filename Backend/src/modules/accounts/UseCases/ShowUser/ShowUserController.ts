import { Response, Request } from 'express';
import { IShowUserController } from '../../Protocols/showUser/IShowUserController';
import { IShowUserUserCase } from '../../Protocols/showUser/IShowUserUserCase';


export class ShowUserController implements IShowUserController{
    constructor(private showUserUserCase:IShowUserUserCase){}
    async handle(req: Request, res: Response):Promise<Response>{
        const {id}=req.user
        const users=await this.showUserUserCase.execute(id)
        return res.status(200).json(users)
    }
}