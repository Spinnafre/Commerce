import { Response, Request } from 'express';
import { IDeleteCategoryUserCase } from '../../Protocols/IDeleteCategory/IDeleteCategoryUserCase';

export class DeleteCategoryController{
    constructor(private deleCategoryUserCase:IDeleteCategoryUserCase){}
    async handle(req: Request, res: Response):Promise<Response>{
        const {id}=req.params
        await this.deleCategoryUserCase.execute(id)
        return res.status(200).json({msg:`Category deleted`})
    }
}