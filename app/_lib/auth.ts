import { db } from "@/app/_lib/prisma";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { AuthOptions } from "next-auth";
import { Adapter } from "next-auth/adapters";
import Credentials from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";

export const authOptions: AuthOptions = {
  adapter: PrismaAdapter(db) as Adapter,
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
    Credentials({
        credentials: {
            email: {
                label: 'Email',
                type: 'email',
                placeholder: 'jsmith@example.com'
            },
            password: {
                label: 'Senha',
                type: 'password',
                placeholder: 'Digite sua senha'
            },
        },
        async authorize(credentials) {
            // TODO: Logar usuário direto do banco de dados
            const user = await db.user.findFirst({
                where: { 
                    email: credentials?.email 
                }
            })

            if (user && user?.email === credentials?.email) {
                return user
            }
            return null
        },
    })
  ],
  callbacks: {
    async session({ session, user }) {
      session.user = { ...session.user, id: user.id } as {
        id: string;
        name: string;
        email: string;
      };

      return session;
    },
  },
  secret: process.env.NEXT_AUTH_SECRET,
};