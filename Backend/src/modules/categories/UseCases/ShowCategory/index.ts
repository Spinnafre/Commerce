import { CategoryRepository} from "../../repositories/categoryRepository"
import {ShowCategoryController} from "./ShowCategoryController"
import { ShowCategoryUserCase } from "./ShowCategoryUserCase"

export default ():ShowCategoryController=>{
    const categoryRepository=new CategoryRepository()
    const showCategoryUserCase=new  ShowCategoryUserCase( categoryRepository)
    const showCategoryController= new ShowCategoryController(showCategoryUserCase)
    return showCategoryController
}