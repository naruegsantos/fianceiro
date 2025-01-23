import { GrPowerCycle, GrBarChart } from "react-icons/gr";
import { IAsset } from "./types";

export default function AssetsCard({data, direction}:{data:IAsset[], direction?:string}){
    return(
        <div className={`p-4 self-${direction} border-white bg-dark w-[60%] rounded-xl shadow-lg shadow-shadow`}>
          <h1 className="text-4xl pl-2 pb-2">Assets</h1>
          <div className=" text-xl table w-full  divide-y divide-[#0F8C3B]">
            <div className="table-header-group divide-[#0F8C3B] divide-x divide-y">
                <div className="table-cell text-center border-t border-[#0F8C3B]"></div>
                <div className="table-cell text-center font-bold">valor</div>
                <div className="table-cell text-center font-bold">tipo</div>
            </div>
          <div className="table-row-group divide-y divide-x divide-[#0F8C3B]">
              {data.map((i) => (
              <div key={i.id} className="table-row divide-y divide-x divide-[#0F8C3B] ">
                  <div className="table-cell ont-bold px-2  ">{i.name}</div>
                  <div className="table-cell text-center ">
                  {
                      new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(i.value,)
                  }
                  </div>
                  <div className="table-cell ">
                    <span className="flex items-center  justify-center gap-2">
                        {i.type?
                        "current" 
                        : "convertible"
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
    )
}