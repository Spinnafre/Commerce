import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryColumn, UpdateDateColumn } from "typeorm";

import { ISale } from "../Protocols/ISales";
import {v4 as uuid4} from 'uuid'
import { Users } from "../../accounts/mapper/user";
@Entity('sales')
export class Sales implements ISale{
    @PrimaryColumn()
    id:string
    @Column()
    date:Date
    @ManyToOne(()=>Users,{eager:false})
    @JoinColumn({name:"user_id"})
    users: Users
    
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