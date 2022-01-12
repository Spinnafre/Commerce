export interface IRequestProductImageUseCase{
    image:string
}
export interface IProductImageUseCase{
    execute({image}:IRequestProductImageUseCase): Promise<void>;
}