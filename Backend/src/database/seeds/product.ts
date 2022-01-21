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
// createSeedProduct('62981309-9d8a-4ac3-95c7-a25212f49f09')
//     .then(_=>console.log('Product created successfully'))
//     .catch(err=>{
//         console.log(`Error in seed product: `,err.message)
//     })
