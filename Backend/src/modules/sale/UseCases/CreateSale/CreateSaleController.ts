import { Request,Response } from "express";
import { ICreateSaleUserCase } from "../../Protocols/CreateSale/ICreateSaleUserCase";


export class CreateSaleController{
    constructor(private createSaleUserCase:ICreateSaleUserCase){}
    async handle(req: Request, res: Response):Promise<Response>{
        const {date,product_id,qtd}=req.body
        const {id:user_id}=req.user
        await this.createSaleUserCase.execute({date,product_id,qtd,user_id})
        return res.status(201).json({msg:"Sale created successfully"})
    }

}