import { ICategoryRepository } from '../../Protocols/ICategoryRepository';
import { IShowCategoryUserCase } from '../../Protocols/ShowCategory/IShowCategoryUserCase';
import { ICategory } from '../../Protocols/ICategories';
import { AppErros } from '../../../../errors/AppErros';


export class ShowCategoryUserCase implements IShowCategoryUserCase{
    constructor(private categoryRepository: ICategoryRepository){}
    async execute(id:string): Promise<ICategory>{
        const category=await this.categoryRepository.findById(id)
        if(!category){
            throw new AppErros('Category not exists')
        }
        return category
    }
}