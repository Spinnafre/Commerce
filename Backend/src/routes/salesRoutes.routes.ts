import { Router } from "express";

import CreateSaleController from '../modules/sale/UseCases/CreateSale'
import ShowSalesController from '../modules/sale/UseCases/ShowSales'
import ShowSaleController from '../modules/sale/UseCases/ShowSale'
import DeleteSaleController from '../modules/sale/UseCases/DeleteSale'
import ShowSaleProductController from '../modules/sale/UseCases/ShowSaleProduct'
import { authorizationUser } from "../middlewares/ensureAuthenticated";
import { userIsAdmin } from "../middlewares/ensureAdmin";

const salesRouter=Router()


salesRouter.post('/sales',authorizationUser,userIsAdmin,(req, res) => {
    return CreateSaleController().handle(req, res)
})
salesRouter.get('/sales',authorizationUser,userIsAdmin,(req, res) => {
    return ShowSalesController().handle(req, res)
})
salesRouter.get('/sales/:id',authorizationUser,userIsAdmin,(req, res) => {
    return ShowSaleController().handle(req, res)
})
salesRouter.get('/sales/product/:id',authorizationUser,userIsAdmin,(req, res) => {
    return  ShowSaleProductController ().handle(req, res)
})
salesRouter.delete('/sales/:id',authorizationUser,userIsAdmin,(req, res) => {
    return DeleteSaleController().handle(req, res)
})

export {salesRouter}