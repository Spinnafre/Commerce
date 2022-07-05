import { IRequestProductImageUseCase,IProductImageUseCase } from '../../Protocols/IProductImage/IProductImage';
import { StorageProvider } from '../../../../shared/container/providers/StorageProvider/Protocols/StorageProvider'

export class UploadProductImageUseCase implements IProductImageUseCase{
    constructor(
        private storageProvider: StorageProvider
    ){}
    async execute({ image }: IRequestProductImageUseCase): Promise<void> {
        await this.storageProvider.save(image,'products')
        return
    }

}