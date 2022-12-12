import NextAuth from "next-auth"
import GoogleProvider from 'next-auth/providers/google'
import { PrismaClient } from "@prisma/client"
import CredentialsProvider from "next-auth/providers/credentials"
import { bcrypt, compare }  from "bcryptjs"
import { PrismaAdapter } from "@next-auth/prisma-adapter"

// let userAccount = null;

const prisma = new PrismaClient();

// const bcrypt = require('bcrypt');

// const confirmPasswordHash = (plainPassword, hashedPassword) => {
//     return new Promise(resolve => {
//         bcrypt.compare(plainPassword, hashedPassword, function(err, res) {
//             resolve(res);
//         });
//     })
// }

export const authOptions = {
    // Configure one or more authentication providers
    // session: {
    //     jwt: true,
    //     maxAge: 30 * 24 * 60 * 60, // 30 days
    // },
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET
        }),
        CredentialsProvider({
            // id: "credentials",
            name: "Credentials",
            // credentials: {},
            async authorize(credentials, req) {
                try
                {
                    // check user exist
                    const user = await prisma.user.findFirst({
                        where: {
                            email: credentials.email
                        }
                    });

                    if (user !== null)
                    {
                        //Compare the hash
                        const res = await compare(credentials.password, user.password);
                        if (!res || user.email !== credentials.email)
                        {
                            console.log("Hash not matched logging in");
                        }
                        else
                        {
                            return user;
                        }
                    }
                    else {
                        return null;
                    }
                }
                catch (err)
                {
                    console.log("Authorize error:", err);
                }

            }
        }),
    ],
    adapter: PrismaAdapter(prisma),
    secret: process.env.NEXTAUTH_SECRET,
    session: { strategy: "jwt" },
    // database: process.env.DATABASE_URL,
}

export default (req, res) => NextAuth(req, res, authOptions)