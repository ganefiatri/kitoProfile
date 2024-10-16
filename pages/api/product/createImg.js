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
        let urlOne = "";
        let urlTwo = "";
        let urlThree = "";
        let urlFour = "";
        let urlFive = "";
        let urlSix = "";
        let urlSeven = "";
        let urlEigth = "";
        let urlNine = "";
        let urlTen = "";
        let nameUrl0 = "";
        let nameUrl1 = "";
        let nameUrl2 = "";
        let nameUrl3 = "";
        let nameUrl4 = "";
        let nameUrl5 = "";
        let nameUrl6 = "";
        let nameUrl7 = "";
        let nameUrl8 = "";
        let nameUrl9 = "";
       
        // Account for parsing errors
        if (err) return res.status(500);
        try {
            if (files.image0) {
                // Read file
                const file0 = fs.readFileSync(files.image0.path);
                const imageName0 = new Date().getTime() + "-" + files.image0.name;
                const url0 = `${process.env.SPACES_ORIGIN_ENDPOINT_DB}/${imageName0}`;
                urlOne = url0;
                nameUrl0 = imageName0;
                // Upload the file
                s3Client.putObject({
                    // params
                    Bucket: process.env.SPACES_BUCKET,
                    ACL: "public-read",
                    Key: imageName0,
                    Body: file0,
                    ContentType: "image/jpeg",
                });
            }

            if (files.image1) {
                // Read file
                const file1 = fs.readFileSync(files.image1.path);
                const imageName1 = new Date().getTime() + "-" + files.image1.name;
                const url1 = `${process.env.SPACES_ORIGIN_ENDPOINT_DB}/${imageName1}`;
                urlTwo = url1;
                nameUrl1 = imageName1;
                // Upload the file
                s3Client.putObject({
                    // params
                    Bucket: process.env.SPACES_BUCKET,
                    ACL: "public-read",
                    Key: imageName1,
                    Body: file1,
                    ContentType: "image/jpeg",
                });
            }

            if (files.image2) {
                // Read file
                const file2 = fs.readFileSync(files.image2.path);
                const imageName2 = new Date().getTime() + "-" + files.image2.name;
                const url2 = `${process.env.SPACES_ORIGIN_ENDPOINT_DB}/${imageName2}`;
                urlThree = url2;
                nameUrl2 = imageName2;
                // Upload the file
                s3Client.putObject({
                    // params
                    Bucket: process.env.SPACES_BUCKET,
                    ACL: "public-read",
                    Key: imageName2,
                    Body: file2,
                    ContentType: "image/jpeg",
                });
            }

            if (files.image3) {
                // Read file
                const file3 = fs.readFileSync(files.image3.path);
                const imageName3 = new Date().getTime() + "-" + files.image3.name;
                const url3 = `${process.env.SPACES_ORIGIN_ENDPOINT_DB}/${imageName3}`;
                urlFour = url3;
                nameUrl3 = imageName3;
                // Upload the file
                s3Client.putObject({
                    // params
                    Bucket: process.env.SPACES_BUCKET,
                    ACL: "public-read",
                    Key: imageName3,
                    Body: file3,
                    ContentType: "image/jpeg",
                });
            }

            if (files.image4) {
                // Read file
                const file4 = fs.readFileSync(files.image4.path);
                const imageName4 = new Date().getTime() + "-" + files.image4.name;
                const url4 = `${process.env.SPACES_ORIGIN_ENDPOINT_DB}/${imageName4}`;
                urlFive = url4;
                nameUrl4 = imageName4;
                // Upload the file
                s3Client.putObject({
                    // params
                    Bucket: process.env.SPACES_BUCKET,
                    ACL: "public-read",
                    Key: imageName4,
                    Body: file4,
                    ContentType: "image/jpeg",
                });
            }

            if (files.image5) {
                // Read file
                const file5 = fs.readFileSync(files.image5.path);
                const imageName5 = new Date().getTime() + "-" + files.image5.name;
                const url5 = `${process.env.SPACES_ORIGIN_ENDPOINT_DB}/${imageName5}`;
                urlSix = url5;
                nameUrl5 = imageName5;
                // Upload the file
                s3Client.putObject({
                    // params
                    Bucket: process.env.SPACES_BUCKET,
                    ACL: "public-read",
                    Key: imageName5,
                    Body: file5,
                    ContentType: "image/jpeg",
                });
            }

           if (files.image6) {
                // Read file
                const file6 = fs.readFileSync(files.image6.path);
                const imageName6 = new Date().getTime() + "-" + files.image6.name;
                const url6 = `${process.env.SPACES_ORIGIN_ENDPOINT_DB}/${imageName6}`;
                urlSeven = url6;
                nameUrl6 = imageName6;
                // Upload the file
                s3Client.putObject({
                    // params
                    Bucket: process.env.SPACES_BUCKET,
                    ACL: "public-read",
                    Key: imageName6,
                    Body: file6,
                    ContentType: "image/jpeg",
                });
            }

            if (files.image7) {
                // Read file
                const file7 = fs.readFileSync(files.image7.path);
                const imageName7 = new Date().getTime() + "-" + files.image7.name;
                const url7 = `${process.env.SPACES_ORIGIN_ENDPOINT_DB}/${imageName7}`;
                urlEigth = url7;
                nameUrl7 = imageName7;
                // Upload the file
                s3Client.putObject({
                    // params
                    Bucket: process.env.SPACES_BUCKET,
                    ACL: "public-read",
                    Key: imageName7,
                    Body: file7,
                    ContentType: "image/jpeg",
                });
            }

            if (files.image8) {
                // Read file
                const file8 = fs.readFileSync(files.image8.path);
                const imageName8 = new Date().getTime() + "-" + files.image8.name;
                const url8 = `${process.env.SPACES_ORIGIN_ENDPOINT_DB}/${imageName8}`;
                urlNine = url8;
                nameUrl8 = imageName8;
                // Upload the file
                s3Client.putObject({
                    // params
                    Bucket: process.env.SPACES_BUCKET,
                    ACL: "public-read",
                    Key: imageName8,
                    Body: file8,
                    ContentType: "image/jpeg",
                });
            }

            if (files.image9) {
                // Read file
                const file9 = fs.readFileSync(files.image9.path);
                const imageName9 = new Date().getTime() + "-" + files.image9.name;
                const url9 = `${process.env.SPACES_ORIGIN_ENDPOINT_DB}/${imageName9}`;
                urlTen = url9;
                nameUrl9 = imageName9;
                // Upload the file
                s3Client.putObject({
                    // params
                    Bucket: process.env.SPACES_BUCKET,
                    ACL: "public-read",
                    Key: imageName9,
                    Body: file9,
                    ContentType: "image/jpeg",
                });
            }
           

            if (!fields) {
                return res.status(500).send("You Dont Have Field");
            } else {
                await prisma.productImg.create({
                    data: {
                        product_id: fields.id,
                        image0: urlOne,
                        filename0: nameUrl0,
                        image1: urlTwo,
                        filename1: nameUrl1,
                        image2: urlThree,
                        filename2: nameUrl2,
                        image3: urlFour,
                        filename3: nameUrl3,
                        image4: urlFive,
                        filename4: nameUrl4,
                        image5: urlSix,
                        filename5: nameUrl5,
                        image6: urlSeven,
                        filename6: nameUrl6,
                        image7: urlEigth,
                        filename7: nameUrl7,
                        image8: urlNine,
                        filename8: nameUrl8,
                        image9: urlTen,
                        filename9: nameUrl9,
                    }
                });
                return res.status(201).json({
                    success: true,
                    message: "rows added to the database",
                  });
            }
        } catch (error) {
            return res.status(500).json({ success: false, message: error });
        }
    });
};

// export default handler;




