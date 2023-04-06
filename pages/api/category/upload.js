import prisma from "../../../utils/prisma";
import { s3Client } from "../../../utils/s3Client";
import formidable from 'formidable-serverless';
const fs = require("fs");

export const config = {
    api: {
        bodyParser: false
    }
}

export default async (req, res) => {
    // parse request to readable form
    const form = new formidable.IncomingForm();
    form.parse(req, async (err, fields, files) => {

        // Read file
        const file = fs.readFileSync(files.image.path);
        const imageName = new Date().getTime() + "-" + files.image.name;
        const url = `${process.env.SPACES_ORIGIN_ENDPOINT}/${imageName}`;
        // Upload the file
        s3Client.putObject({
            // params
            Bucket: process.env.SPACES_BUCKET,
            ACL: "public-read",
            Key: imageName,
            Body: file,
            ContentType: "image/jpeg",
        }, async () => res.status(201).json({ message: "Image uploaded" }));

        if (!fields) {
            return res.status(500).json({ error: "You Dont Have Field" });
        } else {
            await prisma.category.create({
                data: {
                    name: fields.name,
                    img: url,
                    filename: imageName,
                }
            });

            return res.status(200).json({message: "upload category image succesfully"})
        }
    });
};

// export default handler;




