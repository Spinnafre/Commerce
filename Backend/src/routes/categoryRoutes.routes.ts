
import { Router } from "express";
import CreateCategoryController from '../modules/categories/UseCases/CreateCategory'
import ShowCategoryController from '../modules/categories/UseCases/ShowCategory'
import ShowCategoriesController from '../modules/categories/UseCases/ShowCategories'
import DeleteCategoriesController from '../modules/categories/UseCases/DeleteCategory'

import { authorizationUser } from "../middlewares/ensureAuthenticated";
import { userIsAdmin } from "../middlewares/ensureAdmin";



const categoryRouter=Router()



categoryRouter.post('/category',authorizationUser,userIsAdmin,(req, res) => {
    return CreateCategoryController().handle(req, res)
})
// productRouter.patch('/product',authorizationUser,(req, res) => {
//     return UpdateProductController().handle(req, res)
// })
categoryRouter.get('/category',(req, res) => {
    return ShowCategoriesController().handle(req, res)
})
categoryRouter.get('/category/:id',(req, res) => {
    return ShowCategoryController().handle(req, res)
})
categoryRouter.delete('/category/:id',authorizationUser,userIsAdmin,(req, res) => {
    return DeleteCategoriesController().handle(req, res)
})


export {categoryRouter}