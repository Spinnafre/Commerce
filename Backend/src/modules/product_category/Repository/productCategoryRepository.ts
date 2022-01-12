import { getRepository, Repository,createQueryBuilder,getConnection } from "typeorm";
import { Product } from "../../product/mapper/product";
import { ProductCategory } from "../mapper/productCategory";
import { IProductCategoryRepository } from "../Protocols/IProductCategoryRepository";
import { IProductCategory} from "../Protocols/IProduct_Category";

interface ICategories {
    id: string,
    name: string,
    created_at: Date,
    updated_at: Date,
}
interface IProductCategories {
    id: string,
    created_at: Date,
    updated_at: Date,
    products: Product,
    categories: ICategories
}

export class ProductCategoryRepository implements IProductCategoryRepository {
    private repository: Repository<ProductCategory>
    constructor() {
        this.repository = getRepository(ProductCategory)
    }
    async create({ id,products,categories }:any): Promise<void> {
        console.log( products,categories )
        const productCategory = this.repository.create({  id,products,categories })
        await this.repository.save(productCategory)
    }
    async show(): Promise<Array<IProductCategory>> {
        const productsCategories=await this.repository.find({relations:['products','categories']})
        return productsCategories
    }
    async findByProductIdAndCategoryId(product_id:string,category_id:string):Promise<IProductCategories>{
        const productCategory=await this.repository.findOne({
            where:{
                products:{id:product_id},
                categories:{id:category_id}
            },
            relations:['products','categories'],
        
        })
        return productCategory
    }
    async deleteProductIdAndCategoryId(product_id:string,category_id:string):Promise<void>{
        await this.repository
        .createQueryBuilder()
        .delete()
        .from(ProductCategory)
        .where('product_id = :product_id',{product_id:product_id})
        .andWhere('category_id = :category_id',{category_id:category_id})
        .execute()
    }
    async findByProductId(product_id:string):Promise<Array<IProductCategories>>{
        const productCategory=await this.repository.find({
            where:{
                products:{id:product_id},
            },
            relations:['products','categories'],
        
        })
        return productCategory
    }

}