import { auth, signOut } from "@/auth"
import { redirect } from "next/navigation"
import { getUser, getUserData } from "../api/(modules)/user/services";
import { IAccount } from "../(modules)/(account)/types";
import RecordInput from "./componets/recordInput";
import Dashboard from "./componets/dashboard";
import Signout from "./componets/signout";

export default async function Page() {
	const session = await auth()
	
	if (!session?.user) return redirect("/signin")

	const user = await getUser({ email: session?.user?.email || "" }) 
	if(user.status) redirect("/signup")
		//TODO add toast trigger
		

	const userData = await getUserData(user.id) 
	if(!userData) return redirect("signin")
	let userRecords = ([userData?.accounts.map((i:IAccount) => i.debits)].flat()).flat()

	

	return (
		<main className="flex">
			<Dashboard accounts={userData.accounts} records={userRecords}>
				<Signout/>
			</Dashboard>
		</main>
	)
}
