import { AppErros } from '../../../../errors/AppErros';
import { Users } from '../../../accounts/mapper/user';
import { UserRepository } from '../../../accounts/repositories/UserRepository';
import { ProductRepository } from '../../../product/repositories/productRepository';
import { SaleProductRepository } from '../../../saleProduct/Repository/saleProductRepository';
import { ICreateSaleUserCase } from '../../Protocols/CreateSale/ICreateSaleUserCase';
import { ISale } from '../../Protocols/ISales';
import { ISalesRepository } from '../../Protocols/ISalesRepository';
interface IUsers{
    id: string,
    name: string,
    username: string,
    address: string,
    email: string,
    password: string,
    isAdmin: boolean,
    created_at:Date
}
interface IProducts{
    id: string,
    name: string,
    price: number,
    qtd:number,
    created_at:Date,
    updated_at:Date,
}
// interface ISales{
//     id: string,
//     date: string,
//     users: Users,
//     created_at:Date,
//     updated_at:Date,
// }
export class CreateSaleUserCase implements ICreateSaleUserCase{
    constructor(private saleRepository:ISalesRepository){}
    async execute({id,date,product_id,qtd,user_id}:ISale):Promise<void>{
        if(!date){
            throw new AppErros('Date not specified')
        }
        const userRepository=new UserRepository()
        const users=await userRepository.findById(user_id) as IUsers

        const sales=await this.saleRepository.create({ id,date,users }) as any

        const productRepository=new ProductRepository()
        const products=await productRepository.findOneProduct(product_id) as IProducts

        console.log(products);
        console.log(qtd,' ',products.qtd);
        if(qtd>products.qtd){
            throw new AppErros('Quantity of stock exceeded')
        }
        if(qtd<0){
            throw new AppErros('Quantity is negative')
        }
        products.qtd-=qtd
        await productRepository.updateQtd(products)

        const saleProductRepository=new SaleProductRepository()
        await saleProductRepository.create({products,sales,qtd})
        

    }
}