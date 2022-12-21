import { IncomingForm } from "formidable";

export async function getImage(forms) {
  const data = await new Promise(function (resolve, reject) {
    const form = new IncomingForm();
    form.parse(forms, (err, fields, files) =>{
      if (err) return reject(err);
      resolve({ fields, files });
    });
  });

  return data.files.image;
}