import { ICategoryRepository } from '../../Protocols/ICategoryRepository';
import { ICategory } from '../../Protocols/ICategories';
import { IDeleteCategoryUserCase } from '../../Protocols/IDeleteCategory/IDeleteCategoryUserCase';
import { AppErros } from '../../../../errors/AppErros';


export class DeleteCategoryUserCase implements IDeleteCategoryUserCase{
    constructor(private categoryRepository: ICategoryRepository){}
    async execute(id:string): Promise<void>{
        const category=await this.categoryRepository.findById(id)
        if(!category){
            throw new AppErros('Category not exists')
        }
        await this.categoryRepository.delete(id)
    }
}