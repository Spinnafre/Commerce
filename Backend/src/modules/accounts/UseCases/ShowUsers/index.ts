import { UserRepository } from "../../repositories/UserRepository"
import { ShowUsersController } from "./ShowUsersController"
import { ShowUsersUserCase } from "./ShowUsersUserCase"

export default ():ShowUsersController=>{
    const userRepository=new UserRepository()
    const showUserUserCase=new ShowUsersUserCase(userRepository)
    const showUsersController= new ShowUsersController(showUserUserCase)
    return showUsersController
}