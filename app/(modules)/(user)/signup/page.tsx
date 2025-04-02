import { auth } from "@/auth";
import { SingupForm } from "./components/Form";

export default async function Page() {
  console.log(await auth());
  
  
  return(
    <main className="h-screen flex justify-center items-center">
      <SingupForm/>
    </main>
  )
}