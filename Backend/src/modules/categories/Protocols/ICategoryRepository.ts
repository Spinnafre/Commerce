import { ICategory } from './ICategories';


export interface ICategoryRepository{
    create({id,name}:ICategory):Promise<void>,
    show(): Promise<Array<ICategory>>,
    findById(id:string): Promise<ICategory>,
    findByName(name:string): Promise<ICategory>,
    delete(id:string): Promise<void>
    
}