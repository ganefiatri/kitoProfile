import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient();

export default async function handler(req, res){
        const history = await prisma.history.findMany({
                include: {
                        userPhone: true,
                        productDetail: {
                                select: {
                                        product: true
                                }
                        }
                }
        });
        res.status(200).json(history)
}