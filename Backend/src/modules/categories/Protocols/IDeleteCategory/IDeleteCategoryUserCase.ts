export interface IDeleteCategoryUserCase{
    execute(id:string):Promise<void>
}