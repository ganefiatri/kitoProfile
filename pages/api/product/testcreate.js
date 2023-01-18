import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient();

export default async function handler(req, res) {
    const products = await prisma.product.findMany({
        where: {
            title: {
                search: req.params
            }
        },
        include: {
            product_detail: {
                include: {
                    units: true,
                    subCategory: true,
                    stores: true
                }
            },
        }
    })
    res.status(200).json(products)
}