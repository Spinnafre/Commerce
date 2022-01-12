import { Request,Response } from "express";
import { ICreateProductController } from "../../Protocols/CreateProduct/ICreateProductController";
import { ICreateProductUserCase } from "../../Protocols/CreateProduct/ICreateProductUserCase";
export class CreateProductController implements ICreateProductController{
    constructor(private createProductUserCase:ICreateProductUserCase){}
    async handle(req: Request, res: Response):Promise<Response>{
        const {name,price,img_url,qtd,category_id}=req.body
        await this.createProductUserCase.execute({name,price,img_url,qtd,category_id})
        return res.status(201).json({msg:"Product created successfully"})
    }

}