import { hash } from 'bcrypt';
import { AppErros } from '../../../../errors/AppErros';
import { IUser } from '../../Protocols/IUser';
import { IUserRepository } from '../../Protocols/IUserRepository';
import { ICreateUserUserCase } from './../../Protocols/CreateUser/ICreateUserUserCase';
export class CreateUserUserCase implements ICreateUserUserCase{
    constructor(private userRepository:IUserRepository){}
    async execute({name,login,address,email,password,isAdmin}:IUser):Promise<void>{
        const user = await this.userRepository.findByEmail(email)
        if(!!user){
            throw new AppErros('User already exists')
        }
        const passwordHash = await hash(password,8)
        await this.userRepository.create({ name, login, address, email, password:passwordHash, isAdmin })

    }
}