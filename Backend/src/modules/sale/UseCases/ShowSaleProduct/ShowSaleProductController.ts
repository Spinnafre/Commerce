import { Request,Response } from "express";
import { IShowSalesProductUseCase } from "../../Protocols/IShowSaleProduct/IShowSalesProductUseCase";


export class ShowSalesProductController{
    constructor(private showSaleProductUserCase:IShowSalesProductUseCase){}
    async handle(req: Request, res: Response):Promise<Response>{
        const {id}=req.params
        const sales=await this.showSaleProductUserCase.execute(id)
        return res.status(200).json(sales)
    }

}