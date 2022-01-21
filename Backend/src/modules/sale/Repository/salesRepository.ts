import { getRepository, Repository} from "typeorm";
import { ISaleProduct } from "../../saleProduct/Protocols/ISaleProduct";
import { SaleProductRepository } from "../../saleProduct/Repository/saleProductRepository";
import { Sales } from "../mapper/sales";
import { ISale } from "../Protocols/ISales";
import { ISalesRepository } from "../Protocols/ISalesRepository";



export class SalesRepository implements ISalesRepository {
    private repository: Repository<Sales>
    constructor() {
        this.repository = getRepository(Sales)
    }
    async create({id,date,users}:ISale): Promise<ISale> {
        const productCategory = this.repository.create({id,date,users})
        await this.repository.save(productCategory)
        return productCategory
    }
    async show(): Promise<Array<ISaleProduct>> {
        const saleProductRepository=new SaleProductRepository()
        const sales=await saleProductRepository.show()
        return sales
    }
    async findById(id:string):Promise<ISaleProduct>{
        const saleProductRepository=new SaleProductRepository()
        const sale=await saleProductRepository.findBySaleId(id)
        return sale
    }
    async findByProductId(product_id:string):Promise<Array<ISaleProduct>>{
        const saleProductRepository=new SaleProductRepository()
        const sales=await saleProductRepository.findByProductId(product_id)
        return sales
    }
    async delete(id:string):Promise<void>{
        await this.repository.delete(id)
    }

}