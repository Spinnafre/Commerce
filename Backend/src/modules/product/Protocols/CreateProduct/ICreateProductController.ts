import { Request, Response } from "express";

export interface ICreateProductController{
    handle(req: Request, res: Response):Promise<Response>
}