/*export interface IStorageProvider{
    save(file:string,folder:string):Promise<string>,
    // delete(file:string,folder:string):Promise<string>
}*/

export abstract class StorageProvider{
    protected name:string;
    abstract save(file:string,folder:string):Promise<string>
    abstract delete(file:string,folder:string):Promise<string>
}