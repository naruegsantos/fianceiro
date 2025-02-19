"use server"

import { IUser } from "@/app/(modules)/(user)/types"

export async function signup(data:IUser):Promise<number> {

  
  const post = await fetch(`${process.env.API_URL}/user/post`, {
    method: "POST",
    body: JSON.stringify(data),
  })
  
  console.log(post);
  
  return 1
}

export async function getAll():Promise<IUser> {
  const data = await (await fetch(`${process.env.API_URL}/user`)).json()
  return  data
}