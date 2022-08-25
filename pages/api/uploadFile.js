import { IncomingForm, formidable } from "formidable";
import fs from "fs";

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req, res) {
  if (req.method === "POST") {
    const result = await UploadFile(req)
    res.status(200).json(result);
  }
}



async function UploadFile(req, res) {
  new Promise((resolve, reject) => {
    const form = new IncomingForm();

    form.parse(req, async (err, fields, files) => {
      if (err) {
        reject({
          success: false,
          message: err.message,
        });
      } else {
        const oldPath = files.img.filepath,

          newPath = `./public/contest/${
            new Date().getMonth() + 1
          }/${new Date().getDate()}/${files.img.originalFilename}`,

          returnFile = `/contest/${
            new Date().getMonth() + 1
          }/${new Date().getDate()}/${files.img.originalFilename}`,

          dir = [
            `./public/contest/${new Date().getMonth() + 1}`,

            `./public/contest/${
              new Date().getMonth() + 1
            }/${new Date().getDate()}`,
          ];

        for (let i = 0; i <= dir.length - 1; i++) {
          if (!fs.existsSync(dir[i])) {
            fs.mkdirSync(dir[i]);
          }
        }

        fs.rename(oldPath, newPath, async (err) => {
          if (err) {
            reject({
              success: false,
              message: err.message,
            });
          } else {
            resolve({ success: true, img: returnFile });
          }
        });
      }
    });
  });
}
