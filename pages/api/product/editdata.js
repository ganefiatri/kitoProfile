import { s3Client } from "../../../utils/s3Client";
import formidable from 'formidable-serverless';
import { getSession } from "next-auth/react";
import prisma from "../../../utils/prisma";
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
        if (!files.image) {
            await prisma.product.update({
                where: {
                    id: fields.id
                },
                data: {
                    title: fields.title,
                    code: fields.code,
                    group: fields.group,
                    quantity: fields.quantity,
                    description: fields.description,
                    image: fields.image,
                    filename: fields.filename,
                }
            });
            await prisma.product_detail.update({
                where: {
                    id: fields.id_product_detail
                },
                data: {
                    product_id: fields.id,
                    unit_id: fields.unit,
                    store_id: fields.store,
                    subCategoryId: fields.subCategoryId,
                    discount: fields.discount,
                    price: fields.price,
                },
                include: {
                    product: true
                },
            });
            await prisma.spesification.update({
                where: {
                    id: fields.id_product_spec
                },
                data: {
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
                },
            })
            return res.status(201).json({ message: "Data Uploaded" })
        } else {
            const session = await getSession({ req });
            if (!session) {
                return res.status(405).json({ error: "Access Denied !" })
            } else {
                // Account for parsing errors
                if (err) return res.status(500);
                try {
                    // delete
                    const filePathDel = fields.filename;

                    if (!filePathDel) {
                        return res.status(405).json({ error: "no Path to delete" });
                    } else {
                        const params = {
                            Bucket: process.env.SPACES_BUCKET,
                            Key: filePathDel
                        };
                        s3Client.deleteObject(params, function (error, data) {
                            if (error) {
                                return res.status({ error: "Something went wrong" });
                            }
                            console.log("Successfully deleted file", data);
                        });
                    }
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
                    });

                    if (!fields) {
                        return res.status(500).send("You Dont Have Field");
                    } else {
                        await prisma.product.update({
                            where: {
                                id: fields.id
                            },
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
                        await prisma.product_detail.update({
                            where: {
                                id: fields.id_product_detail
                            },
                            data: {
                                product_id: product.id,
                                unit_id: fields.unit,
                                store_id: fields.store,
                                subCategoryId: fields.subCategory,
                                discount: fields.discount,
                                price: fields.price,
                                brand_id: fields.brands,
                                loc: fields.loc
                            },
                            include: {
                                product: true
                            },
                        });
                        await prisma.spesification.update({
                            where: {
                                id: fields.id_product_spec
                            },
                            data: {
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
                            },
                        })
                        return res.status(201).json({ message: "success input Data" });
                    }

                } catch (error) {
                    return res.status(500).json({ error: "Failed to send data!" })
                }
            }

        }

    });
};
