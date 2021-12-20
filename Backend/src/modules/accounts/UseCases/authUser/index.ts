import { AuthUserUserCase } from './authUserUserCase';
import { UserRepository } from "../../repositories/UserRepository"
import { AuthUserController } from './authUserController';

export default ():AuthUserController=>{
    const userRepository=new UserRepository()
    const authUserCase=new AuthUserUserCase(userRepository)
    const authUserController=new AuthUserController(authUserCase)
    return authUserController
}