"use client"

import { IAccount } from "@/app/(modules)/(account)/types"
import { CreateRecordDto, IRecord, RecordCategories } from "@/app/api/(modules)/record/types"

import { useState } from "react"

export default function Input({accounts, addNewRecord}: {
  accounts:IAccount[], 
  addNewRecord:(data:CreateRecordDto) => void
}) {
  

  const [inputState, setInputState] = useState({
    show:false,
    data:{
      label:"",
      cameFromId: 0,
      wentToId: 0,
      recordCategory:"EXPENSE",
      date:"",
      value:"",
      description: ""
    }
  })

  const addHandler = () => {
    console.log({...inputState, date:new Date(inputState.data.date).toLocaleDateString("pt-BR", {timeZone: "UTC"})})
    addNewRecord({...inputState.data, 
      date:new Date(inputState.data.date).toLocaleDateString("pt-BR", {timeZone: "UTC"}),
      value: +inputState.data.value
    })
  }
  
  return (
    !inputState.show?
      <tr className="text-center">
        <td className="flex cursor-pointer place-items-center ">
          <div onClick={() => setInputState({...inputState, show:true})} className="border rounded-full h-10 w-20 hover:scale-90 hover:border-2 transition flex justify-center text-2xl m-2">+</div>
        </td>
      </tr>
        : 
      <>

        <tr className="h-fit overflow-hidden text-black">

          <td className="h-10">
            <input 
              className="h-10 max-w- ps-2" 
              value={inputState.data.label}
              onChange={(e) => setInputState(
                {...inputState, data:{
                  ...inputState.data, label:e.target.value
                }}
              )} 
              type="text" placeholder="título"
              />
          </td>

          <td className="h-10">
            <select 
              onChange={(e) => setInputState(
                {...inputState, data:{
                  ...inputState.data, recordCategory:e.target.value
                }}
              )} 
                className="h-10 ps-2" name="pets" id="pet-select"
            >
              <option value={0}>o que é</option>
              <option value={"EXPENSE"} className="text-white bg-red-700">despesa</option>
              <option value={"REVENUE"} className="text-white bg-green-700">receita</option>
              <option value={"TRANSFERENCE"} className="text-white bg-blue-700">transferência</option>
            </select>
          </td>
          <td className="h-10 w-fit">
            <select onChange={(e) => setInputState(
              {...inputState, data:{
                ...inputState.data, cameFromId:+e.target.value
                }}
              )} 
              className="h-10  ps-2"
              name="pets"
              id="pet-select"
            >
              <option value={0}>de onde veio</option>  
              {accounts.filter((i) => i.accountCategory != "REVENUE").map((x:IAccount) => (
                <option key={+`${x.id}`} value={+`${x.id}`}>{`${x.label}`}</option>
              ))} 
            </select>
          </td>
          
          <td className="h-10">
            <select  onChange={(e) => setInputState(
              {...inputState, data:{
                ...inputState.data, wentToId:+e.target.value
                }}
              )} 
              className="h-10 ps-2"
              name="pets"
              id="pet-select"
            >
              <option value={0}>pra onde foi</option>  
              {accounts.map((x:IAccount) => (
                <option key={x.id} value={x.id}>{x.label}</option>
              ))} 
            </select>
          </td>

          <td className="h-10">
            <input onChange={(e) => setInputState(
              {...inputState, data:{
                ...inputState.data, 
                value:e.target.value.replace(/,/g, '.').replace(/[^\d.]/g, '')
                }}
              )}
              value={inputState.data.value}
              className="h-10 ps-2"
              type="text"
              placeholder="valor"
            />
          </td>

          <td className="h-10">
            <input onChange={(e) => setInputState(
              {...inputState, data: {
                ...inputState.data, date:e.target.value
                }}
              )}
              value={inputState.data.date}
              className="h-10 ps-2"
              type="date"
              placeholder="data"
            />
          </td>

        </tr>

        <tr>
          <td className="">
            <div className="flex justify-evenly">
              <button className=" h-10 w-[45%] bg-green-700 hover:bg-green-400 rounded-md hover:scale-105 transition" onClick={() => addHandler()}>confirmar</button>
              <button className=" h-10 w-[45%] bg-red-700 hover:bg-red-400 rounded-md hover:scale-105 transition" onClick={() => setInputState({...inputState, show:false})}>fechar</button>
            </div>
          </td>
        </tr>

      </>
  )
}