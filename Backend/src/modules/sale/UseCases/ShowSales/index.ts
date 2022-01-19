import { SalesRepository } from '../../Repository/salesRepository';
import { ShowSalesController } from './ShowSaleController';
import {  ShowSalesUserCase} from './ShowSaleUserCase';

export default ():ShowSalesController=>{
    const salesRepository=new SalesRepository()
    const showSalesUserCase=new ShowSalesUserCase(salesRepository)
    const showSalesController=new ShowSalesController(showSalesUserCase)
    return showSalesController
}