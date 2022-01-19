import { IRequestProductImageUseCase,IProductImageUseCase } from '../../Protocols/IProductImage/IProductImage';
import { IStorageProvider } from './../../../../shared/container/providers/StorageProvider/Protocols/IStorageProvider';

export class UploadProductImageUseCase implements IProductImageUseCase{
    constructor(
        private storageProvider: IStorageProvider
    ){}
    async execute({ image }: IRequestProductImageUseCase): Promise<void> {
        await this.storageProvider.save(image,'products')
        return
    }

}