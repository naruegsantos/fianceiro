import { GrPowerCycle, GrBarChart } from "react-icons/gr";
import { IAsset } from "./types";

export default function AssetsCard({data, direction}:{data:IAsset[], direction?:string}){
    return(
        <div className="flex gap-5   flex-col-reverse md:flex-row md:justify-center items-center ">
          <div className={`p-4 self-${direction} border-white bg-dark md:w-[35%] w-[90%] rounded-xl shadow-lg shadow-shadow`}>
            <h1 className="text-4xl w- pb-2">Ativos</h1>
            <div className=" table md:text-xl w-full  divide-y divide-[#0F8C3B]">
              <div className="table-header-group divide-[#0F8C3B] divide-x divide-y">
                <div className="table-cell text-center border-t border-[#0F8C3B]"></div>
                <div className="table-cell text-center font-bold">valor</div>
                <div className="table-cell text-center font-bold">tipo</div>
              </div>
              <div className="table-row-group divide-y divide-x divide-[#0F8C3B]">
                {data.map((i) => (
                  <div key={i.id} className="table-row divide-y divide-x divide-[#0F8C3B] ">
                    <div className="table-cell ">{i.name}</div>
                    <div className="table-cell text-center ">
                      {
                        new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(i.value,)
                      }
                    </div>
                    <div className="table-cell ">
                      <span className="flex items-center  justify-center gap-2">
                        {i.type?
                          "circulante" 
                          : "conversível"
                        }
                        {i.type? 
                          <GrPowerCycle style={{color:"var(--hightlight)"}}/>
                          : <GrBarChart/>
                        }
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <h1 className="md:text-5xl text-4xl md:text-wrap text-nowrap decoration-[5px] w-[80%] md:w-fit  mr-2 decoration-hightlight underline decoration-dashed p-0">
            Nem um centavo fora <br /> de vista
            {/* <span className="decoration-[5px] mr-2 decoration-hightlight underline ">Nem</span> 
            <span className="decoration-[5px] mr-2 decoration-hightlight underline ">um</span> 
            <span className="decoration-[5px] mr-2 decoration-hightlight underline ">centavo</span>
            <span className="decoration-[5px] mr-2 decoration-hightlight underline ">fora</span>   
            <br />
            <span className="decoration-[5px] mr-2 decoration-hightlight underline ">de</span>
            <span className="decoration-[5px] mr-2 decoration-hightlight underline ">vista</span> */}
          </h1>
        </div>
    )
}