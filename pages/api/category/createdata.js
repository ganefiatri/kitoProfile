import { PrismaClient } from "@prisma/client"
import formidable from "formidable";
import multer from "multer";
import path from "path";
import fs from "fs/promises";

const prisma = new PrismaClient();

export const config = {
    api: {
        bodyParser: false,
    }
}

// const upload = multer({
//     storage: multer.diskStorage({
//         destination: function (req, file, cb) {
//             cb(null, path.join(process.cwd(), "public", "uploads"));
//         },
//         filename: function (req, file, cb) {
//             cb(null, new Date().getTime() + "-" + file.originalname);
//         },
//     }),
// });

const readFile = (req, saveLocally) => {
    const option = formidable.Options = {};
    if(saveLocally){
        option.uploadDir = path.join(process.cwd(), "public/images");
        option.filename = (name, ext, path, form) => {
            return Date.now().toString() + "_" + path.originalFilename;
        }
    }

    const form = formidable(option);
    return new Promise((resolve, reject) => {
        form.parse(req, (err, fields, files) => {
            if(err) reject(err)
            resolve(fields, files)
        })
    });
}

const handler = async (req, res) => {
    try{
        await fs.readdir(path.join(process.cwd() + "/public", "/images" ));
    }catch{
        await fs.mkdir(path.join(process.cwd() + "/public", "/images" ));
    }
    await readFile(req, true);
    res.json({done: "ok"});
}

export default handler;