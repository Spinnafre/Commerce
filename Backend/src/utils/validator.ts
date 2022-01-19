import { AppErros } from './../errors/AppErros';
// Check password is egual to confirmPassword
function egualOrError(valueA:string,valueB:string,msg:string):void{
    if(valueA !== valueB) throw new AppErros(msg)
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
    throw new AppErros(msg)
}

export{egualOrError,checkExists,notExistsOrError}