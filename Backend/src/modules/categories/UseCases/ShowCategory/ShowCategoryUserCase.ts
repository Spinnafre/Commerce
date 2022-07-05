import { ICategoryRepository } from '../../Protocols/ICategoryRepository';
import { IShowCategoryUserCase } from '../../Protocols/ShowCategory/IShowCategoryUserCase';
import { ICategory } from '../../Protocols/ICategories';
import { AppErrors } from '../../../../errors/AppErrors';


export class ShowCategoryUserCase implements IShowCategoryUserCase{
    constructor(private categoryRepository: ICategoryRepository){}
    async execute(id:string): Promise<ICategory>{
        const category=await this.categoryRepository.findById(id)
        if(!category){
            throw new AppErrors('Category not exists')
        }
        return category
    }
}