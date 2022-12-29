import nc from "next-connect";
import multer from "multer";
import path from "path";
import { getSession } from "next-auth/react";
import prisma from "../../../utils/prisma";
import { staticResourceUrl } from "../../../utils/config";
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
            cb(null, path.join("images"))
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
  .post(async (req, res) =>{
    try {
        const session = await getSession({req});
        if (!session) {
            error("Access denied", res);
        } else {
            const url = staticResourceUrl + req.file.filename;
            const file = req.file.path;

            const post = await prisma.category.create({
                data: {
                    name: req.body.name,
                    img: url,
                    filename: file,
                }
            });
            if (post) {
                return res.status(200).json({ message: "Success fully create category!" });
            } else {
                return res.status(405).json({ error: "failed to insert data" })
            }
            // res.json({body: req.body, file: req.file})
        }
    } catch (error) {
        return res.status(405).json({ error })
    }
  })

  export default handler;


