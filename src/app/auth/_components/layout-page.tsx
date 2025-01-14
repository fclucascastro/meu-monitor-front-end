import { cn } from '@/lib/utils'

export type DashboardPageGenericProps<T = unknown> = {
  children: React.ReactNode
  className?: string
} & T

function LayoutAuthPage({ className, children }: DashboardPageGenericProps) {
  return (
    <div className={cn(['h-full w-full lg:grid lg:grid-cols-2', className])}>
      {children}
    </div>
  )
}

function LayoutAuthPageSecondary({
  className,
  children,
}: DashboardPageGenericProps) {
  return (
    <div
      className={cn([
        'hidden h-full w-full flex-col items-center justify-start px-20 lg:flex',
        className,
      ])}
    >
      {children}
    </div>
  )
}

function LayoutAuthPagePrimary({
  className,
  children,
}: DashboardPageGenericProps) {
  return (
    <div
      className={cn([
        'flex items-center justify-center py-12 text-white',
        className,
      ])}
    >
      {children}
    </div>
  )
}

LayoutAuthPage.Primary = LayoutAuthPagePrimary
LayoutAuthPage.Secondary = LayoutAuthPageSecondary

export default LayoutAuthPage
