import { compare } from 'bcrypt';
import { sign } from 'jsonwebtoken';
import { AppErros } from '../../../../errors/AppErros';
import { IAuthUser } from "../../Protocols/authUser/IAuthUser";
import { IAuthUserUserCase } from "../../Protocols/authUser/IAuthUserUserCase";
import { IUser } from "../../Protocols/IUser";
import { IUserRepository } from "../../Protocols/IUserRepository";

export class AuthUserUserCase implements IAuthUserUserCase{
    constructor(private userRepository:IUserRepository){}
    async execute({email,password}:IUser):Promise<IAuthUser>{
        const user=await this.userRepository.findByEmail(email)
        if(!user){
            throw new AppErros('Email not found')
        }
        const confirmPassword=await compare(password,user.password)
        if(!confirmPassword){
            throw new AppErros('Password incorrect',401)
        }

        const token=sign({},'934850186e4397c2227e386e48fa40d4a8ee6302',{
            subject:user.id,
            expiresIn:'1d'
        }) 

        return{
            user:{
               name:user.name,
               email:user.email 
            },
            token
        }
    }
}