import { Response, Request } from 'express';
import { IShowCategoriesUserCase } from '../../Protocols/IShowCategories/IShowCategoriesUserCase';

export class ShowCategoriesController{
    constructor(private showCategoriesUserCase:IShowCategoriesUserCase){}
    async handle(req: Request, res: Response):Promise<Response>{
        const categories=await this.showCategoriesUserCase.execute()
        return res.status(200).json(categories)
    }
}