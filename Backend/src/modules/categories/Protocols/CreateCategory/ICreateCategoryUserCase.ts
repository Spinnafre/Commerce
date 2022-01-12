import { ICategory } from './../ICategories';



export interface ICreateCategoryUserCase{
    execute({id,name}:ICategory):Promise<void>
}