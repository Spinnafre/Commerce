import { NextFunction, Request, Response } from "express";
import { AppErrors } from '../errors/AppErrors';
import { UserRepository } from "../modules/accounts/repositories/UserRepository";

export async function userIsAdmin(req:Request, res: Response, next:NextFunction) {
    const {id}=req.user
    const userRepository=new UserRepository()
    const user=await userRepository.findById(id)
    if(!user.isAdmin){
        throw new AppErrors('User is not an administrator')
    }
    return next()
}