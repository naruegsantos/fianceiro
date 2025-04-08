import { ReactElement, ReactHTMLElement, RefObject, useEffect, useState } from "react";
import { IconType } from "react-icons/lib";
import ConfirmModal from "./confirmModal";

export default function OptionsMenu(
  { position, options, onCloseContextMenu }:
  { position: { top: string, left: string }, options:{icon:ReactElement<IconType>, text:string}[], onCloseContextMenu:() => void }) 
  {
  
  useEffect(() => {
    const clickListener = (event:any) => {
      setTimeout(onCloseContextMenu, 400)
    }
    
    document.addEventListener('mousedown', clickListener)
    return () => {
      document.removeEventListener('mousedown', clickListener)
    }
  }, [])

  return (
    <div
      className="p-2 transition absolute divide-y divide-slate-400  z-[999] bg-slate-200 text-black shadow-md rounded-md"
      style={position}
    >
      {options.map((i, index) => (
        <div key={index} className="flex first:rounded-t last:rounded-b place-items-center shadow-inner hover:shadow-slate-400  bg-inherit cursor-pointer gap-2 px-4" >
          {i.icon} 
          <span>{i.text}</span>
        </div>
      ))}
    </div>
  )
}