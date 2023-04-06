import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient();

export default async function handler(req, res){
        const subCategories = await prisma.sub_category_third.findMany({
               include: {
                        subCategory: true,
               }
        });
       
        
        res.status(200).json(subCategories)
}