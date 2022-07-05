import { resolve } from 'path';
import fs from 'fs';

import { StorageProvider } from './Protocols/StorageProvider';
import upload from "../../../../config/upload";

export class localStorageProvider extends StorageProvider {
    private static instance: StorageProvider | null = null
    constructor(){
        super()
    }
    async save(file: string, folder: string): Promise<string> {
        // Irá limptar o diretório
        await this.checkDir(`${upload.tmpFolder}/${folder}`)
        // Irá pegar o arquivo que está salvo dentro da tmp,
        //irá jogar ele dentro da pasta especificada
        await fs.promises.rename(
            resolve(upload.tmpFolder, file),
            resolve(`${upload.tmpFolder}/${folder}`, file)
        )
        return file
    }
    public static getInstance() {
        if (!localStorageProvider.instance) {
            localStorageProvider.instance = new localStorageProvider()
        }
        return localStorageProvider.instance
    }
    private async checkDir(path: string): Promise<void> {
        const files = await fs.promises.readdir(path)
        console.log('LocalstorageProvider -> checkDir -> ', files)
        if (files) {
            files.map(async (file) => {
                try {
                    // Irá verificar se o arquivo está no diretório
                    await fs.promises.stat(`${path}/${file}`)
                } catch (error) {
                    // Se não estiver no diretório irá sair do método
                    return
                }
                await fs.promises.unlink(`${path}/${file}`)
            })

        }
    }
    async delete(file: string, folder: string): Promise<string> {
        // Diretório do arquivo que irá apagar
        const filename = resolve(`${upload.tmpFolder}/${folder}`, file)
        try {
            // Irá verificar se o arquivo está no diretório
            await fs.promises.stat(filename)
        } catch (error) {
            // Se não estiver no diretório irá sair do método
            return
        }
        // Irá remover o arquivo 
        await fs.promises.unlink(filename)
    }
}