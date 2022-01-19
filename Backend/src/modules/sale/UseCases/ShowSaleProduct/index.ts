import { SalesRepository } from '../../Repository/salesRepository';
import { ShowSalesProductController } from './ShowSaleProductController';
import {  ShowSaleProductUserCase} from './ShowSaleProductUserCase';

export default ():ShowSalesProductController=>{
    const saleRepository=new SalesRepository()
    const showSaleProductUserCase=new ShowSaleProductUserCase(saleRepository)
    const showSaleProductController=new ShowSalesProductController(showSaleProductUserCase)
    return showSaleProductController
}