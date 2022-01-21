import { ICategory } from '../ICategories';



export interface IShowCategoriesUserCase{
    execute():Promise<Array<ICategory>>
}