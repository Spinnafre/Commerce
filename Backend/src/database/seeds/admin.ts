import { hash } from 'bcrypt'
import createConnection from '../index'


async function createSeedUserAdmin(uuid: string) {
    const connection = await createConnection()
    const password = await hash('admin', 8)
    try {
        await connection.query(`INSERT INTO users(id,name,login,address,email,password,"isAdmin",created_at)
    VALUES('${uuid}','Adminzão','admin','Rua x, cidade X','admin@gmail.com','${password}',true,'now()')
    `)
    } catch (error) {
        await connection.close()
        throw `[ERROR CREATE SEED USER ADMIN]-${error.message}`
    }
    await connection.close()
}
export { createSeedUserAdmin }
