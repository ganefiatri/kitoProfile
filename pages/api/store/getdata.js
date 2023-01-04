import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient();

export default async function handler(req, res){
        const stores = await prisma.stores.findMany();
        res.status(200).json(stores)
}