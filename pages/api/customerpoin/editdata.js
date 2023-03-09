import prisma from "../../../utils/prisma";

export default async function handler(req, res){
    if (req.method === "PUT") {
        if (!req.body) return res.status(404).json({ error: "Dont have form data..!" })
        const { number, id, multipleId} = req.body;

        await prisma.customer_poin.update({
            where:{
                id: id
            },
            data: {
                histories: {
                    connect: multipleId.map(item => ({id:item.id}))
                }
            }
        });
        return res.status(200).json({ message: "Success fully create subCategory !" });
    }else {
        return res.status(405).json({ error: "This request only supports POST requests" });
    }

}