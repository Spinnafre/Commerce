import { IUser } from "../../Protocols/IUser";
import { IUserRepository } from "../../Protocols/IUserRepository";
import { IShowUserUserCase } from "../../Protocols/showUser/IShowUserUserCase";

export class ShowUserUserCase implements IShowUserUserCase{
    constructor(private userRepository: IUserRepository){}
    async execute(id:string): Promise<IUser>{
        const user=this.userRepository.findById(id)
        return user
    }
}