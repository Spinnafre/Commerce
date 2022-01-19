import { Request,Response } from "express";
import { IShowSalesUseCase } from "../../Protocols/IShowSales/IShowSalesUseCase";


export class ShowSalesController{
    constructor(private showSaleUserCase:IShowSalesUseCase){}
    async handle(req: Request, res: Response):Promise<Response>{
        const sales=await this.showSaleUserCase.execute()
        return res.status(200).json(sales)
    }

}