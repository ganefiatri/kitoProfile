import { PutObjectCommand, S3, S3Client } from "@aws-sdk/client-s3";

const s3Client = new S3({
    endpoint: process.env.SPACES_ORIGIN_ENDPOINT,
    forcePathStyle: false,
    region: "nyc3",
    credentials: {
        accessKeyId: process.env.SPACES_KEY,
        secretAccessKey: process.env.SPACES_SECRET
    }
});

// upload to digitalocean spaces
// async function uploadFile({ bucket, location ,files }) {
//     let key = `${location ? `${location}/` : ""}${files.filename}`;
//     const command = new PutObjectCommand({
//       Key: key,
//       Body: files.buffer,
//       Bucket: bucket,
//       ACL: 'public-read',
//       ContentType: image/jpeg,
//     });
//     await s3Client.send(command);
//     return key;
//   };

export { s3Client }