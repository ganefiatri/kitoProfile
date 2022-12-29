import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient();

export default async function handler(req, res){
        const categories = await prisma.user.findMany({
            include: {
                accounts: true,
               }
        })
        res.status(200).json(categories)
}