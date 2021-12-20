import { NextFunction, Request, Response } from "express";
import { AppErros } from '../errors/AppErros';
import { UserRepository } from "../modules/accounts/repositories/UserRepository";

export async function userIsAdmin(req:Request, res: Response, next:NextFunction) {
    const {id}=req.user
    const userRepository=new UserRepository()
    const user=await userRepository.findById(id)
    if(!user.isAdmin){
        throw new AppErros('User is not an administrator')
    }
    return next()
}