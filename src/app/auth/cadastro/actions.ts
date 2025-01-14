'use server'

import { z } from 'zod'
import { registerSchema } from './schema'
import axios from 'axios'

export const register = async ({
  data,
}: {
  data: z.infer<typeof registerSchema>
}) => {
  try {
    const body = {
      name: data.credentials.usuario,
      email: data.credentials.email,
      password: data.credentials.senha,
      isMonitor: data.credentials.userType === 'monitor',
      isProfessor: data.credentials.userType === 'professor',
      token: data.credentials.token,
    }
    await axios
      .post(`${process.env.NEXT_PUBLIC_URL_BASE}/auth/signup`, body)
      .then((res) => {
        if (res.status !== 201) throw new Error('Erro ao cadastrar')
      })
  } catch (error) {
    console.log(error)
  }
}
