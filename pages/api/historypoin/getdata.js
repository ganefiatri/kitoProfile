import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient();

export default async function handler(req, res){
        const history = await prisma.history_poin.findMany();
        res.status(200).json(history)
}