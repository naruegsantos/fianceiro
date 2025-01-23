import Image from "next/image";
import Cards from "./components/cards";
import { IAsset, ILiabilities } from "./components/types";
import { FaRedhat } from "react-icons/fa";

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

export default function Home() {
  return (
    <>
      <header className="shadow-md bg-[#528C18] border-b-4 border-dotted h-80 flex flex-col items-center justify-center">
        <div className="text-6xl drop-shadow-lg title ease-in flex w-fit gap-[-5rem]">
          <h1 className="mr-[-1.5rem]">Fianceiro</h1>
          <span className="rotate-[20deg]"><FaRedhat style={{color:"var(--hightlight)"}}/></span>
        </div>
        <span className="text-[#FFD591] drop-shadow-sm ">contabilidade simples e certeira</span>
      </header> 
      <main className="flex flex-col items-center mt-10">
        <Cards liabilities={liabilitiesMock} assets={assetsMock}/>
      </main>
    </>
  );
}
