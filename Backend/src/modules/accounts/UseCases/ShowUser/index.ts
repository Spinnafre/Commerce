import { UserRepository } from "../../repositories/UserRepository"
import { ShowUserController } from "./ShowUserController"
import { ShowUserUserCase } from "./ShowUserUserCase"

export default ():ShowUserController=>{
    const userRepository=new UserRepository()
    const showUserUserCase=new ShowUserUserCase(userRepository)
    const showUsersController= new ShowUserController(showUserUserCase)
    return showUsersController
}