import { element } from "prop-types";
import prisma from "../../../utils/prisma";

export default async function handler(req, res) {
    // console.log(req.body)
    if (req.method === "POST") {
        if (!req.body) return res.status(404).json({ error: "Dont have form data..!" })
        const { number, poin, date } = req.body;
   
      await prisma.redeem.create({
            data: {
                total_poin: poin,
                phoneId: number,
                expiredAt: date
            }
        });
        return res.status(200).json({ message: "Success fully create subCategory !" });
    } else {
        return res.status(405).json({ error: "This request only supports POST requests" });
    }

}