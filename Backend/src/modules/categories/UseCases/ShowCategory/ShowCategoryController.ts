import { Response, Request } from 'express';
import { IShowCategoryUserCase } from "../../Protocols/ShowCategory/IShowCategoryUserCase";

export class ShowCategoryController{
    constructor(private showCategoryUserCase:IShowCategoryUserCase){}
    async handle(req: Request, res: Response):Promise<Response>{
        const {id}=req.params
        const category=await this.showCategoryUserCase.execute(id)
        return res.status(200).json(category)
    }
}