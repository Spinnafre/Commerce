import { SalesRepository } from '../../Repository/salesRepository';
import { DeleteSaleController } from './DeleteSaleController';
import { DeleteSaleUserCase } from './DeleteSaleUserCase';


export default ():DeleteSaleController=>{
    const salesRepository=new SalesRepository()
    const deleteSaleUserCase=new DeleteSaleUserCase(salesRepository)
    const deleteSaleController=new DeleteSaleController(deleteSaleUserCase)
    return deleteSaleController
}