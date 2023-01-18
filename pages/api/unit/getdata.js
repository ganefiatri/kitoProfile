import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient();

export default async function handler(req, res){
        const units = await prisma.units.findMany();
       
        
        res.status(200).json(units)
}