import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'
import {
  HoverCard,
  HoverCardTrigger,
  HoverCardContent,
} from '@/components/ui/hover-card'
import React from 'react'

type CadastroFormErrorsProps = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  error: any
}
const CadastroFormErrors = ({ error }: CadastroFormErrorsProps) => {
  return (
    <>
      {error && (
        <HoverCard>
          <HoverCardTrigger className="" asChild>
            <div className="rounded-full bg-red-600 px-2 py-2 text-white hover:bg-red-700"></div>
          </HoverCardTrigger>
          <HoverCardContent className="w-80">
            <div className="flex  space-x-4">
              <Avatar className="bg-black p-1">
                <AvatarImage src="/images/LogoBranca.png" />
                <AvatarFallback>VC</AvatarFallback>
              </Avatar>
              <div className="space-y-1">
                <h4 className="text-sm font-semibold">Meu Monitor</h4>
                <p className="text-sm">{error.message}</p>
              </div>
            </div>
          </HoverCardContent>
        </HoverCard>
      )}
    </>
  )
}

export default CadastroFormErrors
