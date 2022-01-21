import { Request, Response } from "express";

export interface ICreateCategoryController{
    handle(req: Request, res: Response):Promise<Response>
}