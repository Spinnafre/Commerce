
import { ICreateCategoryUserCase } from '../../Protocols/CreateCategory/ICreateCategoryUserCase';
import { ICategoryRepository } from '../../Protocols/ICategoryRepository';
import { ICategory } from '../../Protocols/ICategories';
import { AppErros } from '../../../../errors/AppErros';


export class CreateCategoryUserCase implements ICreateCategoryUserCase{
    constructor(private categoryRepository:ICategoryRepository){}
    async execute({name}:ICategory):Promise<void>{
        const category = await this.categoryRepository.findByName(name)
        if(!!category){
            throw new AppErros('Category already exists')
        }
        await this.categoryRepository.create({ name })

    }
}