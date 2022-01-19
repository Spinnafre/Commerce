import { AppErros } from "../../../../errors/AppErros";
import { IDeleteUserUserCase } from "../../Protocols/DeleteUser/IDeleteUserUserCase";
import { IUserRepository } from "../../Protocols/IUserRepository";


export class DeleteUserUserCase implements IDeleteUserUserCase{
    constructor(private userRepository: IUserRepository){}
    async execute(id:string): Promise<void>{
        const user=await this.userRepository.findById(id)
        if(!user){
            throw new AppErros('User not exists')
        }
        await this.userRepository.delete(id)
    }
}