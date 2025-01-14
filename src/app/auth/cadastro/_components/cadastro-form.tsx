'use client'

import { Input } from '@/components/ui/input'
import Link from 'next/link'
import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import CadastroRadioGroup from './cadastro-radio-group'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { registerSchema } from '../schema'
import CadastroFormErrors from './cadastro-form-errors'
import {
  UserIcon,
  EmailGreenIcon,
  PasswordGreenIcon,
  TokenIcon,
  ConfirmaPasswordGreenIcon,
} from '@/components/icons'
import { register } from '../actions'
import { toast } from '@/components/ui/use-toast'

const CadastroForm = () => {
  const form = useForm<z.infer<typeof registerSchema>>({
    resolver: zodResolver(registerSchema),
    mode: 'all',
    criteriaMode: 'all',
    defaultValues: {
      credentials: {
        userType: 'aluno',
      },
    },
  })

  const handleSubmit = form.handleSubmit(
    async (data: z.infer<typeof registerSchema>) => {
      try {
        await register({ data })
        toast({
          title: 'Cadastrado com sucesso',
          description: `${data.credentials.usuario}, confirme seu email para acesso ao sistema`,
        })
        form.reset()
      } catch (error) {
        console.log(error)
      }
    },
  )
  const [showAdditionalInput, setShowAdditionalInput] = useState(false)

  return (
    <>
      <CadastroRadioGroup
        onValueChange={(value) => {
          form.setValue('credentials.userType', value)
          if (value !== 'monitor') form.setValue('credentials.token', '')
          setShowAdditionalInput(value === 'monitor')
        }}
      />
      <form onSubmit={handleSubmit} id="cadastro" className="grid w-full gap-4">
        <div className="flex flex-row items-center justify-center gap-2">
          <UserIcon />
          <Input
            className="bg-cinza text-black placeholder:text-zinc-500 hover:bg-white focus-visible:bg-white focus-visible:ring-0"
            placeholder="Usuário"
            type="text"
            autoComplete="off"
            {...form.register('credentials.usuario')}
          />
          <CadastroFormErrors
            error={form.formState.errors.credentials?.usuario}
          />
        </div>
        <div className="flex flex-row items-center justify-center gap-2">
          <EmailGreenIcon />
          <Input
            className="bg-cinza text-black placeholder:text-zinc-500 hover:bg-white focus-visible:bg-white focus-visible:ring-0"
            id="email"
            placeholder="Email"
            type="email"
            autoComplete="off"
            {...form.register('credentials.email')}
          />
          <CadastroFormErrors
            error={form.formState.errors.credentials?.email}
          />
        </div>
        <div className="flex flex-row items-center justify-center gap-2">
          <PasswordGreenIcon />
          <Input
            className="bg-cinza text-black placeholder:text-zinc-500 hover:bg-white focus-visible:bg-white focus-visible:ring-0"
            id="senha"
            placeholder="Senha"
            type="password"
            autoComplete="off"
            {...form.register('credentials.senha')}
          />
          <CadastroFormErrors
            error={form.formState.errors.credentials?.senha}
          />
        </div>
        <div className="flex flex-row items-center justify-center gap-2">
          <ConfirmaPasswordGreenIcon />
          <Input
            className="bg-cinza text-black placeholder:text-zinc-500 hover:bg-white focus-visible:bg-white focus-visible:ring-0"
            id="confirmarSenha"
            placeholder="Confirmar Senha"
            type="password"
            autoComplete="off"
            {...form.register('credentials.confirmarSenha')}
          />
          <CadastroFormErrors
            error={form.formState.errors.credentials?.confirmarSenha}
          />
        </div>
        <div
          className={`flex-row items-center justify-center gap-2 ${showAdditionalInput ? 'flex' : 'hidden'}`}
        >
          <TokenIcon />
          <Input
            className="bg-cinza text-black placeholder:text-zinc-500 hover:bg-white focus-visible:bg-white focus-visible:ring-0"
            id="token"
            placeholder="Token"
            type="token"
            required={showAdditionalInput}
            autoComplete="off"
            {...form.register('credentials.token')}
          />
        </div>
      </form>
      <div className="mx-16 flex flex-col items-center">
        <Button
          form="cadastro"
          className="my-4 w-full bg-emerald-600 font-light text-emerald-50 shadow-[6.0px_10.0px_10.0px_rgba(0,0,0,0.38)] transition-colors hover:bg-emerald-500 hover:shadow-[3.0px_6.0px_6.0px_rgba(0,0,0,0.38)]"
          type="submit"
          disabled={form.formState.isSubmitting}
        >
          {form.formState.isSubmitting ? 'Registrando...' : 'Registrar'}
        </Button>
        <p className="text-xs">
          Já possui conta?{' '}
          <Link href={'/auth'} className="underline">
            Entre
          </Link>
        </p>
      </div>
    </>
  )
}

export default CadastroForm
