'use client'

import EmailIcon from '@/components/icons/EmailIcon'
import PasswordIcon from '@/components/icons/PasswordIcon'
import { Input } from '@/components/ui/input'
import Link from 'next/link'
import React from 'react'
import { Button } from '@/components/ui/button'
import { useForm } from 'react-hook-form'
import { loginSchema } from '../schema'
import { zodResolver } from '@hookform/resolvers/zod'
import { signIn } from 'next-auth/react'

const LoginForm = () => {
  const form = useForm({
    resolver: zodResolver(loginSchema),
  })

  const handleSubmit = form.handleSubmit(async (data) => {
    try {
      await signIn('credentials', {
        email: data.email,
        password: data.password,
        callbackUrl: '/',
      })
    } catch (error) {
      console.log(error)
    }
  })

  return (
    <>
      <form onSubmit={handleSubmit} id="login" className="grid w-full gap-8">
        <div className="flex flex-row items-center justify-center gap-2">
          <EmailIcon />
          <Input
            id="email"
            className="bg-cinza text-black placeholder:text-zinc-500 hover:bg-white focus-visible:bg-white focus-visible:ring-0"
            placeholder="Email"
            required
            type="email"
            autoComplete="off"
            {...form.register('email')}
          />
        </div>
        <div className="grid gap-2">
          <div className="flex flex-row items-center justify-center gap-2">
            <PasswordIcon />
            <Input
              className="bg-cinza text-black placeholder:text-zinc-500 hover:bg-white focus-visible:bg-white focus-visible:ring-0"
              id="password"
              placeholder="Senha"
              required
              type="password"
              autoComplete="off"
              {...form.register('password')}
            />
          </div>
          <Link className="ml-auto inline-block text-xs underline" href="/auth">
            Esqueceu sua senha?
          </Link>
        </div>
      </form>
      <div className="mx-16">
        <Button
          form="login"
          className="my-4 w-full bg-emerald-600 font-light text-emerald-50 shadow-[6.0px_10.0px_10.0px_rgba(0,0,0,0.38)] transition-colors hover:bg-emerald-500 hover:shadow-[3.0px_6.0px_6.0px_rgba(0,0,0,0.38)]"
          type="submit"
          disabled={form.formState.isSubmitting}
        >
          {form.formState.isSubmitting ? 'Logando...' : 'Login'}
        </Button>
      </div>
    </>
  )
}

export default LoginForm
