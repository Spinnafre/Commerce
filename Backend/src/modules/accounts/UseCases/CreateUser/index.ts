import { CreateUserUserCase } from './CreateUserUserCase';
import { CreateUserController } from "./CreateUserController"
import { UserRepository } from '../../repositories/UserRepository';
import { ICreateUserController } from '../../Protocols/CreateUser/ICreateUserController';

export default ():ICreateUserController=>{
    const userRepository=new UserRepository()
    const userUserCase=new CreateUserUserCase(userRepository)
    const createUserController=new CreateUserController(userUserCase)
    return createUserController
}