import { CategoryRepository} from "../../repositories/categoryRepository"
import {DeleteCategoryController} from "./DeleteCategoryController"
import { DeleteCategoryUserCase} from "./DeleteCategoryUserCase"

export default ():DeleteCategoryController=>{
    const categoryRepository=new CategoryRepository()
    const deleteCategoryUserCase=new  DeleteCategoryUserCase( categoryRepository)
    const deleteCategoryController= new DeleteCategoryController(deleteCategoryUserCase)
    return deleteCategoryController
}