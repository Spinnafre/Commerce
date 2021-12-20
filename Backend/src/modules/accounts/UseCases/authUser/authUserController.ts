import { Response, Request} from 'express';
import { IAuthUserUserCase } from "../../Protocols/authUser/IAuthUserUserCase";

export class AuthUserController{
    constructor(private authUserCase:IAuthUserUserCase){}
    async handle(req: Request, res: Response):Promise<Response>{
        const {email, password} = req.body
        const token=await this.authUserCase.execute({email, password})
        return res.status(201).json(token)
    }
}