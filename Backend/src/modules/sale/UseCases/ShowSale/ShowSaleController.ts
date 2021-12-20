import { Request,Response } from "express";
import { IShowSaleUseCase } from "../../Protocols/IShowSale/IShowSaleUseCase";


export class ShowSaleController{
    constructor(private showSaleUserCase:IShowSaleUseCase){}
    async handle(req: Request, res: Response):Promise<Response>{
        const {id}=req.params
        const sales=await this.showSaleUserCase.execute(id)
        return res.status(200).json(sales)
    }

}