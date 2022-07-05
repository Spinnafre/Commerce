import { AppErrors } from '../errors/AppErrors';
// Check password is egual to confirmPassword
function egualOrError(valueA:string,valueB:string,msg:string):void{
    if(valueA !== valueB) throw new AppErrors(msg)
}
function checkExists<T>(value:T,msg:string):void{
    if(!value) throw msg
    if(Array.isArray(value) && value.length===0) throw msg
    if(typeof value === 'string' && !value.trim()) throw msg
}
function notExistsOrError<T>(value:T,msg:string):void{
    try {
        checkExists(value,msg)
    } catch (error) {
        return
    }
    throw new AppErrors(msg)
}

export{egualOrError,checkExists,notExistsOrError}