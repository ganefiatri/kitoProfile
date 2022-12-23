import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient();

export default async function handler(req, res){
        const subCategories = await prisma.subCategory.findMany({
               include: {
                category: true,
               }
        });
       
        
        res.status(200).json(subCategories)
}