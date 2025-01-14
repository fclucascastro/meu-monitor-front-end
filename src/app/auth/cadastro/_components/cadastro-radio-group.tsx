import { Label } from '@/components/ui/label'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import React from 'react'

type CadastroRadioGroupProps = {
  onValueChange: (value: string) => void
}

const CadastroRadioGroup = ({ onValueChange }: CadastroRadioGroupProps) => {
  return (
    <RadioGroup
      defaultValue="aluno"
      onValueChange={onValueChange}
      className="flex flex-row gap-8"
    >
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="aluno" id="r1" />
        <Label htmlFor="r1">Aluno</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="monitor" id="r2" />
        <Label htmlFor="r2">Monitor</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="professor" id="r3" />
        <Label htmlFor="r3">Professor</Label>
      </div>
    </RadioGroup>
  )
}

export default CadastroRadioGroup
