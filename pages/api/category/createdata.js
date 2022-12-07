import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient();
export default async function handler(req, res){
    if (req.method === "POST") {
        if (!req.body) return res.status(404).json({ error: "Dont have form data..!" })
    
        const { title, description, company, img } = req.body;
    
         // checck user
         const titles = await prisma.category.findFirst({
            where:{
                title: title
            }
        });
    
        if (titles) return res.status(422).json({ message: "Data Already Exist..!" })
    
        const categories = await prisma.category.create({
            data: {
                title: title,
                description: description,
                company: company,
                img: img
            }
        })
        res.status(200).json(categories)
    }else {
        return res.status(405).json({ error: "This request only supports POST requests" })
    }
}