import { Router } from "express";
import CreateUserController from '../modules/accounts/UseCases/CreateUser'
import ShowUsersController from '../modules/accounts/UseCases/ShowUsers'
import ShowUserController from '../modules/accounts/UseCases/ShowUser'
import UpdateUserController from '../modules/accounts/UseCases/UpdateUser'
import DeleteUserController from '../modules/accounts/UseCases/DeleteUser'
import { authorizationUser } from "../middlewares/ensureAuthenticated";
import { userIsAdmin } from "../middlewares/ensureAdmin";


const userRouter=Router()



userRouter.post('/user',(req, res) => {
    return CreateUserController().handle(req, res)
})
userRouter.patch('/user',authorizationUser,(req, res) => {
    return UpdateUserController().handle(req, res)
})
userRouter.get('/user',authorizationUser,userIsAdmin,(req, res) => {
    return ShowUsersController().handle(req, res)
})
userRouter.get('/user/:id',authorizationUser,userIsAdmin,(req, res) => {
    return ShowUserController().handle(req, res)
})
userRouter.delete('/user/:id',authorizationUser,userIsAdmin,(req, res) => {
    return DeleteUserController().handle(req, res)
})


export {userRouter}