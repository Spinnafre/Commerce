import createConnection from '../index'


async function createSeedProduct(product:string) {
    const connection=await createConnection()
    try {
        await connection.query(`INSERT INTO products(id,name,price,img_url,qtd,created_at)
    VALUES('${product}','PS5',6000,'test.com',500,'now()')
    `)
    } catch (error) {
        await connection.close()
        throw `[ERROR SEED PRODUCT]-${error.message}`
    }
    await connection.close()
}
export{createSeedProduct}
