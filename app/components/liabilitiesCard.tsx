import { GrPowerCycle, GrBarChart, GrCircleAlert } from "react-icons/gr";

import { ILiabilities } from "./types";

export default function LiabilitiesCard({ data }: { data: ILiabilities[] }) {

  return (
    <div className="flex gap-5 flex-col lg:flex-row lg:justify-center items-center ">
      <h1 className="md:text-5xl text-4xl text-wrap decoration-[5px] w-[90%] md:w-fit  ">
        Suas contas <br /> na <strong className="text-light">ponta do lápis</strong>
      </h1>
      <div className={`p-4 md:text-xl self-center text-black  border-white bg-white lg:w-[35%] w-[90%] rounded-xl shadow-lg shadow-shadow`}>
        <h1 className="text-3xl pl-2 pb-2">Passivos</h1>
        <div className=" table table-fixed w-full  divide-y divide-white">
          <div className="table-header-group divide-x divide-y">
            <div className="table-cell text-center border-t "></div>
            <div className="table-cell text-center font-bold">valor</div>
            <div className="table-cell text-center font-bold">vencimento</div>
          </div>
          <div className="table-row-group divide-y divide-x">
            {data.map((i) => (
              <div key={i.id} className="table-row divide-y divide-x ">
                <div className="table-cell ont-bold px-2  ">{i.name}</div>
                <div className="table-cell text-center ">
                  {
                    new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(i.value,)
                  }
                </div>
                <div className="table-cell ">
                  <span className="flex items-center  justify-center gap-2">
                    {/* no working, needs manual parsing */}
                    {i.expiration}
                    {new Date(i.expiration) > new Date() ?
                      <GrCircleAlert style={{ color: "yellow" }} />
                      : ""
                    }
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>

  )
}