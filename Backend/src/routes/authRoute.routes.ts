import { Router } from 'express';
import authUserController from '../modules/accounts/UseCases/authUser'

const authRouter=Router()

authRouter.post('/session', (req, res) => {
    return authUserController().handle(req, res)
})

export {authRouter}