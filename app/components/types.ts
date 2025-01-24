export interface IAsset{
    id:number
    name:string
    value:number
    type:boolean //rue if curent, false if convertible
}

export interface IExpense{
    id:number
    name:string
    value:number
}

export interface ILiabilities{
    id:number
    name:string
    value:number
    expiration:string
}

export interface IRecord{
    id:number,
    label:string,
    value:number,
    date:string,
    type: "expense" | "revenu" | "transference" | "liability",
    cameFrom:number,
    wentTo:number
}   

