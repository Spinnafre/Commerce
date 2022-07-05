import { AppErrors } from '../../../../errors/AppErrors';
import { hash } from 'bcrypt';
import { IUser } from '../../Protocols/IUser';
import { IUserRepository } from '../../Protocols/IUserRepository';
import { IUpdateUsersUserCase } from './../../Protocols/UpdateUser/IUpdateUserUserCase';
import {egualOrError,checkExists,notExistsOrError} from '../../../../utils/validator'
export class UpdateUserUserCase implements IUpdateUsersUserCase{
    constructor(private userRepository:IUserRepository){}
    async execute({id,name,login,address,email,password,confirmPassword,isAdmin}:IUser):Promise<void>{
        console.log({id,name,login,address,email,password,confirmPassword,isAdmin});
        
        const user = await this.userRepository.findById(id)
        if(!user){
            throw new AppErrors('User not exists')
        }

        try {
            checkExists<string>(name,'Name is not defined')
            checkExists<string>(login,'Login is not defined')
            checkExists<string>(address,'Address is not defined')
            checkExists<string>(email,'Email is not defined')
            checkExists<string>(password,'Password is not defined')
            checkExists<string>(confirmPassword,'ConfirmPassword is not defined')
            egualOrError(password,confirmPassword,'Passwords not matches')
        } catch (error) {
            throw new AppErrors(error)
        }
        user.password =await hash(password,8)

        if(isAdmin){
            user.isAdmin=true
        }else{
            user.isAdmin=false
        }
        user.name=name
        user.login=login
        user.address=address
        user.email=email

        await this.userRepository.create(user)

    }
}