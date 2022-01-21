import { getRepository, Repository } from "typeorm";
import { Users } from "../mapper/user";
import { IUser } from "../Protocols/IUser";
import { IUserRepository } from "../Protocols/IUserRepository";

export class UserRepository implements IUserRepository {
    private repository: Repository<Users>
    constructor() {
        this.repository = getRepository(Users)
    }
    async create({ id,name, login, address, email, password, isAdmin }: IUser): Promise<void> {
        const user = this.repository.create({ id,name, login, address, email, password, isAdmin })
        await this.repository.save(user)
    }
    async show(): Promise<Array<IUser>> {
        const users=await this.repository.find()
        return users
    }
    async findById(id: string): Promise<IUser> {
        const user=await this.repository.findOne(id)
        return user
    }
    async findByEmail(email: string): Promise<IUser> {
        const user=await this.repository.findOne({email})
        return user
    }
    async delete(id: string): Promise<void> {
        await this.repository.delete(id)
    }
}