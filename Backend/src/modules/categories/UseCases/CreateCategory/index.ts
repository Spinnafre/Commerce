import {CreateCategoryUserCase} from './CreateCategoryUserCase'
import { CreateCategoryController} from "./CreateCategoryController"
import { ICreateCategoryController } from '../../Protocols/CreateCategory/ICreateCategoryController';
import { CategoryRepository } from '../../repositories/categoryRepository';

export default ():ICreateCategoryController=>{
    const categoryRepository=new CategoryRepository()
    const categoryUserCase=new CreateCategoryUserCase(categoryRepository)
    const createCategoryController=new CreateCategoryController(categoryUserCase)
    return createCategoryController
}