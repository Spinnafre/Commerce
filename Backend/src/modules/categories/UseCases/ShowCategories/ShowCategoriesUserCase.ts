import { ICategoryRepository } from '../../Protocols/ICategoryRepository';
import { ICategory } from '../../Protocols/ICategories';
import { IShowCategoriesUserCase } from '../../Protocols/IShowCategories/IShowCategoriesUserCase';


export class ShowCategoriesUserCase implements IShowCategoriesUserCase{
    constructor(private categoriesRepository: ICategoryRepository){}
    async execute(): Promise<Array<ICategory>>{
        const categories=this.categoriesRepository.show()
        return categories
    }
}