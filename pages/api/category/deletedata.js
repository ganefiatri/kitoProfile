import prisma from "../../../utils/prisma";
import { s3Client } from "../../../utils/s3Client";
const fs = require("fs");

export default async function handler(req, res) {
        const deldata = await prisma.category.findMany({
                where:{
                        id:req.query.id
                }
        });

        const filePath = deldata[0].filename;
        if(!filePath){
                return res.status(405).json({ error: "no data found" });
        }else{
                const params = {
                        Bucket: process.env.SPACES_BUCKET,
                        Key: filePath
                };
                s3Client.deleteObject(params, function (error, data) {
                        if (error) {
                                res.status({ error: "Something went wrong" });
                        }
                        console.log("Successfully deleted file", data);
                });
        }
        
        const result = await prisma.category.delete({
                where: {
                        id: req.query.id,
                }
        });
        res.json(result);
};