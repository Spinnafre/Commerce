import { Category } from '../../categories/mapper/categories';
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryColumn, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Product } from "../../product/mapper/product";
import { IProductCategory } from "../Protocols/IProduct_Category";
import {v4 as uuid4} from 'uuid'
@Entity('product_category')
export class ProductCategory implements IProductCategory{
    @PrimaryColumn()
    id:string
    @ManyToOne(()=>Product)
    @JoinColumn({name:"product_id"})
    products:Product
    @ManyToOne(()=>Category)
    @JoinColumn({name:"category_id"})
    categories:Category
    @CreateDateColumn()
    created_at:Date
    @UpdateDateColumn()
    updated_at:Date

    constructor(){
        if(!this.id){
            this.id=uuid4()
        }
    }

}