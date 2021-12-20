export interface IDeleteSaleUseCase{
    execute(id:string):Promise<void>
}