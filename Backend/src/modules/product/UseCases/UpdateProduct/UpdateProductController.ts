import { Request,Response } from "express";
import { IUpdateProductUseCase } from "../../Protocols/IUpdateProduct/IUpdateProductUseCase";


export class UpdateProductController{
    constructor(private updateProductUserCase:IUpdateProductUseCase){}
    async handle(req: Request, res: Response):Promise<Response>{
        const {id}=req.params
        const {name,price,img_url,qtd,category_id}=req.body
        await this.updateProductUserCase.execute({id,name,img_url,price,qtd,category_id})
        return res.status(201).json({msg:`Product with id ${id} updated`})
    }

}