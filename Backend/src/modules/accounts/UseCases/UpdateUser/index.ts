import { UserRepository } from "../../repositories/UserRepository"
import { UpdateUsersController } from "./UpdateUserController"
import { UpdateUserUserCase } from "./UpdateUserUserCase"

export default ():UpdateUsersController=>{
    const userRepository =new UserRepository()
    const updateUserUserCase=new UpdateUserUserCase(userRepository)
    const updateUserController=new UpdateUsersController(updateUserUserCase)
    return updateUserController
}