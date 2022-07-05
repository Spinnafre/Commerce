import { UserRepository } from './../modules/accounts/repositories/UserRepository';
import { NextFunction, Request, Response } from 'express';
import { verify } from 'jsonwebtoken';
import { AppErrors } from '../errors/AppErrors';

interface IToken{
    sub:string,
    exp:number
}

export async function authorizationUser(req:Request, res: Response, next:NextFunction) {
    const authorization=req.headers.authorization
    if(!authorization){
        throw new AppErrors('No authorization',401)
    }

    const [,token] = authorization.split(" ")

    try {
        const {sub:id_user}=verify(token,'934850186e4397c2227e386e48fa40d4a8ee6302') as IToken
        const userRepository=new UserRepository()
        const user=await userRepository.findById(id_user)
        if(!user){
            throw new AppErrors('User not extis',400)
        }
        req.user={
           id:user.id 
        }
        next()
    } catch (error) {
        throw new AppErrors(error,500)
    }

}