import { Response, Request } from 'express';

import {IUpdateProductUseCase} from '../../Protocols/IUpdateCategory/IUpdateCategoryUseCase'

class UpdateCategoryController{

    constructor(private updateCategoryUseCase:IUpdateProductUseCase){}

    async handle(req: Request, res: Response):Promise<Response>{
        const {name}=req.body
        const {id}=req.params

        await this.updateCategoryUseCase.execute({id,category_name:name})

        return res.status(201).json({msg:`Category with id ${id} updated successfully`})
    }
}

export {UpdateCategoryController}