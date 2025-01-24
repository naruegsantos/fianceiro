import Link from "next/link";

export default function NotFoundpage(){
  return(
    <main className="flex flex-col  h-[100vh] justify-center items-center">
      <h1 className="text-5xl">Não achamos nada aqui...</h1>
      <Link prefetch href={"/"} className="font-bold hover:scale-110 hover:text-hightlight transition">aperte aqui pra voltar</Link>
    </main>
  )
}