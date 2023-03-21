import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient();

export default async function handler(req, res){
        const products = await prisma.product_detail.findMany({
                include: {
                        spesification: true,
                        product: {
                                select:{
                                        productImage: true
                                }
                        }
                       }
        })
        res.status(200).json(products)
}