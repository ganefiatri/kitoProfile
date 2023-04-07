import formidable from "formidable-serverless";
import { read, readFile, utils } from "xlsx";
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
        // console.log(files.userNumber.path)
        try {
            let path = fs.readFileSync(files.userNumber.path);
            // let path = files.path;
            // console.log(path)
            var workbook = read(path);
            var sheet_name_list = workbook.SheetNames;
            let jsonData = utils.sheet_to_csv(
                workbook.Sheets[sheet_name_list[0]]
                );
            // console.log(jsonData);
            if (jsonData?.length === 0) {
              return res.status(400).json({
                success: false,
                message: "xml sheet has no data",
              });
            }

            const test = jsonData.split("\n");
            var result = [];
            var headers = test[0].split(",");
            for(var i=1; i< test?.length; i++){
                var obj = {};
                var currentLine = test[i].split(",");

                for (let j = 0; j < headers?.length; j++) {
                    obj[headers[j]] = currentLine[j];
                }
                result.push(obj)
            }


            // const arrayData = jsonData.map(item => item.number)
            // console.log(result)
            // let savedData = await Lead.create(jsonData);
            let savedData = await prisma.customer_poin.createMany({
                data: result
            })
            // let savedData = await prisma.$executeRawUnsafe`INSERT INTO phone_user_poin(number) VALUES (${result})`


            return res.status(201).json({
              success: true,
              message: savedData?.length +"rows added to the database",
            });
          } catch (err) {
            return res.status(500).json({ success: false, message: err.message });
          }
    })
}