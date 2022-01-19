import { Response, Request } from 'express';

interface IUpdateProductUseCase{
    execute({id,category_name}:{id:string,category_name:string}):Promise<void>
}

export{IUpdateProductUseCase}