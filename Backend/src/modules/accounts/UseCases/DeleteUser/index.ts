import { UserRepository } from "../../repositories/UserRepository"
import { DeleteUserController } from "./DeleteUserController"
import { DeleteUserUserCase } from "./DeleteUserUserCase"

export default ():DeleteUserController=>{
    const userRepository = new UserRepository()
    const deleteUserUserCase=new DeleteUserUserCase(userRepository)
    const deleteUserController = new DeleteUserController(deleteUserUserCase)
    return deleteUserController 
}