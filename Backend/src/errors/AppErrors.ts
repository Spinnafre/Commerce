export class AppErrors extends Error{
    protected readonly statusCode: number;
    protected readonly isOperational:boolean
    constructor(msg:string,statusCode: number=400,isOperational: boolean=true){
        super(msg);
        this.statusCode = statusCode;
        this.isOperational=isOperational
    }

    public getStatusCode():number{
        return this.statusCode
    }

    public getMessage():string{
        return this.message
    }

    public isOperationalError():boolean{
        return this.isOperational
    }

}
