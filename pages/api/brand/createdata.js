import prisma from "../../../utils/prisma";

export default async function handler(req, res){
    if (req.method === "POST") {
        if (!req.body) return res.status(404).json({ error: "Dont have form data..!" })
        const { name } = req.body;

        const res = await prisma.brands.create({
            data: {
                name: name,
            }
        });
        return res.status(201).json({message: "success input Data!"});
    }else {
        return res.status(405).json({ error: "This request only supports POST requests" });
    }

}