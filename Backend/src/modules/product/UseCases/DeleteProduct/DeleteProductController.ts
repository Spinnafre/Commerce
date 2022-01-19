import { Request,Response } from "express";
import { ICreateProductController } from "../../Protocols/CreateProduct/ICreateProductController";
import { ICreateProductUserCase } from "../../Protocols/CreateProduct/ICreateProductUserCase";
import { IDeleteProductUseCase } from "../../Protocols/IDeleteProduct/IDeleteProductUseCase";
import { IShowProductUseCase } from "../../Protocols/IShowProduct/IShowProductUseCase";


export class DeleteProductController{
    constructor(private deleteproductUserCase:IDeleteProductUseCase){}
    async handle(req: Request, res: Response):Promise<Response>{
        const {id}=req.params
        await this.deleteproductUserCase.execute(id)
        return res.status(200).json({msg:`Product deleted`})
    }

}