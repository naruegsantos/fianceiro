import Image from "next/image";
import Cards from "./components/cards";
import { IAsset, ILiabilities } from "./components/types";
import { FaBrain, FaLaptopCode, FaRedhat } from "react-icons/fa";
import { liabilitiesMock, assetsMock } from "./mock";
import { IoIosPerson } from "react-icons/io";
import Link from "next/link";



export default function Home() {
  return (
    <>
      <header className="shadow-md bg-dark border-b-4 border-dotted h-80 flex flex-col items-center justify-center">
        <div className=" text-5xl md:text-6xl drop-shadow-lg title ease-in flex w-fit gap-[-5rem]">
          <h1 className="mr-[-1.5rem]">Fianceiro</h1>
          <span className="rotate-[20deg]"><FaRedhat style={{color:"var(--hightlight)"}}/></span>
        </div>
        <span className="text-light text-lg drop-shadow-sm ">contabilidade simples e certeira</span>
      </header> 
      <main className="flex flex-col items-center mt-10">
        <div className="w-[90%] mb-10 text-center">
          <h1 className="text-2xl md:text-5xl">
            Não subestime a tarefa de ter uma vida financeira <strong className="text-light">saudável!</strong>
          </h1>
          <h2 className="md:text-4xl mt-5  ">Ajudamos você com isso</h2>
        </div>
        <section className="flex justify-center md:justify-center my-40 gap-20 flex-wrap w-[90%]">
          <Link href={"/consultoria"} className="w-44  hover:scale-110 hover:hue-rotate-180 hover:bg-light h-44 flex flex-col justify-center items-center rounded-3xl font-bold text-xl bg-white transition text-black">
            <FaBrain style={{fontSize:"2rem"}}/>
            <span>consultoria</span>
          </Link>
          <Link href={"/plataforma"} className="w-44 h-44 cursor-pointer text-center hover:scale-110 hover:hue-rotate-30 self-start  flex flex-col justify-center items-center rounded-3xl font-bold text-xl bg-purple-500 transition text-white">
            <FaLaptopCode style={{fontSize:"2rem"}}/>
            <span>plataforma profissional</span>
          </Link>
          <Link href={"/serviço"} className="w-44 h-44 text-center hover:scale-110 hover:hue-rotate-30 self-start  flex flex-col justify-center items-center rounded-3xl font-bold text-xl bg-dark transition text-hightlight">
            <IoIosPerson style={{fontSize:"2rem"}}/>
            <span>serviço contábil</span>
          </Link>
          
        </section>
        <Cards liabilities={liabilitiesMock} assets={assetsMock}/>
        <section className=" text-center drop-shadow-md dark:text-black shadow-black  bg-white m-20 py-20 shadow-inner w-full p-4" >
          <h1 className=" text-center text-5xl md:text-6xl">Tenha a sua vida finanecira nas suas <strong className="drop-shadow-lg text-hightlight">mãos!</strong>  </h1>
          <Link href={"/signup"} className="underline decoration-dashed decoration-[2px] text-xl decoration-hightlight">Junte-se a nós</Link>
        </section>
      </main>
      <footer className="dark:bg-dark text-white h-[10vh]">
        <div>

        </div>
        <div></div>
        <div></div>
      </footer>
    </>
  );
}
