import { ICategory } from '../ICategories';



export interface IShowCategoryUserCase{
    execute(id:string):Promise<ICategory>
}