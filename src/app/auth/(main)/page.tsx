import LoginBanner from './_components/login-banner'
import LoginAbout from './_components/login-about'
import LoginForm from './_components/login-form'
import LoginFormExtra from './_components/login-form-extra'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import LayoutAuthPage from '../_components/layout-page'

export default function Auth() {
  return (
    <LayoutAuthPage className="bg-[#EBF5EE]">
      <LayoutAuthPage.Secondary>
        <LoginBanner />
        <LoginAbout />
      </LayoutAuthPage.Secondary>
      <LayoutAuthPage.Primary>
        <Card className="mx-auto grid w-[375px] rounded-2xl bg-verdee px-8 py-6">
          <CardHeader className="grid w-full gap-2 py-6 text-center text-white">
            <h1 className="my-2 text-3xl font-bold">LOGIN</h1>
          </CardHeader>
          <CardContent className="p-0 text-white">
            <LoginForm />
            <LoginFormExtra />
          </CardContent>
        </Card>
      </LayoutAuthPage.Primary>
    </LayoutAuthPage>
  )
}
