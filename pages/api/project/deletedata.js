import prisma from "../../../utils/prisma";
import cloudinary from "../../../utils/cloudinary";
const fs = require("fs");

export default async function handler(req, res) {
        const deldata = await prisma.project.findMany({
                where:{
                        id:req.query.id
                }
        });

        const filePath = deldata[0].filename;
        if(!filePath){
                return res.status(405).json({ error: "no data found" });
        }else{
                await cloudinary.uploader.destroy(filePath, {
                        folder: 'posts'
                    });
        }
        
        const result = await prisma.project.delete({
                where: {
                        id: req.query.id,
                }
        });
        res.json(result);
};