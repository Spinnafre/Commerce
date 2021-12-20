import multer from "multer"
import { resolve } from 'path'
import crypto from 'crypto'

const tmpFolder = resolve(__dirname, '..', '..', 'tmp')

export default {
    tmpFolder,
    storage: multer.diskStorage({
        //Irá salvar por padrão dentro pasta tmp
        destination: tmpFolder,
        filename: (req, file, cb) => {
            const fileHash = crypto.randomBytes(16).toString('hex')
            const fileName = `${fileHash}-${file.originalname}`
            return cb(null, fileName)
        }
    })


}