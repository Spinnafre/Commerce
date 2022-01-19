import { SalesRepository } from '../../Repository/salesRepository';
import { CreateSaleController } from './CreateSaleController';
import { CreateSaleUserCase } from './CreateSaleUserCase';

export default ():CreateSaleController=>{
    const saleRepository=new SalesRepository()
    const userUserCase=new CreateSaleUserCase(saleRepository)
    const createSaleController=new CreateSaleController(userUserCase)
    return createSaleController
}