import prisma from "../../../utils/prisma";

export default async function handler(req, res) {
        const result = await prisma.category.delete({
                where: {
                        id: req.query.id,
                }
        });
        res.json(result);
};