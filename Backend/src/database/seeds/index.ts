import {createSeedUserAdmin} from './admin'
import { createSeedCategory } from './category'
import { createSeedProduct } from './product'
import { createSeedProductCategory } from './product-category'

const UserUUID='01d1808c-9092-4b25-acd1-a19122959372'
const product_uuid='62981309-9d8a-4ac3-95c7-a25212f49f02'
const category_uuid='e35089d5-e50c-425f-9eba-9effcc77c38e'

createSeedUserAdmin(UserUUID)
.then(_=>createSeedProduct(product_uuid))
.then(_=>createSeedCategory(category_uuid))
.then(_=> createSeedProductCategory(product_uuid,category_uuid))
.catch(err=>{
    console.log(err)
})