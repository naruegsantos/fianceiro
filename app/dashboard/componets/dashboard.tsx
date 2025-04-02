"use client"
import { IAccount } from "@/app/(modules)/(account)/types";
import { CreateRecordDto, IRecord, RecordCategoriesClient } from "@/app/(modules)/(record)/types";
import IRecordInput from "./recordInput";
import { ReactNode, useState } from "react";
import { signOut } from "next-auth/react";

export default function Dashboard({accounts, records, children}: {accounts:IAccount[], records:IRecord[], children:ReactNode}) {
  const [accountsState, setAccountsState] = useState(accounts)
  const [recordsState, setRecordsState] = useState(records)

  function addNewRecord(data:CreateRecordDto) {
    setRecordsState([...recordsState, {...data, id:recordsState[recordsState.length -1].id + 1}])
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
      <div className=" shadow-lg h-fit rounded-md border max-w-[80%]">
        <table className="w-full divide-y ">
          <thead>
            <tr className="uppercase">
              <th>título</th>
              <th>categoria</th>
              <th>de onde veio</th>
              <th>pra onde foi</th>
              <th>valor</th>
              <th>data</th>
            </tr>
          </thead>
          <tbody className="w-full divide-y">
            {recordsState.map((i:IRecord) => (
              <tr key={i.id} className=" h-14 odd:bg-[rgba(200,200,255,0.1)]">
                <td className="p-2">{i.label}</td>
                <td className="p-2 text-center">{RecordCategoriesClient[i.recordCategory]}</td>
                <td className="p-2">{accountsState.find((a:IAccount) => a.id == i.cameFromId)?.label}</td>
                <td className="p-2">{accountsState.find((a:IAccount) => a.id == i.wentToId)?.label}</td>
                <td className="p-2">{i.value}</td>
                <td className="p-2 text-center">{i.date}</td>
              </tr>
            ))}
          </tbody>
          <tfoot className="w-full max-w-full  border-t ">
            <IRecordInput addNewRecord={addNewRecord} accounts={accountsState}/>
          </tfoot>
        </table>
      </div>
    </section>
    </>
  )
}