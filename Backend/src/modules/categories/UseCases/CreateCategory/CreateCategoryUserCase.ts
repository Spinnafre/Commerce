
import { ICreateCategoryUserCase } from '../../Protocols/CreateCategory/ICreateCategoryUserCase';
import { ICategoryRepository } from '../../Protocols/ICategoryRepository';
import { ICategory } from '../../Protocols/ICategories';
import { AppErrors } from '../../../../errors/AppErrors';


export class CreateCategoryUserCase implements ICreateCategoryUserCase{
    constructor(private categoryRepository:ICategoryRepository){}
    async execute({name}:ICategory):Promise<void>{
        const category = await this.categoryRepository.findByName(name)
        if(!!category){
            throw new AppErrors('Category already exists')
        }
        await this.categoryRepository.create({ name })

    }
}