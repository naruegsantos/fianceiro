"use server"

import { IUser } from "@/app/(modules)/(user)/types"
import { AuthError } from "next-auth";

export async function signup(data:IUser) {
  console.log(data);
  
  
  try {
    const req = await fetch(`${process.env.API_URL}/user/post`, {
      method: 'POST',
      headers: {'content-type': 'application/json'},
      body: JSON.stringify(data)
    });
    const res = await req.json();
    return res

  } catch (error) {
    console.error(error);
  }
}

export async function getUser(data:{email:string}) { // REFACTOR better typing

  try {
    const req = await fetch(`${process.env.API_URL}/auth`, {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(data)
    });
    
    const res = await req.json();
      
    return res
  } catch (error) {
    console.error(error);
  }
}

export async function getAll():Promise<IUser> {
  const data = await (await fetch(`${process.env.API_URL}/user`)).json()
  
  return  data
}

export async function getUserData(id:number) {
  const data = await (await fetch(`${process.env.API_URL}/user/${id}/data`)).json()
  return  data
}
