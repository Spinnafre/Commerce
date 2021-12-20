import { Column, CreateDateColumn, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, PrimaryColumn, UpdateDateColumn } from "typeorm";
import { Product } from "../../product/mapper/product";
import { Sales } from "../../sale/mapper/sales";
import { ISaleProduct } from "../Protocols/ISaleProduct";

@Entity('sale_product')
export class SaleProduct implements ISaleProduct{
    @PrimaryColumn()
    product_id:string
    @PrimaryColumn()
    sale_id:string
    @Column()
    qtd:number
    @ManyToOne(()=>Product)
    @JoinColumn({name:'product_id'})
    products:Product
    @ManyToOne(()=>Sales)
    @JoinColumn({name:'sale_id'})
    sales:Sales
    @CreateDateColumn()
    created_at:Date
    @UpdateDateColumn()
    updated_at:Date



}