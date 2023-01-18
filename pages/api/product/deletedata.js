import prisma from "../../../utils/prisma";
import { s3Client } from "../../../utils/s3Client";
const fs = require("fs");

export default async function handler(req, res) {
        const deldata = await prisma.product.findMany({
                where: {
                        id: req.query.id
                },
                include: {
                        product_detail: true
                }
        });

        const filePath = deldata[0].filename;
        if (!filePath) {
                return res.status(405).json({ error: "no data found" });
        } else {
                const params = {
                        Bucket: process.env.SPACES_BUCKET,
                        Key: filePath
                };
                s3Client.deleteObject(params, function (error, data) {
                        if (error) {
                                return res.status({ error: "Something went wrong" });
                        }
                        console.log("Successfully deleted file", data);
                });
        }

        await prisma.product.delete({
                where: {
                        id: req.query.id,
                }
        });
        await prisma.product_detail.delete({
                where: {
                        id: deldata[0].product_detail[0].id
                }
        });

        return res.status(201).json({message: "Data Deleted !"});
};