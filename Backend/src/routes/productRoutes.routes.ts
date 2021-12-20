
import express,{ Router } from "express";
import {resolve} from 'path'
import multer from "multer";


import CreateProductController from '../modules/product/UseCases/CreateProduct'
import ShowProductController from '../modules/product/UseCases/ShowProduct'
import ShowProductsController from '../modules/product/UseCases/ShowProducts'
import DeleteProductsController from '../modules/product/UseCases/DeleteProduct'
import UpdateProductsController from '../modules/product/UseCases/UpdateProduct'

import UploadProductImgController from '../modules/product/UseCases/UploadProductImgUseCase'

import { authorizationUser } from "../middlewares/ensureAuthenticated";
import { userIsAdmin } from "../middlewares/ensureAdmin";

import uploadConfig from '../config/upload'

const productRouter=Router()

var upload = multer(uploadConfig)

productRouter.post('/product',authorizationUser,userIsAdmin,(req, res) => {
    return CreateProductController().handle(req, res)
})
productRouter.post('/product/image',authorizationUser,userIsAdmin,upload.single("image"),(req, res) => {
    return UploadProductImgController().handle(req,res)
})

productRouter.patch('/product/:id',authorizationUser,userIsAdmin,(req, res) => {
    return UpdateProductsController().handle(req, res)
})
productRouter.get('/product',(req, res) => {
    return ShowProductsController().handle(req, res)
})
productRouter.get('/product/:id',(req, res) => {
    return ShowProductController().handle(req, res)
})

productRouter.delete('/product/:id',authorizationUser,userIsAdmin,(req, res) => {
    return DeleteProductsController().handle(req, res)
})


export {productRouter}