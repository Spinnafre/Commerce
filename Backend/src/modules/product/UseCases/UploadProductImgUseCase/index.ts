import { localStorageProvider } from './../../../../shared/container/providers/StorageProvider/LocalStorageProvider';
import { UploadProductImagesController } from './uploadProductImgController';
import { UploadProductImageUseCase } from './uploadProductImgUseCase';

const provider={
    local:localStorageProvider.getInstance()
}
export default ()=>{
    const storage= provider['local']
    const productImageUseCase=new UploadProductImageUseCase(storage)
    const productImageController=new UploadProductImagesController(productImageUseCase)
    return productImageController
}