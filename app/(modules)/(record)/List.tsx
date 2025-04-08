import { CreateRecordDto, IRecord } from "@/app/api/(modules)/record/types";
import ContextMenu_ from "@/components/commum/contextmenu";
import Input from "./Input";
import { IAccount } from "../(account)/types";
import { FaExpand, FaPen, FaTrash } from "react-icons/fa";
import ConfirmModal from "@/components/commum/confirmModal";
import { useState } from "react";

export default function List({rows, accounts, addRow, removeRow}:{rows:IRecord[], accounts:IAccount[], addRow:(data:CreateRecordDto) => void, removeRow:(id:number) => void}) {
  const [confirmState, setConfirmState] = useState({
    text:"",
    action:() => {},
    show:false,
    selected:0
  })

  

  const closeModal = () => setConfirmState({
    text:"",
    action:() => {},
    show:false,
    selected:0
  })

  console.log(rows);

  return(
    <>
    <ConfirmModal text={confirmState.text} action={confirmState.action} show={confirmState.show} close={closeModal}/>

    <div className=" shadow-lg h-fit rounded-md border overflow-x-scroll w-[80%]">
      <ContextMenu_  options={[
        {
          icon:<FaPen/>,
          text:"editar",
          action:() => {}
        },
        {
          icon:<FaTrash/>,
          text:"apagar",
          action:() => {
            setConfirmState({...confirmState,
              text: "Tem certeza que quer apagar esse lançamento?",
              action:() => removeRow(confirmState.selected),
              show:true,
            })
          }
        },
        {
          icon:<FaExpand/>,
          text:"detalhes",
          action:() => {}
        },
      ]}>
        <table  className="w-full divide-y ">
          <thead>
            <tr className="uppercase">
              <th className="">título</th>
              <th className="">categoria</th>
              <th className="">de onde veio</th>
              <th className="">pra onde foi</th>
              <th className="">valor</th>
              <th className="">data</th>
            </tr>
          </thead>
          <tbody className="w-full">
            {rows.map((i:IRecord) => (
              <tr key={i.id} onContextMenu={() => setConfirmState({...confirmState, selected:i.id})}  className="h-10 odd:bg-[rgb(41,41,47)] hover:scale-[0.99] hover:outline-dotted transition cursor-pointer">
                <td className="p-2 ">{i.label}</td>
                <td className="p-2  text-center">{i.recordCategory}</td>
                <td className="p-2 ">{accounts.find((a:IAccount) => a.id == i.cameFromId)?.label}</td>
                <td className="p-2 ">{accounts.find((a:IAccount) => a.id == i.wentToId)?.label}</td>
                <td className="p-2 ">{i.value.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</td>
                <td className="p-2  text-center">{i.date}</td>
              </tr>
            ))}
          </tbody>
          <tfoot className="w-full max-w-full  border-ts ">
            <Input addNewRecord={addRow} accounts={accounts}/>
          </tfoot>
        </table>
      </ContextMenu_>
    </div>
    </>
  )
}