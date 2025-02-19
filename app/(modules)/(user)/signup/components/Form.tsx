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
import { signup } from "@/app/api/(modules)/user/services"

const formSchema = z.object({
  name: z.string().min(2, {message:"esse nome é muito curto"}).max(100),
  email: z.string().email({message:"Email inválido"}),
  password: z.string().refine((input:string) => /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/.test(input), {
    message:"Uma senha segura tem ao menos 8 digitos, com maiúsculas, minúsculas numeros e caractéres especiais!"
  })
})

export function SingupForm() {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "Jones Jones",
      email:"jojo@gmail.com",
      password:"123Sete69oit@"
    },
  })
 
  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    signup(values)
  }

  const [showPassword, setShowPassword] = useState(false)
  return (
    <Form {...form} >
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 w-[25%] bg-dark p-4 shadow-xl shadow-shadow rounded-lg border border-shadow">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nome</FormLabel>
              <FormControl>
                <Input placeholder="Nome completo" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
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
          <Link href={"signin"}>Já tem uma conta? <span className="underline decoration-[2px]  decoration-blue-700">Entre</span></Link>
        </div>
      </form>
    </Form>
  )
}
