"use client"

import { IAccount } from "@/app/(modules)/(account)/types"
import { CreateRecordDto, IRecord, RecordCategories } from "@/app/(modules)/(record)/types"

import { useState } from "react"

export default function RecordInput({accounts, addNewRecord}: {
  accounts:IAccount[], 
  addNewRecord:(data:CreateRecordDto) => void
}) {

  const [inputState, setInputState] = useState(false)
  const [inputData, setInputData] = useState<CreateRecordDto>({
    label:"",
    cameFromId: 0,
    wentToId: 0,
    recordCategory:"EXPENSE",
    date:"",
    value:0,
    description: ""
  })
  
  return (
    !inputState?
      <tr className="h-fit text-center">
        <td className="flex justify-center place-items-center  h-14">
          <div onClick={() => setInputState(true)} className="border rounded-full h-10 w-10 flex justify-center  text-2xl p-0">+</div>
        </td>
      </tr>
        : 
      <>

        <tr className="h-fit overflow-hidden text-black">

          <td className="h-14">
            <input className="h-14 max-w- ps-2" value={inputData.label} onChange={(e) => setInputData({...inputData, label:e.target.value})}  type="text" placeholder="título"/>
          </td>

          <td className="h-14">
            <select className="h-14 ps-2" name="pets" id="pet-select">
              <option value={0}>de onde veio</option>  
            </select>
          </td>
          <td className="h-14">
            <select className="h-14 ps-2" name="pets" id="pet-select">
              <option value={0}>de onde veio</option>  
              {accounts.map((x:IAccount) => (
                <option key={+`${x.id}`} value={+`${x.id}`}>{`${x.label}`}</option>
              ))} 
            </select>
          </td>
          
          <td className="h-14">
            <select className="h-14 ps-2" name="pets" id="pet-select">
              <option value={0}>de onde veio</option>  
              {accounts.map((x:IAccount) => (
                <option key={+`${x.id}`} value={+`${x.id}`}>{`${x.label}`}</option>
              ))} 
            </select>
          </td>

          <td className="h-14">
            <input className="h-14 ps-2" type="number" placeholder="valor"/>
          </td>

          <td className="h-14">
            <input className="h-14 ps-2" type="date" placeholder="data"/>
          </td>

        </tr>

        <tr>
          <td className="h-14 bg-green-600 rounded-md hover:scale-105 transition">
            <button className="p-2 w-full" onClick={() => addNewRecord(inputData)}>confirmar</button>
          </td>
        </tr>

      </>
  )
}