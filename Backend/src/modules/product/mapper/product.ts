import { Column, CreateDateColumn, Entity, PrimaryColumn, UpdateDateColumn } from "typeorm";
import {v4 as uuid4} from 'uuid'
import { Category } from "../../categories/mapper/categories";
import { IProduct } from "../Protocols/IProduct";
@Entity('products')
export class Product implements IProduct{
    @PrimaryColumn()
    id:string
    @Column()
    name:string
    @Column()
    img_url: string;
    @Column()
    price:number
    @Column()
    qtd:number
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