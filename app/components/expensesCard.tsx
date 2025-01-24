import { GrPowerCycle, GrBarChart, GrCircleAlert } from "react-icons/gr";

import { ILiabilities } from "./types";

export default function LiabilitiesCard({ data }: { data: ILiabilities[] }) {

  return (
    <div className="hidden md:flex  gap-5  flex-col  justify-center place-items-center ">
      
      <div className={`p-4 py-8 text-white  border-white bg-red-500 lg:w-[60%] rounded-xl shadow-lg shadow-shadow`}>
        <h1 className="text-3xl pl-2 pb-2">Despesas</h1>
        <div className=" text-xl table  table-fixed w-full  divide-y divide-white">
          <div className="table-header-group divide-x divide-y">
            <div className="table-cell text-center border-t ">descrição</div>
            <div className="table-cell text-center font-bold ">valor</div>
            <div className="table-cell text-center font-bold">data</div>
            <div className="table-cell text-center font-bold">veio de</div>
            <div className="table-cell text-center font-bold">foi para</div>
          </div>
          <div className="table-row-group divide-y">
            <div className="table-row divide-y divide-x ">
              <div className="table-cell ont-bold px-2  ">Compras do mês</div>
              <div className="table-cell text-center ">
                {
                  new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(700)
                }
              </div>
              <div className="table-cell text-center">
                04/08/2025
              </div>
              <div className="table-cell ">
                Banco A
              </div>
              <div className="table-cell  text-">
                Alimentação
              </div>
            </div>
            <div className="table-row divide-y divide-x ">
              <div className="table-cell ont-bold px-2  ">Celular</div>
              <div className="table-cell text-center ">
                {
                  new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(900)
                }
              </div>
              <div className="table-cell text-center">
                14/01/2025
              </div>
              <div className="table-cell ">
                Cartão de crédito
              </div>
              <div className="table-cell ">
                Comunicação
              </div>
            </div>
            <div className="table-row divide-y divide-x ">
              <div className="table-cell ont-bold px-2  ">Remédio</div>
              <div className="table-cell text-center ">
                {
                  new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(24.50)
                }
              </div>
              <div className="table-cell text-center">
                {new Date().toLocaleDateString("pt-BR")}
              </div>
              <div className="table-cell ">
                Banco A
              </div>
              <div className="table-cell ">
                Saúde
              </div>
            </div>
          </div>
        </div>
      </div>
      <h1 className="text-5xl text-wrap decoration-[5px] w-[90%] md:w-fit  ">
        Suas contas <br /> na <strong className="text-light">ponta do lápis</strong>
      </h1>
    </div>

  )
}