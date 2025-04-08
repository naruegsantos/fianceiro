import { IAsset, ILiabilities, IRecord } from "./components/types"

const assetsMock:IAsset[] = [
  {
    name:"Bank A",
    value:20000,
    type:true, // true if curent, false if convertible
    id:1, 
  },
  {
    name:"Investiments",
    value:7000,
    type:false,
    id: 2,
  },
  {
    name:"Cash",
    value:75.50,
    type:true,
    id:3, 
  },
]

const liabilitiesMock:ILiabilities[] = [
  {
    id:1,
    name:"Empréstimos",
    value:2000,
    expiration:new Date().toLocaleDateString("pt-BR")
  },
  {
    id:2,
    name:"Impostos a pagar",
    value:557,
    expiration: new Date( new Date().setDate( new Date().getDate() + 30 * 6)).toLocaleDateString("pt-BR")
  },
  {
    id:3,
    name:"Moradia",
    value:1200,
    expiration: new Date( new Date().setDate(20)).toLocaleDateString("pt-BR")
  },
  {
    id:4,
    name:"Cartão de crédito",
    value:900,
    expiration: new Date( new Date().setDate(20)).toLocaleDateString("pt-BR")
  }
]



export {assetsMock, liabilitiesMock}
  // const recordsMock:IRecord[] = [
  //   {
  //     id:1,
  //     label:"Salaário",
  //     value:500,
  //     type: "expense",
  //     cameFrom:
  //     wentTo:number
  //   }

  // ]