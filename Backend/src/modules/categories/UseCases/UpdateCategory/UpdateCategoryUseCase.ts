import { ICategoryRepository } from '../../Protocols/ICategoryRepository';
import { AppErrors } from '../../../../errors/AppErrors';

interface ICategoryParams{
    id:string,
    category_name:string
}

class UpdateCategoryUseCase{
    constructor(private categoryRepository: ICategoryRepository){}
    
    async execute({id,category_name}:ICategoryParams):Promise<void>{
        const categoryWithSameId=await this.categoryRepository.findById(id)

        if(!categoryWithSameId){
            throw new AppErrors('Category not exists')
        }

        const categoryWithSameName=await this.categoryRepository.findByName(category_name) 
        if(!!categoryWithSameName && category_name === categoryWithSameName.name){
            throw new AppErrors('Category already exists')
        }

        await this.categoryRepository.create({id,name:category_name})
    }
}

export{UpdateCategoryUseCase}