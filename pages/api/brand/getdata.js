import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient();

export default async function handler(req, res){
        const brands = await prisma.brands.findMany();
       
        
        res.status(200).json(brands)
}