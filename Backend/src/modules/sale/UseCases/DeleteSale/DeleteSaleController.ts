import { Request,Response } from "express";
import { IDeleteSaleUseCase } from "../../Protocols/IDeleteSale/IDeleteSaleUseCase";


export class DeleteSaleController{
    constructor(private deletesaleUserCase:IDeleteSaleUseCase){}
    async handle(req: Request, res: Response):Promise<Response>{
        const {id}=req.params
        await this.deletesaleUserCase.execute(id)
        return res.status(200).json({msg:`Sale deleted`})
    }

}