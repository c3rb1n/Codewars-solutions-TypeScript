export class SuccessServerResult {
    constructor (public httpCode: number, public resultObject:Object) {}
}

export class ErrorServerResult {
    constructor (public httpCode: number, public message:string) {}
}

export const getResult = (result: SuccessServerResult | ErrorServerResult) => 
    result.httpCode === 200 ? (<SuccessServerResult>result).resultObject : 
                              (result as ErrorServerResult).message;