
export default function ConfirmModal({text, action, close, show}:{text:string, action: () => void, close: () => void, show:boolean}) {
  if(!show) return
  console.log(text);
  

  return(
    <div className="absolute z-[999] top-0 left-0 w-screen h-screen bg-black bg-opacity-50 flex pt-[30vh] justify-center">
      <div className="p-4 text-black rounded-md flex flex-col gap-4 shadow-md bg-slate-200 h-fit max-w-[33%]">
        <p className="text-lg">{text}</p>
        <div className="">
          <button className="p-2 border rounded-md mr-2 hover:border-black transition" onClick={close}>cancelar</button>
          <button className="p-2 border rounded-md border-red-800 opacity-50 text-red-800 hover:opacity-100 transition" onClick={() => {action(); close()}}>confirmar</button>
        </div>
      </div>
    </div>
  )
}