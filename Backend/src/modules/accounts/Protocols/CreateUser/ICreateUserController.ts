import { Request, Response } from "express";

export interface ICreateUserController{
    handle(req: Request, res: Response):Promise<Response>
}