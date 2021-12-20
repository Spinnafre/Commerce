export interface IDeleteProductUseCase{
    execute(id:string):Promise<void>
}