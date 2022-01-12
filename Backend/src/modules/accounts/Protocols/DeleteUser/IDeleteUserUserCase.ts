export interface IDeleteUserUserCase{
    execute(id:string): Promise<void>
}