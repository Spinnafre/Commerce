import { Request,Response } from "express";
import { IShowProductUseCase } from "../../Protocols/IShowProduct/IShowProductUseCase";


export class ShowProductController{
    constructor(private showProductUserCase:IShowProductUseCase){}
    async handle(req: Request, res: Response):Promise<Response>{
        const {id}=req.params
        const product=await this.showProductUserCase.execute(id)
        return res.status(201).json(product)
    }

}