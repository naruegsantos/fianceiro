import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
} from "@/components/ui/context-menu"
import { ReactElement, ReactNode } from "react"
import { IconType } from "react-icons/lib"

export default function ContextMenu_({
  children, options
  }:{
  children:ReactNode,
  options:{
    icon:ReactElement<IconType>, 
    text:string,
    action:() => void
  }[],
    
  }) {
  return(
    <ContextMenu>
      <ContextMenuTrigger>{children}</ContextMenuTrigger>
      <ContextMenuContent>
       {options.map((i, index) => (
         <ContextMenuItem onClick={i.action} className="flex gap-2 place-items-center hover:scale-110 transition cursor-pointer " key={index}>
          {i.icon}
          {i.text}
        </ContextMenuItem>
       ))}
      </ContextMenuContent>
    </ContextMenu>

  )
}