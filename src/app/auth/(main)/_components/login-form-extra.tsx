import Link from 'next/link'
import React from 'react'
import { Button } from '@/components/ui/button'

const LoginFormExtra = () => {
  return (
    <div className="mt-4 text-center text-sm">
      <div className="flex flex-col items-center">
        <div className="flex w-full items-center gap-2">
          <div className="h-[1px] w-full bg-green-50"></div>
          <p className="w-full  text-xs font-light">Crie uma conta</p>
          <div className="h-[1px] w-full bg-green-50"></div>
        </div>

        <Link
          href={'/auth/cadastro'}
          className="mb-4 mt-7 flex w-full items-center justify-center px-16"
        >
          <Button className="w-full bg-slate-900 text-sm font-light text-emerald-50 shadow-[6.0px_10.0px_10.0px_rgba(0,0,0,0.38)]  transition-colors hover:bg-emerald-500 hover:shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]">
            Registrar
          </Button>
        </Link>
      </div>
    </div>
  )
}

export default LoginFormExtra
