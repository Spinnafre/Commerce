import { SaleProduct } from './../mapper/salesProduct';
import { getRepository, Repository } from "typeorm";
import { ISaleProductRepository } from "../Protocols/ISalesRepository";
import { ISaleProduct } from '../Protocols/ISaleProduct';



export class SaleProductRepository implements ISaleProductRepository {
    private repository: Repository<SaleProduct>
    constructor() {
        this.repository = getRepository(SaleProduct)
    }
    async create({ id, products, sales, qtd }: ISaleProduct): Promise<void> {
        const saleProduct = this.repository.create({ products, sales, qtd })
        await this.repository.save(saleProduct)
    }
    async show(): Promise<Array<ISaleProduct>> {
        const salesProducts = await this.repository.find({ relations: ['sales', 'products'] })
        return salesProducts
    }
    async findById(id: string): Promise<ISaleProduct> {
        const saleProduct = await this.repository.findOne(id)
        return saleProduct
    }
    async findBySaleId(sale_id: string): Promise<ISaleProduct> {

        const saleProduct = await this.repository.findOne({
            where: {
                sales: { id: sale_id }
            }, 
            relations: ['sales', 'products']
        })
        return saleProduct
    }
    async findByProductId(product_id: string): Promise<Array<ISaleProduct>> {
        const saleProduct = await this.repository.find({ 
            where: {
                products: { id: product_id }
            }, 
            relations: ['sales', 'products'] })
        return saleProduct
    }
    async delete(id: string): Promise<void> {
        await this.repository.delete(id)
    }

}