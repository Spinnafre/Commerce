import { Request, Response } from "express";

export interface ICreateSaleController{
    handle(req: Request, res: Response):Promise<Response>
}