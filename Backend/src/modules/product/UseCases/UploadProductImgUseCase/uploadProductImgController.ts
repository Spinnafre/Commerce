import { IProductImageUseCase } from './../../Protocols/IProductImage/IProductImage';
import { Response,Request } from 'express';

export class UploadProductImagesController{
    constructor (private productImageUseCase:IProductImageUseCase){}
    async handle(req: Request, res: Response):Promise<Response>{
        console.log(req.file);
        const image=req.file.filename
        console.log('UploadProductImagesController -> image -> ',image);
        await this.productImageUseCase.execute({image})
        return res.status(201).json({image_URL:`http://localhost:3333/uploads/${image}`})
    }
}