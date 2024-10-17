import prisma from "../../../utils/prisma";
import { getSession } from "next-auth/react";
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
        const session = await getSession({ req });
        if (!session) {
            return res.status(405).json({ error: "Access Denied !" })
        } else {
            // Account for parsing errors
            if (err) return res.status(500);
            try {
                // Read file
                const file = fs.readFileSync(files.image.path);
                const imageName = new Date().getTime()+ "-" + files.image.name;
                // Upload the file
                s3Client.putObject({
                    // params
                    Bucket: process.env.SPACES_BUCKET,
                    ACL: "public-read",
                    Key: imageName,
                    Body: file,
                    ContentType: "image/jpeg",
                }, async () => res.status(201).send("Image uploaded"));

                if (!fields) {
                    return res.status(500).send("You Dont Have Field");
                } else {
                    const url = `${process.env.SPACES_ORIGIN_ENDPOINT_DB}/${imageName}`;
                    const post = await prisma.project.create({
                        data: {
                            name: fields.name,
                            place: fields.place,
                            img: url,
                            filename: imageName,
                        }
                    });
                    return res.status(201).json({message: "success input Data"});
                }

            } catch (err) {
                return err;
            }
        }
    });
};

// export default handler;




