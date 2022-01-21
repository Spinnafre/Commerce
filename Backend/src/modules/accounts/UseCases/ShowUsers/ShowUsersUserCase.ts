import { IUser } from "../../Protocols/IUser";
import { IUserRepository } from "../../Protocols/IUserRepository";
import { IShowUsersUserCase } from "../../Protocols/showUser/IShowUsersUserCase";

export class ShowUsersUserCase implements IShowUsersUserCase{
    constructor(private userRepository: IUserRepository){}
    async execute(): Promise<Array<IUser>>{
        const users=this.userRepository.show()
        return users
    }
}