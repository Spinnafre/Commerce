export interface IProduct{
    id?: string,
    name: string,
    price: number,
    img_url?:string,
    qtd?: number,
    created_at?:Date,
    category_id?:string[]
    oldCategories?:string[],
    updated_at?:Date,
}   