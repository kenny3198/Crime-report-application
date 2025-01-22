//@ts-nocheck
import { PrismaAdapter } from "@auth/prisma-adapter";
import NextAuth, { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import prisma from "@/lib/prisma";
import { error } from "console";

export const authOptions: AuthOptions = {
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: { label: "Email", type: "email"},
                password: { label: "Password", type: "password"}
            },
            async authorize(credentials) {
                if ( !credentials?.email || !credentials?.password) {
                    throw new Error("Please Enter an email and password")
                }
                const user = await prisma.user({
                    where: {
                        email:credentials.email
                    }
                });
                if (!user){
                    throw new Error("No user found")
                }
                const passwordMatch = await bcrypt.compare(
                    credentials.password,
                    user.password
                )
                if (!passwordMatch) {
                    throw new Error("Incorrect Password")
                }
                return {
                    id: user.id.toString(),
                    name: user.name,
                    email: user.email,
                    role: user.role
                }
            }

        })
    ],
    callbacks: {
        async jwt({ token, user }) {
          if (user) {
            token.role = user.role;
          }
          return token;
        },
        async session({ session, token }) {
          if (session?.user) {
            session.user.role = token.role;
          }
          return session;
        },
      },
      pages: {
        signIn: "/auth/signin",
      },
      session: {
        strategy: "jwt",
      },
}