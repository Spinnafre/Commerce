import { ICreateUserController } from "../../Protocols/CreateUser/ICreateUserController";
import { ICreateUserUserCase } from "../../Protocols/CreateUser/ICreateUserUserCase";
import { Request,Response } from "express";


export class CreateUserController implements ICreateUserController{
    constructor(private createUserUserCase:ICreateUserUserCase){}
    async handle(req: Request, res: Response):Promise<Response>{
        const {name,login,address,email,password,isAdmin}=req.body
        await this.createUserUserCase.execute({name,login,address,email,password,isAdmin})
        return res.status(201).json({msg:"User created successfully"})
    }

}