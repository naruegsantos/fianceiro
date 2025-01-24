import { FaRedhat } from "react-icons/fa";
import Cards from "../components/cards";
import { assetsMock, liabilitiesMock } from "../mock";

export default function PlataformPage() {
  return(
    <>
      <header>
        <h1 className="mr-[-1.5rem]">Fianceiro</h1>
        <span className="rotate-[20deg]"><FaRedhat style={{color:"var(--hightlight)"}}/></span>
      </header>
      <Cards assets={assetsMock} liabilities={liabilitiesMock} />
    </>
  )
}