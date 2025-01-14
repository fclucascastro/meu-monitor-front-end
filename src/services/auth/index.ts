import { loginSchema } from '@/app/auth/(main)/schema'
import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import { ZodError } from 'zod'
import axios from 'axios'

export const {
  handlers: { GET, POST },
  auth,
} = NextAuth({
  pages: {
    signIn: '/auth',
    error: '/auth',
    signOut: '/auth',
    verifyRequest: '/auth',
    newUser: '/',
  },

  providers: [
    CredentialsProvider({
      name: 'credentials',
      credentials: {
        email: { label: 'Email', type: 'text' },
        password: { label: 'Password', type: 'password' },
      },

      async authorize(credentials) {
        try {
          const { email, password } = await loginSchema.parseAsync(credentials)

          const getUser = await axios.post(
            `${process.env.NEXT_PUBLIC_URL_BASE}/auth/signin`,
            { email, password },
          )

          const user = {
            user: {
              email: 'sammy.ferreira@alu.ufc.br',
              name: 'Sammy Ferreira',
              image: 'https://github.com/sammyferreiraa.png',
            },
            ...getUser.data,
          }

          console.log(user)

          if (!user) {
            throw new Error('User not found')
          }

          return user
        } catch (error) {
          if (error instanceof ZodError) {
            return null
          }
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.user = user
      }
      return token
    },
    async session({ session, token }) {
      if (token) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        session.user = token.user as any
        session = { ...session, ...session.user }
      }
      return session
    },
  },
})
