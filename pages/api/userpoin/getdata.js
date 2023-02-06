import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient();

export default async function handler(req, res){
        const user = await prisma.phone_user_poin.findMany();
        res.status(200).json(user)
}