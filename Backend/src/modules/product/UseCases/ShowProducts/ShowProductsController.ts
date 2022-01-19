import { Request,Response } from "express";
import { ICreateProductController } from "../../Protocols/CreateProduct/ICreateProductController";
import { ICreateProductUserCase } from "../../Protocols/CreateProduct/ICreateProductUserCase";
import { IShowProductsUseCase } from "../../Protocols/IShowProducts/IShowProductsUseCase";


export class ShowProductsController{
    constructor(private showProductsUserCase:IShowProductsUseCase){}
    async handle(req: Request, res: Response):Promise<Response>{
        const products=await this.showProductsUserCase.execute()
        return res.status(200).json(products)
    }

}