import { NextResponse } from "next/server";
import { getAll } from "./services";

export async function GET(request: Request) {
  const data = getAll()
  return NextResponse.json( await data)
}