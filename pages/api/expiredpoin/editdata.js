import prisma from "../../../utils/prisma";

export default async function handler(req, res){
    if (req.method === "PUT") {
        if (!req.body) return res.status(404).json({ error: "Dont have form data..!" })
        const { poin, id} = req.body;

        await prisma.redeem.update({
            where:{
                id: id
            },
            data: {
                redeem_poin: poin,
            }
        });
        return res.status(200).json({ message: "Success fully create subCategory !" });
    }else {
        return res.status(405).json({ error: "This request only supports POST requests" });
    }

}