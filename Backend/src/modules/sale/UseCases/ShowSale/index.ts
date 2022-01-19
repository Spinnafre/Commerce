import { SalesRepository } from '../../Repository/salesRepository';
import { ShowSaleController } from './ShowSaleController';
import {  ShowSaleUserCase } from './ShowSaleUserCase';

export default ():ShowSaleController=>{
    const saleRepository=new SalesRepository()
    const showSaleUserCase=new ShowSaleUserCase(saleRepository)
    const showSaleController=new ShowSaleController(showSaleUserCase)
    return showSaleController
}