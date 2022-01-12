import express, { NextFunction, Request, Response } from 'express';
import {resolve} from 'path'
import "express-async-errors";
import swaggerUi from "swagger-ui-express";
import swaggerFile from '../src/swagger.json'
import cors from "cors";
import "reflect-metadata";

import createConnection from './database'
import { AppErros } from './errors/AppErros';
import {userRouter} from './routes/userRoutes.routes'
import { authRouter } from './routes/authRoute.routes';
import { productRouter } from './routes/productRoutes.routes';
import { categoryRouter } from './routes/categoryRoutes.routes';
import { salesRouter } from './routes/salesRoutes.routes';
import uploadConfig from './config/upload'

createConnection()
.then(db=>console.log(`Conectado ao ${db.driver.database}`))
.catch(err=>console.log(err))

const app = express();

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors())


app.use(userRouter)
app.use(authRouter)
app.use(productRouter)
app.use(categoryRouter)
app.use(salesRouter)
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.use('/uploads',express.static(`${uploadConfig.tmpFolder}/products`))

app.use((err:Error, req:Request, res: Response,next:NextFunction) => {
    if(err instanceof AppErros){
        return res.status(err.statusCode).json({msg:err.msg})
    }
    return res.status(500).json({msg:err.message})
})

export {app}