import { PropsWithChildren } from 'react'

export default function Layout({ children }: PropsWithChildren) {
  return (
    <div className="flex flex-1 flex-col">
      <main className="flex-1">{children}</main>
    </div>
  )
}
