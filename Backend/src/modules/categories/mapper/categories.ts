import { Column, CreateDateColumn, Entity,OneToMany, PrimaryColumn, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import {v4 as uuid4} from 'uuid'
import { Product } from "../../product/mapper/product";
import { ICategory } from "../Protocols/ICategories";
@Entity('categories')
export class Category implements ICategory{
    @PrimaryColumn()
    id:string
    @Column()
    name:string
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