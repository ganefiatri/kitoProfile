import nc from "next-connect";
import multer from "multer";
import path from "path";
import { getSession } from "next-auth/react";
import { staticResourceUrl } from "../../../utils/config";
import { error } from "console";
import prisma from "../../../utils/prisma";
import cloudinary from "../../../utils/cloudinary";
const fs = require("fs");

const DatauriParser = require('datauri/parser');

export const config = {
    api: {
        bodyParser: false
    }
}

const parser = new DatauriParser();

const ALLOWED_FORMATS = ['image/jpeg', 'image/png', 'image/jpg'];

const storage = multer.memoryStorage();

const upload = multer({
    storage,
    fileFilter: function (req, file, cb) {
        if (ALLOWED_FORMATS.includes(file.mimetype)) {
            cb(null, true);
        } else {
            cb(new Error('Not supported file type!'), false);
        }
    }
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
    .post(async (req, res) => {
        try {
            const file64 = parser.format(path.extname(req.file.originalname).toString(), req.file.buffer);
            const session = await getSession({ req });
            if (!session) {
                error("Access denied", res);
            } else {
                const result = await cloudinary.uploader.upload(file64.content, {
                    folder: 'posts',
                    use_filename: true
                });
                const post = await prisma.category.create({
                    data: {
                        name: req.body.name,
                        img: result.secure_url,
                        filename: result.public_id
                    }
                });
                // const post = await prisma.category.create({
                //     data: {
                //         name: req.body.name,
                //         img: url,
                //         filename: file,
                //     }
                // });
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




