"use server"

import { IUser } from "@/app/(modules)/(user)/types"
import { AuthError } from "next-auth";
import { CreateRecordDto, IRecord } from "./types";



export async function createRecord(data:CreateRecordDto) { // REFACTOR better typing

  const recordObject = {
    label: data.label,
    cameFrom: {
      connect : {
        id: data.cameFromId
      }
    },
    wentTo: {
      connect: {
        id: data.wentToId
      }
    },
    recordCategory: data.recordCategory,
    date: data.date,
    value: data.value,
    description: data.description
  }

  try {
    const req = await fetch(`${process.env.API_URL}/record/post`, {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(recordObject)
    });
    
    const res = await req.json();
    
    return res
  } catch (error) {
    console.error(error);
  }

}

export async function getAll():Promise<IUser> {
  const data = await (await fetch(`${process.env.API_URL}/record`)).json()
  
  return  data
}
