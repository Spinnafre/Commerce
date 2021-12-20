export class AppErros{
    public readonly statusCode: number;
    public readonly msg:string
    constructor(msg:string,statusCode: number=400){
        this.statusCode = statusCode;
        this.msg = msg;
    }
}