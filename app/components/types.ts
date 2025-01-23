export interface IAsset{
    id:number
    name:string
    value:number
    type:boolean //rue if curent, false if convertible
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
    type: "expense" | "revenu" | "transference"
    cameFrom:number,
    wentTo:number
}

