import { GrPowerCycle } from "react-icons/gr";
import { GrBarChart } from "react-icons/gr";
import { IAsset } from "./types";




export default function Cards({assets}:{assets:IAsset[]}) {
  
  return (
    <section>
      <div className="p-4 border-white bg-sky-950 w-1/3 rounded-xl shadow-gray-800 shadow-2xl">
        <h1 className="text-3xl">Assets</h1>
        
        <div className=" table w-full  divide-y divide-white">
          <div className="table-header-group divide-x divide-y">
            <div className="table-cell text-center border-t"></div>
            <div className="table-cell text-center text-2xl">value</div>
            <div className="table-cell text-center text-2xl">type</div>
          </div>
          <div className="table-row-group divide-y">
            {assets.map((i) => (
              <div className="table-row divide-y divide-x">
                <div className="table-cell">{i.name}</div>
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
                      <GrPowerCycle style={{color:"rgb(0,255,0)"}}/>
                      : <GrBarChart/>
                    }
                  </span>
                </div>
              </div>

            ))}
          </div>
        </div>
      </div>
    </section>
  )
}