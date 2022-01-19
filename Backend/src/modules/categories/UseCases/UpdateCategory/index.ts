import { CategoryRepository } from "../../repositories/categoryRepository"
import { UpdateCategoryController } from "./UpdateCategoryController"
import { UpdateCategoryUseCase} from "./UpdateCategoryUseCase"


export default ()=>{
    const categoryRepository= new CategoryRepository()
    const updateCategoryUseCase= new UpdateCategoryUseCase(categoryRepository)
    const updateCategoryController= new UpdateCategoryController(updateCategoryUseCase)
    return updateCategoryController
}