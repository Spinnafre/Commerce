import { ISale } from '../ISales';
export interface IShowSaleUseCase{
    execute(id:string):Promise<ISale>
}