"use client"
import { IAccount } from "@/app/(modules)/(account)/types";
import { CreateRecordDto, IRecord, RecordCategoriesClient } from "@/app/api/(modules)/record/types";
import { ReactNode, useRef, useState } from "react";
import { signOut } from "next-auth/react";
import OptionsMenu from "../../../components/commum/optionsMenu";
import { createRecord } from "@/app/api/(modules)/record/services";
import { FaPen, FaTrash } from "react-icons/fa";
import ConfirmModal from "@/components/commum/confirmModal";
import ContextMenu_ from "@/components/commum/contextmenu";
import List from "@/app/(modules)/(record)/List";

export default function Dashboard({accounts, records, children}: {accounts:IAccount[], records:IRecord[], children:ReactNode}) {
  const [accountsState, setAccountsState] = useState(accounts)
  const [recordsState, setRecordsState] = useState(records)
  const [optionsMenuState, setOptionsMenuState] = useState({
    show:false, 
    position:{top:"0px", left:"0px"},
  })

  const ref = useRef<HTMLElement | null>(null);

  async function addNewRecord(data:CreateRecordDto) {
    createRecord(data)
    setRecordsState([...recordsState, {...data, id:Math.max(...recordsState.map((i) => i.id)) + 1}])
    console.log(accountsState);
  }
   function removeRecord(id:number) {
    setRecordsState(recordsState.filter((i) => i.id != id))
    console.log(accountsState);
  }

  const handleContextMenu = (e:any) => {
    e.preventDefault()
    const {pageX, pageY} = e
    console.log({pageX, pageY});
    
    setOptionsMenuState({show:true, position:{top:`${pageY}px`, left:`${pageX}px`}})
  }

  const handleCloseOptionsMenu = () => {
    setOptionsMenuState({show:false, position:{top:"0px", left:"0px"}})
  }

  return(
    <>
    {children}
    <section className="h-screen overflow-scroll py-4 flex flex-col gap-2 place-items-center justify-start w-[25%] shadow shadow-white">
      {accountsState.map((i:IAccount) => (
        <div key={i.id} className="border p-1 w-[80%] group cursor-pointer rounded hover:scale-110 last:text-white transition">
          <span className="text-base">{i.label}</span> <br />
          <span className="text-sm text-[rgba(255,255,255,0.4)] group-hover:text-white">
            { i.credits && i.debits?
              (i.credits?.reduce((x:number,y:IRecord) => x + y.value, 0) - i.debits?.reduce((x:number,y:IRecord) => x + y.value, 0)).toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})
              : 0
            }
          </span>

        </div>
      ))}
    </section>
    <section className="flex justify-center w-full py-10">
      <List accounts={accounts} rows={recordsState} addRow={addNewRecord} removeRow={removeRecord}/>
    </section>
    </>
  )
}