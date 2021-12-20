import { getRepository, Repository } from "typeorm";
import { CategoryRepository } from "../../categories/repositories/categoryRepository";
import { IProductCategory } from "../../product_category/Protocols/IProduct_Category";
import { ProductCategoryRepository } from "../../product_category/Repository/productCategoryRepository";
import { Product } from "../mapper/product";
import { IProduct } from "../Protocols/IProduct";
import { IProductRepository } from "../Protocols/IProductRepository";


export class ProductRepository implements IProductRepository {
    private repository: Repository<Product>
    constructor() {
        this.repository = getRepository(Product)
    }
    async create({ id, name, img_url,price,qtd, category_id }: IProduct): Promise<void> {
        const product = this.repository.create({ id, name,img_url, price,qtd })
        await this.repository.save(product)

        const productCategoryRepository = new ProductCategoryRepository()

        //Se for cadatrar um novo
        if (!id) {
            if (category_id && category_id.length) {
                const categoryRepository = new CategoryRepository()
                category_id.forEach(async c => {
                    let category = await categoryRepository.findById(c)
                    console.log({ products: product, categories: category })
                    await productCategoryRepository.create({ products: product, categories: category })
                })
            }


        } else {
            // SE FOR ATUALIZAR E TIVER PASSANDO AS CATEGORIAS 
            if (category_id.length > 0) {
                const categoryRepository = new CategoryRepository()
                const products = await productCategoryRepository.findByProductId(product.id)
                if (products) {
                    products.forEach(async p => {
                        await productCategoryRepository.deleteProductIdAndCategoryId(p.products.id, p.categories.id)
                    })
                }
                category_id.forEach(async c => {
                    let category = await categoryRepository.findById(c)
                    console.log({ products: product, categories: category })
                    await productCategoryRepository.create({ products: product, categories: category })
                })

            }
            // SE FOR ATUALIZAR E NÃO PASSAR AS CATEGORIAS
            else {
                const products = await productCategoryRepository.findByProductId(product.id)
                if (products) {
                    products.forEach(async p => {
                        await productCategoryRepository.deleteProductIdAndCategoryId(p.products.id, p.categories.id)
                    })
                }

            }

        }

    }
    async updateQtd(product:IProduct):Promise<void>{
        await this.repository.save(product)
    }
    async show(): Promise<Array<IProductCategory>> {
        const productCategoryRepository=new ProductCategoryRepository()

        const products = await productCategoryRepository.show()
        console.log(products)
        return products
    }
    async findOneProduct(id: string): Promise<IProduct> {
        const product = await this.repository.findOne(id)
        return product
    }
    async findById(id: string): Promise<Array<IProductCategory>> {
        const productCategoryRepository=new ProductCategoryRepository()
        const product = await productCategoryRepository.findByProductId(id)
        return product
    }
    async findByName(name: string): Promise<IProduct> {
        const product = await this.repository.findOne({ name })
        return product
    }
    async delete(id: string): Promise<void> {
        await this.repository.delete(id)
    }
}