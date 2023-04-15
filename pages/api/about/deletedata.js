import { DeleteObjectsCommand } from "@aws-sdk/client-s3";
import prisma from "../../../utils/prisma";
import { s3Client } from "../../../utils/s3Client";
const fs = require("fs");

export default async function handler(req, res) {
        const deldata = await prisma.about.findMany({
                where: {
                        id: req.query.id
                }
        });



        const filePathBanner = deldata[0].fileNameBanner;
        const filePathClass1 = deldata[0].fileNameClass1;
        const filePathClass2 = deldata[0].fileNameClass2;
        const filePathClass3 = deldata[0].fileNameClass3;
        const filePathClass4 = deldata[0].fileNameClass4;
        const filePathCompany1 = deldata[0].fileNameCompany1;
        const filePathCompany2 = deldata[0].fileNameCompany2;
        const filePathConcept = deldata[0].fileNameConcept;

      
                // const params = {
                //         Bucket: process.env.SPACES_BUCKET,
                //         Key: [{filePathBanner},{filePathClass1},{filePathClass2},{filePathClass3},{filePathClass4},{filePathCompany1},{filePathCompany2},{filePathConcept} ],
                // };
                const command = new DeleteObjectsCommand({
                        Bucket: process.env.SPACES_BUCKET,
                        Delete: {
                                Objects: [{ Key: filePathBanner }, { Key: filePathClass1 }, { Key: filePathClass2 }, { Key: filePathClass3 }, { Key: filePathClass4 }, { Key: filePathCompany1 }, { Key: filePathCompany2 }, { Key: filePathConcept }],
                        },
                });
                try {
                        const { Deleted } = await s3Client.send(command);
                        console.log(
                                `Successfully deleted ${Deleted.length} objects from S3 bucket. Deleted objects:`
                        );
                        console.log(Deleted.map((d) => ` • ${d.Key}`).join("\n"));
                } catch (err) {
                        console.error(err);
                }
                // s3Client.deleteObjects(params, function (error, data) {
                //         if (error) {
                //                 console.log("ada yang error!", error);
                //         }
                //         console.log("Successfully deleted file", data);
                // });
        

        const result = await prisma.about.delete({
                where: {
                        id: req.query.id,
                }
        });
        return res.json(result);
};