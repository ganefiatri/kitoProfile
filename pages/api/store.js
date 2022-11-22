import { PrismaClient, Prisma } from '@prisma/client';

const prisma = new PrismaClient();

export default async (req, res) => {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method not allowed' });
    }
    try {
        const store = {title, description, img} = JSON.parse(req.body);
        const savedStore = await prisma.store.create({ store });
        res.status(200).json(savedStore);
      } catch (err) {
        res.status(400).json({ message: 'Something went wrong' });
      }
}