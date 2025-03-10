import { z } from 'zod'

export const registerSchema = z.object({
  credentials: z
    .object({
      usuario: z.string().refine((value) => /^[A-Za-z\s]+$/.test(value), {
        message: 'Usuário invalido',
      }),
      email: z
        .string()
        .email('E-mail invalido')
        .toLowerCase()
        .refine(
          (email) => {
            const domain = email.split('@')[1]
            return domain && domain.toLowerCase() === 'alu.ufc.br'
          },
          {
            message: 'O email deve ter o domínio @alu.ufc.br',
          },
        ),
      senha: z
        .string()
        .min(8, 'A senha deve ter pelo menos 8 caracteres')
        .refine((value) => /[A-Z]/.test(value), {
          message: 'A senha deve conter pelo menos uma letra maiúscula',
        })
        .refine((value) => /[^a-zA-Z0-9]/.test(value), {
          message: 'A senha deve conter pelo menos um caractere especial',
        }),
      confirmarSenha: z.string(),
      token: z.string().optional(),
      userType: z.string(),
    })
    .refine((fields) => fields.senha === fields.confirmarSenha, {
      path: ['confirmarSenha'],
      message: 'As senhas não conferem',
    }),
})
