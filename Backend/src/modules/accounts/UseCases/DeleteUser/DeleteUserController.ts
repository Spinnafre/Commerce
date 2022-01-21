import { Response, Request } from 'express';

import { IDeleteUserUserCase } from '../../Protocols/DeleteUser/IDeleteUserUserCase';


export class DeleteUserController{
    constructor(private DeleteUserUserCase:IDeleteUserUserCase){}
    async handle(req: Request, res: Response):Promise<Response>{
        const {id}=req.params
        await this.DeleteUserUserCase.execute(id)
        return res.status(200).json({msg:`User deleted`})
    }
}