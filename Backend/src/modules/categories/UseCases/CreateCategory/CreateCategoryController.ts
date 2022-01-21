import { Request,Response } from "express";

import { ICreateCategoryController } from "../../Protocols/CreateCategory/ICreateCategoryController";
import { ICreateCategoryUserCase } from "../../Protocols/CreateCategory/ICreateCategoryUserCase";


export class CreateCategoryController implements ICreateCategoryController{
    constructor(private createCategoryUserCase:ICreateCategoryUserCase){}
    async handle(req: Request, res: Response):Promise<Response>{
        const {name}=req.body
        console.log(req.body);
        await this.createCategoryUserCase.execute({name})
        return res.status(201).json({msg:"Category created successfully"})
    }

}