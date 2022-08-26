import { IncomingForm, formidable } from "formidable";
import fs from "fs";

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req, res) {
  if (req.method === "POST") {
    const data = await new Promise((resolve, reject) => {
      const form = new IncomingForm();

      form.parse(req, async (err, fields, files) => {
        if (err) {
          res.status(200).json({
            success: false,
            message: err.message,
          });
        } else {
          // To Create A Directry Variable
          const randomStr = Math.random().toString(36).substring(7);
          const oldPath = files.img.filepath;
          
          const newPath = `./public/contest/${
            new Date().getMonth() + 1
          }/${new Date().getDate()}/${randomStr}_${files.img.originalFilename}`;
          
          const returnFile = `/contest/${
            new Date().getMonth() + 1
          }/${new Date().getDate()}/${randomStr}_${files.img.originalFilename}`;
          
          const dir = [
            `./public/contest/${new Date().getMonth() + 1}`,

            `./public/contest/${
              new Date().getMonth() + 1
            }/${new Date().getDate()}`,
          ];

          for (let i = 0; i <= dir.length - 1; i++) {
            /* fs.exists(dir[i], (exists) => {
              if (!exists) {
                fs.mkdir(dir[i], (err) => {
                  if (err) {
                    return {
                      success: false,
                      message: err.message,
                    }
                  }
                });
              }
            }); */
            for (let i = 0; i <= dir.length - 1; i++) {
              if (!fs.existsSync(dir[i])) {
                fs.mkdirSync(dir[i]);
              }
            }
          }

          // To Rename The File
          fs.rename(oldPath, newPath, (err) => {
            if (err) {
              res.status(200).json({
                success: false,
                message: err.message,
              });
            } else {
              res.status(200).json({
                success: true,
                img: returnFile,
              });
            }
          })

        }

      });
    });
  }
}