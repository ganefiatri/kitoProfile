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
        const session = await getSession({ req })
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
                    const url = `${process.env.SPACES_ORIGIN_ENDPOINT}/${imageName}`;
                    const product = await prisma.product.create({
                        data: {
                            title: fields.title,
                            code: fields.code,
                            group: fields.group,
                            quantity: fields.quantity,
                            description: fields.description,
                            image: url,
                            filename: imageName,
                        }
                    });
                    const result = await prisma.product_detail.create({
                        data: {
                            product_id: product.id,
                            unit_id: fields.unit,
                            store_id: fields.store,
                            subCategoryId: fields.subCategory,
                            discount: fields.discount,
                            price: fields.price,
                            loc: fields.loc,
                            brand_id: fields.brands
                        },
                        include: {
                            product: true
                        },
                    });
                    const spec = await prisma.spesification.create({
                        data: {
                            productId: result.id,
                            titleOne: fields.spec1,
                            titleTwo: fields.spec2,
                            titleThree: fields.spec3,
                            titleFour: fields.spec4,
                            titleFive: fields.spec5,
                            answerOne: fields.answer1,
                            answerTwo: fields.answer2,
                            answerThree: fields.answer3,
                            answerFour: fields.answer4,
                            answerFive: fields.answer5,
                        }
                    });
                    return res.status(201).json({message: "success input Data"});
                }
            } catch (error) {
                console.log(error);
            }
    });
};

// export default handler;




