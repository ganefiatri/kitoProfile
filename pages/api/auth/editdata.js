import prisma from "../../../utils/prisma";

export default async function handler(req, res){
    if (req.method === "PUT") {
        if (!req.body) return res.status(404).json({ error: "Dont have form data..!" })
        const { name, email, role, id} = req.body;

        await prisma.user.update({
            where:{
                id: id
            },
            data: {
                name: name,
                email: email,
                role: role
            }
        });
        return res.status(200).json({ message: "Success fully create User !" });
    }else {
        return res.status(405).json({ error: "This request only supports POST requests" });
    }

}