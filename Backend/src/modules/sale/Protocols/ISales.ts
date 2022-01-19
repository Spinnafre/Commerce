import { Users } from "../../accounts/mapper/user";

export interface ISale{
    id?:string,
    date:Date,
    product_id?:string,
    user_id?:string,
    qtd?:number,
    users?: Users,
    created_at?:Date,
    updated_at?:Date,
}   