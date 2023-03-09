import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient();

export default async function handler(req, res){
        const customer = await prisma.customer_poin.findMany();
        BigInt.prototype.toJSON = function() {       
                return this.toString()
              }
        res.status(200).json(customer)
}