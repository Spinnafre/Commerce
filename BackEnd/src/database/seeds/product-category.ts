import {v4 as uuid4} from 'uuid'
import createConnection from '../index'


async function createSeedProductCategory(product_uuid:string,category_uuid:string) {
    const connection=await createConnection()
    try {
        await connection.query(`INSERT INTO product_category(id,product_id,category_id,created_at)
    VALUES('${uuid4()}','${product_uuid}','${category_uuid}','now()')
    `)
    } catch (error) {
        await connection.close()
        throw `[ERROR SEED PRODUCT-CATEGORY]-${error.message}`
        
    }
    await connection.close()
}
export{createSeedProductCategory}