import prisma from "../../../utils/prisma";
const fs = require("fs");

export default async function handler(req, res) {
        const result = await prisma.history.delete({
                where: {
                        id: req.query.id,
                }
        });
        res.json(result);
};