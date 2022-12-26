import nc from "next-connect";
import multer from "multer";
import path from "path";
import { getSession } from "next-auth/react";
import prisma from "../../../utils/prisma";
import { staticResourceUrlProduct } from "../../../utils/config";
import { error } from "console";
const fs = require("fs");

export const config = {
    api: {
        bodyParser: false
    }
}

const upload = multer({
    storage: multer.diskStorage({
        destination: (req, file, cb) => {
            cb(null, path.join(process.cwd(), "public", "product"))
        },
        filename: (req, file, cb) => {
            cb(null, new Date().getTime() + "-" + file.originalname)
        }
    })
});

const handler = nc({
    onError: (err, req, res, next) => {
      console.error(err.stack);
      res.status(500).end("Something broke!");
    },
    onNoMatch: (req, res) => {
      res.status(404).end("Page is not found");
    },
  }).use(upload.single("image"))
  .put(async (req, res) =>{
     console.log({body: req.body, file: req.file})
    try {
        const session = await getSession({req});
        if (!session) {
            error("Access denied", res);
        } else {
            const filePathDel = req.body.filename; 
            const file = req.file.path;
            const url = staticResourceUrlProduct + req.file.filename;
            
            if(!filePathDel){
                return res.status(405).json({ error: "no Path to delete" });
            }else {
                fs.unlink(filePathDel, (err) => {
                    if (err) {
                        throw err;
                    }
                    console.log("Delete File successfully.");
                });
            }

            const updateProduct = await prisma.product.update({
                where: {
                    id: req.body.id
                },
                data: {
                    title: req.body.title,
                    description: req.body.description,
                    price: req.body.price,
                    quantity: req.body.quantity,
                    subCategoryId: req.body.subCategoryId,
                    image: url,
                    filename: file,
                }
            });
            if (updateProduct) {
                return res.status(200).json({ message: "Success fully create category!" });
            } else {
                return res.status(405).json({ error: "failed to insert data" })
            }
            
        }
    } catch (error) {
        return res.status(405).json({ error })
    }
  });

  export default handler;
