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
        let urlOne = "";
        let urlTwo = "";
        let urlThree = "";
        let urlFour = "";
        let urlFive = "";
        let urlSix = "";
        let urlSeven = "";
        let urlEigth = "";
        let nameUrl1 = "";
        let nameUrl2 = "";
        let nameUrl3 = "";
        let nameUrl4 = "";
        let nameUrl5 = "";
        let nameUrl6 = "";
        let nameUrl7 = "";
        let nameUrl8 = "";
        if (!session) {
            return res.status(405).json({ error: "Access Denied !" })
        } else {
            // Account for parsing errors
            if (err) return res.status(500);
            try {
                if (files.imgBanner) {
                    // Read file
                    const fileBanner = fs.readFileSync(files.imgBanner.path);
                    const imageNameBanner = new Date().getTime() + "-" + files.imgBanner.name;
                    const urlBanner = `${process.env.SPACES_ORIGIN_ENDPOINT_DB}/${imageNameBanner}`;
                    urlOne = urlBanner;
                    nameUrl1 = imageNameBanner;
                    // Upload the file
                    s3Client.putObject({
                        // params
                        Bucket: process.env.SPACES_BUCKET,
                        ACL: "public-read",
                        Key: imageNameBanner,
                        Body: fileBanner,
                        ContentType: "image/jpeg",
                    });
                }

                if (files.imgCompany1) {
                    // Read file
                    const fileCompany1 = fs.readFileSync(files.imgCompany1.path);
                    const imageNameCompany1 = new Date().getTime() + "-" + files.imgCompany1.name;
                    const urlCompany1 = `${process.env.SPACES_ORIGIN_ENDPOINT_DB}/${imageNameCompany1}`;
                    urlTwo = urlCompany1;
                    nameUrl2 = imageNameCompany1;
                    // Upload the file
                    s3Client.putObject({
                        // params
                        Bucket: process.env.SPACES_BUCKET,
                        ACL: "public-read",
                        Key: imageNameCompany1,
                        Body: fileCompany1,
                        ContentType: "image/jpeg",
                    });
                }

                if (files.imgCompany2) {
                    // Read file
                    const fileCompany2 = fs.readFileSync(files.imgCompany2.path);
                    const imageNameCompany2 = new Date().getTime() + "-" + files.imgCompany2.name;
                    const urlCompany2 = `${process.env.SPACES_ORIGIN_ENDPOINT_DB}/${imageNameCompany2}`;
                    urlThree = urlCompany2;
                    nameUrl3 = imageNameCompany2;
                    // Upload the file
                    s3Client.putObject({
                        // params
                        Bucket: process.env.SPACES_BUCKET,
                        ACL: "public-read",
                        Key: imageNameCompany2,
                        Body: fileCompany2,
                        ContentType: "image/jpeg",
                    });
                }

                if (files.imgConcept) {
                    // Read file
                    const fileConcept = fs.readFileSync(files.imgConcept.path);
                    const imageNameConcept = new Date().getTime() + "-" + files.imgConcept.name;
                    const urlConcept = `${process.env.SPACES_ORIGIN_ENDPOINT_DB}/${imageNameConcept}`;
                    urlFour = urlConcept;
                    nameUrl4 = imageNameConcept;
                    // Upload the file
                    s3Client.putObject({
                        // params
                        Bucket: process.env.SPACES_BUCKET,
                        ACL: "public-read",
                        Key: imageNameConcept,
                        Body: fileConcept,
                        ContentType: "image/jpeg",
                    });
                }

                if (files.imgClass1) {
                    // Read file
                    const fileClass1 = fs.readFileSync(files.imgClass1.path);
                    const imageNameClass1 = new Date().getTime() + "-" + files.imgClass1.name;
                    const urlClass1 = `${process.env.SPACES_ORIGIN_ENDPOINT_DB}/${imageNameClass1}`;
                    urlFive = urlClass1;
                    nameUrl5 = imageNameClass1;
                    // Upload the file
                    s3Client.putObject({
                        // params
                        Bucket: process.env.SPACES_BUCKET,
                        ACL: "public-read",
                        Key: imageNameClass1,
                        Body: fileClass1,
                        ContentType: "image/jpeg",
                    });
                }

                if (files.imgClass2) {
                    // Read file
                    const fileClass2 = fs.readFileSync(files.imgClass2.path);
                    const imageNameClass2 = new Date().getTime() + "-" + files.imgClass2.name;
                    const urlClass2 = `${process.env.SPACES_ORIGIN_ENDPOINT_DB}/${imageNameClass2}`;
                    urlSix = urlClass2;
                    nameUrl6 = imageNameClass2;
                    // Upload the file
                    s3Client.putObject({
                        // params
                        Bucket: process.env.SPACES_BUCKET,
                        ACL: "public-read",
                        Key: imageNameClass2,
                        Body: fileClass2,
                        ContentType: "image/jpeg",
                    });
                }

                if (files.imgClass3) {
                    // Read file
                    const fileClass3 = fs.readFileSync(files.imgClass3.path);
                    const imageNameClass3 = new Date().getTime() + "-" + files.imgClass3.name;
                    const urlClass3 = `${process.env.SPACES_ORIGIN_ENDPOINT_DB}/${imageNameClass3}`;
                    urlSeven = urlClass3;
                    nameUrl7 = imageNameClass3;
                    // Upload the file
                    s3Client.putObject({
                        // params
                        Bucket: process.env.SPACES_BUCKET,
                        ACL: "public-read",
                        Key: imageNameClass3,
                        Body: fileClass3,
                        ContentType: "image/jpeg",
                    });
                }

                if (files.imgClass4) {
                    // Read file
                    const fileClass4 = fs.readFileSync(files.imgClass4.path);
                    const imageNameClass4 = new Date().getTime() + "-" + files.imgClass4.name;
                    const urlClass4 = `${process.env.SPACES_ORIGIN_ENDPOINT_DB}/${imageNameClass4}`;
                    urlEigth = urlClass4;
                    nameUrl8 = imageNameClass4;
                    // Upload the file
                    s3Client.putObject({
                        // params
                        Bucket: process.env.SPACES_BUCKET,
                        ACL: "public-read",
                        Key: imageNameClass4,
                        Body: fileClass4,
                        ContentType: "image/jpeg",
                    });
                }

               
                    await prisma.about.create({
                        data: {
                            imgBanner: urlOne,
                            imgCompany1: urlTwo,
                            imgCompany2: urlThree,
                            imgConcept: urlFour,
                            imgClass1: urlFive,
                            imgClass2: urlSix,
                            imgClass3: urlSeven,
                            imgClass4: urlEigth,
                            fileNameBanner: nameUrl1,
                            fileNameCompany1: nameUrl2,
                            fileNameCompany2: nameUrl3,
                            fileNameConcept: nameUrl4,
                            fileNameClass1: nameUrl5,
                            fileNameClass2: nameUrl6,
                            fileNameClass3: nameUrl7,
                            fileNameClass4: nameUrl8,
                            textCompany1: fields.textCompany1,
                            textCompany2: fields.textCompany2,
                            visionTitle: fields.visionTitle,
                            visionDetail: fields.visionDetail,
                            missionTitle: fields.missionTitle,
                            missionDetail: fields.missionDetail,
                            valueDetail: fields.valueDetail,
                            conceptTitle: fields.conceptTitle,
                            conceptDetail: fields.conceptDetail,
                            classTitle: fields.classTitle,
                            classTitle1: fields.classTitle1,
                            classDetail1: fields.classDetail1,
                            classTitle2: fields.classTitle2,
                            classDetail2: fields.classDetail2,
                            classTitle3: fields.classTitle3,
                            classDetail3: fields.classDetail3,
                            classTitle4: fields.classTitle4,
                            classDetail4: fields.classDetail4,
                        }
                    });
                    return res.status(201).send("Successfully added to database!");

            } catch (error) {
                console.log(error);
            }
        }
    });
};

// export default handler;




