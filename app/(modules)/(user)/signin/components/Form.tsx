"use client"

import { useForm } from "react-hook-form"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"

import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import Link from "next/link"
import { FaEye, FaEyeSlash } from "react-icons/fa"
import { useState } from "react"
import { IUser } from "../../types"

import { signIn, signOut } from "next-auth/react"
import Image from "next/image"

const formSchema = z.object({
  emailOrName: z.string().email({message:"Email inválido"}) || z.string().min(2, {message:"esse nome é muito curto"}).max(100),
  password: z.string().refine((input:string) => /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/.test(input), {
    message:"Uma senha segura tem ao menos 8 digitos, com maiúsculas, minúsculas numeros e caractéres especiais!"
  }),
})

export function SingninpForm() {
  const [error, setError] = useState(false)
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      emailOrName:"jojo@gmail.com",
      password:"123Sete69oit@",
    },
  })
 
  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof formSchema>) {
  
    // let req = await signin({
    //   email:values.emailOrName,
    //   name:values.emailOrName,
    //   password:values.password
    // })

    // console.log(req);
    

    

    // if(req.status == 401) {
    //   setError(true)
    //   setTimeout(() => setError(false), 2000)
    // }
  }

  const [showPassword, setShowPassword] = useState(false)
  return (
    <>
    {
      error?
      <div className="p-2 border border-dotted border-red-500">
        nenhum usuário com essas informações encontrado!
      </div>
      : <></>
    }
    <Form {...form} >
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 bg-dark p-4 shadow-xl shadow-shadow rounded-lg border border-shadow">
        <FormField
          control={form.control}
          name="emailOrName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input type="email" placeholder="Nome completo" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem className="">
              <FormLabel>Senha</FormLabel>
              <FormControl>
                <div className="flex items-center gap-4">
                  <Input type={showPassword? "text" : "password"}  placeholder="Nome completo" {...field} />
                  {showPassword?
                    <FaEye onClick={() => setShowPassword(!showPassword)} className="text-xl"/>
                    :<FaEyeSlash onClick={() => setShowPassword(!showPassword)} className="text-xl opacity-50 hover:opacity-100 transition-opacity cursor-pointer"/>
                  }
                </div>
              </FormControl>
              <FormMessage/>
            </FormItem>
          )}
        />
        <div className="">
          <Button className="w-full mb-2" type="submit">confirmar</Button>
          <Link href={"signup"}>Ainda não tem uma conta? <span className="underline decoration-[2px]  decoration-blue-700">Cadastre-se</span></Link>
          <button onClick={() => signIn('google', {redirectTo:"/dashboard"})} className="flex w-full bg-white shadow place-items-center p-2 rounded-md text-black">
            <Image className="w-[10%]" src={"/google.jpg"} height={200} width={200} alt="google-icon"/>
            <span className="text-center w-[83%]" >Entre com o google</span>
          </button>
        </div>
      </form>
    </Form>
    </>
  )
}
