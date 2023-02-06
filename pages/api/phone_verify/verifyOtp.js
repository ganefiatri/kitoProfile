import twilio from "twilio";

const accountSid = process.env.ACCOUNTSID;
const authToken = process.env.AUTHTOKEN;
const serviceId = process.env.SERVICEID;

const client = require("twilio")(accountSid, authToken);

export default async (req, res) => {
    const { mobileNumber, code } = req.body;

    client.verify
    .services(serviceId)
    .verificationChecks.create({ to: "+91" + mobileNumber, code })
    .then((verification_check) => {
      return res.status(200).json({ verification_check });
    })
    .catch((error) => {
      return res.status(400).json({ error });
    });
}

