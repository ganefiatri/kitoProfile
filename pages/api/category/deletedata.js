import prisma from "../../../utils/prisma";
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
                fs.unlink(filePath, (err) => {
                        if (err) {
                            throw err;
                        }
                    
                        console.log("Delete File successfully.");
                    });
        }
        
        const result = await prisma.category.delete({
                where: {
                        id: req.query.id,
                }
        });
        res.json(result);
};