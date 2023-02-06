import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient();

export default async function handler(req, res) {
        const redeem = await prisma.redeem.findMany({
                include: {
                        userPhone: true,
                }
        });
        res.status(200).json(redeem)
}