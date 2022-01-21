import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";
import {v4 as uuid4} from 'uuid'
import { IUser } from "../Protocols/IUser";
@Entity('users')
export class Users implements IUser{
    @PrimaryColumn()
    id:string
    @Column()
    name:string
    @Column()
    login:string
    @Column()
    address:string
    @Column()
    email:string
    @Column()
    password:string
    @Column()
    isAdmin:boolean
    @CreateDateColumn()
    created_at:Date
    constructor(){
        if(!this.id){
            this.id=uuid4()
        }
    }

}