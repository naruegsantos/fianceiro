import { GrPowerCycle, GrBarChart, GrCircleAlert } from "react-icons/gr";

import {ILiabilities } from "./types";

export default function LiabilitiesCard({data}:{data:ILiabilities[]}){
    // data.forEach((i) => {
    //     console.log(new Date(i.expiration) <= new Date());
    //     console.log();
    //     // i.expiration.split("/").join("-")
    // })
     
    return(
        <div className={`p-4 self-end bg-white text-black w-[60%] rounded-xl shadow-inner shadow-[rgb(55,55,55)]`}>
          <h1 className="text-3xl pl-2 pb-2">Passivos</h1>
          <div className=" text-xl table w-full  divide-y divide-white">
          <div className="table-header-group divide-x divide-y">
            <div className="table-cell text-center border-t"></div>
            <div className="table-cell text-center font-bold">valor</div>
            <div className="table-cell text-center font-bold">expiração</div>
          </div>
          <div className="table-row-group divide-y">
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
                        {new Date(i.expiration) > new Date()?
                         <GrCircleAlert style={{color:"yellow"}}/>
                        : ""
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