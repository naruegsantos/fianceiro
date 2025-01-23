import { IRecord } from "./components/types"

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
    name:"empréstimo bancário",
    value:2000,
    expiration:new Date().toLocaleDateString("pt-BR")
  },
  {
    id:2,
    name:"IPVA",
    value:157,
    expiration: new Date( new Date().setDate( new Date().getDate() + 30 * 6)).toLocaleDateString("pt-BR")
  },
  {
    id:3,
    name:"Cartão de crédito",
    value:157,
    expiration: new Date( new Date().setDate(20)).toLocaleDateString("pt-BR")
  }
]


const recordsMock:IRecord[] = [
  {
    id:1,
    label:"Salaário",
    value:500,
    type: "expense",
    cameFrom:
    wentTo:number
  }

]