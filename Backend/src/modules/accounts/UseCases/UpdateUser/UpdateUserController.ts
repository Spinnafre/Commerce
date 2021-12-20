import { Response, Request } from 'express';
import { IUpdateUserController } from '../../Protocols/UpdateUser/IUpdateUserController';
import { IUpdateUsersUserCase } from '../../Protocols/UpdateUser/IUpdateUserUserCase';


export class UpdateUsersController implements IUpdateUserController{
    constructor(private UpdateUserUserCase:IUpdateUsersUserCase){}
    async handle(req: Request, res: Response):Promise<Response>{
        const {id}=req.user
        const {name,login,address,email,password,confirmPassword,isAdmin}=req.body
        await this.UpdateUserUserCase.execute({id,name,login,address,email,password,confirmPassword,isAdmin})
        return res.status(200).json({msg:"User updated successfully"})
    }
}