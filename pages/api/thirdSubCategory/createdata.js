import prisma from "../../../utils/prisma";

export default async function handler(req, res){
    if (req.method === "POST") {
        if (!req.body) return res.status(404).json({ error: "Dont have form data..!" })
        const { name, category } = req.body;

        await prisma.subCategoryThird.create({
            data: {
                name: name,
                subcatId: category
            }
        });
        return res.status(200).json({ message: "Success fully create subCategory !" });
    }else {
        return res.status(405).json({ error: "This request only supports POST requests" });
    }

}