import { IAccount } from "@/app/(modules)/(account)/types"
import { signOut } from "@/auth"

export default function Signout() {
  return(
    <button onClick={async () => {
          "use server"
          await signOut()
        }} className="border rounded-md absolute top-4 right-4 p-2">
      logout
    </button>
  )
}