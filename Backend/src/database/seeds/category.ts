import createConnection from '../index'


async function createSeedCategory(uuid:string) {
    const connection=await createConnection()
    try {
        await connection.query(`INSERT INTO categories(id,name,created_at)
    VALUES('${uuid}','Console','now()')
    `)
    } catch (error) {
        await connection.close()
        throw `[ERROR SEED CATEGORY]-${error.message}`
    }
    await connection.close()
}
export{createSeedCategory}
