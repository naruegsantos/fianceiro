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