import { getRepository, Repository } from "typeorm";
import { Category} from "../mapper/categories";
import { ICategory } from "../Protocols/ICategories";
import { ICategoryRepository } from "../Protocols/ICategoryRepository";


export class CategoryRepository implements ICategoryRepository {
    private repository: Repository<Category>
    constructor() {
        this.repository = getRepository(Category)
    }
    async create({ id,name }: ICategory): Promise<void> {
        const category = this.repository.create({ id,name })
        await this.repository.save(category)
    }
    async show(): Promise<Array<ICategory>> {
        const categories=await this.repository.find()
        return categories
    }
    async findById(id: string): Promise<ICategory> {
        const category=await this.repository.findOne(id)
        return category
    }
    async findByName(name: string): Promise<ICategory> {
        const category=await this.repository.findOne({name})
        return category
    }
    async delete(id: string): Promise<void> {
        await this.repository.delete(id)
    }
}