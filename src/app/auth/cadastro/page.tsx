import { Card, CardContent, CardHeader } from '@/components/ui/card'
import LayoutAuthPage from '../_components/layout-page'
import CadastroBanner from './_components/cadastro-banner'
import CadastroForm from './_components/cadastro-form'

export default function Cadastro() {
  return (
    <LayoutAuthPage className="bg-[#0D192B]">
      <LayoutAuthPage.Secondary>
        <CadastroBanner />
        <img
          alt="alunos lendo"
          src="/images/alunos-lendo.png"
          width={638}
          height={576}
          sizes="200%"
        />
      </LayoutAuthPage.Secondary>
      <LayoutAuthPage.Primary>
        <Card className="mx-auto grid rounded-2xl bg-[#F9F9F9] px-28 py-6">
          <CardHeader className="grid w-full gap-2 py-6 text-center ">
            <h1 className="my-2 text-3xl font-bold text-verdee">REGISTRAR</h1>
          </CardHeader>
          <CardContent className="flex flex-col gap-6">
            <CadastroForm />
          </CardContent>
        </Card>
      </LayoutAuthPage.Primary>
    </LayoutAuthPage>
  )
}
