import Image from "next/image";
import Cards from "./components/cards";
import { IAsset } from "./components/types";

const MOCK:IAsset[] = [
  {
    name:"Bank A",
    value:20000,
    type:true, // true if curent, false if convertible
  },
  {
    name:"Investiments",
    value:7000,
    type:false, 
  },
  {
    name:"Cash",
    value:75.50,
    type:true, 
  },
]

export default function Home() {
  return (
    <>
      <header className="shadow-md ] border-b-4 border-dotted h-80 flex flex-col text-center justify-center">
        <h1 className="text-5xl title ease-in">Simple</h1>
        <span>less is more</span>
      </header> 
      <main className="p-6">
        <Cards assets={MOCK}/>
      </main>
    </>
  );
}
