import { auth, signIn, signOut } from "@/auth";
import Image from "next/image";

export default async function Page() {
  console.log(await auth());
  

  return(
    <main className="h-screen flex justify-center items-center">
      {/* <SingninpForm/> TODO add credentials provider*/}
      <form className="lg:w-1/4 md:1/2"
        action={async () => {
          "use server"
          await signIn('google', { prompt: "select_account", redirectTo:"/dashboard", login_hint: "" })
        }}
      >
        <button  className="flex w-full bg-white shadow place-items-center p-2 rounded-md text-black">
          <Image className="w-[10%]" src={"/google.png"} height={200} width={200} alt="google-icon"/>
          <span className="text-center w-[83%]" >Entre com o google</span>
        </button>
      </form>
    </main>
  )
}