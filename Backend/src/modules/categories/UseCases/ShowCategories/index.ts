import { CategoryRepository } from "../../repositories/categoryRepository"
import {ShowCategoriesController} from "./ShowCategoriesController"
import { ShowCategoriesUserCase } from "./ShowCategoriesUserCase"

export default ():ShowCategoriesController=>{
    const categoriesRepository=new CategoryRepository()
    const showCategorisUserCase=new  ShowCategoriesUserCase( categoriesRepository)
    const showCategoriesController= new ShowCategoriesController(showCategorisUserCase)
    return showCategoriesController
}