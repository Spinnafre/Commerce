import { ICategoryRepository } from '../../Protocols/ICategoryRepository';
import { ICategory } from '../../Protocols/ICategories';
import { IDeleteCategoryUserCase } from '../../Protocols/IDeleteCategory/IDeleteCategoryUserCase';
import { AppErrors } from '../../../../errors/AppErrors';


export class DeleteCategoryUserCase implements IDeleteCategoryUserCase{
    constructor(private categoryRepository: ICategoryRepository){}
    async execute(id:string): Promise<void>{
        const category=await this.categoryRepository.findById(id)
        if(!category){
            throw new AppErrors('Category not exists')
        }
        await this.categoryRepository.delete(id)
    }
}