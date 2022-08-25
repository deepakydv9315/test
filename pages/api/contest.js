import excuteQuery from "../../config/db.js";

import { IncomingForm } from "formidable";
import fs from "fs";

/* export const config = {
  api: {
    bodyParser: false,
  },
}; */

export default async function handler(req, res) {
  let msg, req_data;

  if (req.method === "GET") {
    if (req.query.type !== null && req.query.type !== undefined) {
      msg = await getContestByType(req.query.type);

      res.status(200).json({ method: req.method, message: msg });
    } else if( req.query.id !== null && req.query.id !== undefined) {
      msg = await getContestById(req.query.id);

      res.status(200).json(msg);
    }

  } else if (req.method === "POST") {
    // msg = postFormParser(req);

    msg = await postContest(req);

    res.status(200).json(msg);
  } else if (req.method === "PUT") {
    req_data = {
      contestID: req.body.id,
      contestTitle: req.body.title,
      contestIMG: req.body.img,
      entryFees: req.body.entryFees,
      prize: req.body.prize,
      announcement: req.body.announcement,
      type: req.body.type,
    };

    msg = await putContest(req_data, res);

    res.status(200).json({ method: "PUT", message: msg });
  } else if (req.method === "DELETE") {
    msg = await deleteContest(req.body.id);

    res.status(200).json({ method: "DELETE", message: msg });
  } else {
    res.status(404).json({ method: "Not found" });
  }
}

let sql;
async function getContestByType(type, res) {
  sql = `SELECT * FROM contest WHERE type = ?`;
  let result = await excuteQuery({ query: sql, values: type });
  if (result.length > 0) {
    return result;
  } else {
    return "No data";
  }
}

async function getContestById(id, res) {
  sql = `SELECT * FROM contest WHERE contestID = ?`;
  let result = await excuteQuery({ query: sql, values: id });
  if (result.length > 0) {
    return result;
  } else {
    return "No data";
  }
}

async function postContest(req) {
  let sql, req_data, data, getFieldsFiels, result;

  // getFieldsFiels = await postImage(req);
  // console.log(getFieldsFiels);

  req_data = JSON.parse(req.body);
  console.log(req_data);

  data = {
    contestTitle: req_data.title,
    // contestIMG: getFieldsFiels.img,
    entryFees: req_data.entryFees,
    prize: req_data.prize,
    announcement: req_data.announcement,
    type: req_data.type,
    megaQuiz: req_data.megaQuiz,
  };

  console.log(data);

  sql = "INSERT INTO contest SET ? ";

  result = await excuteQuery({ query: sql, values: data });

  if (result.affectedRows > 0) {
    sql = "INSERT INTO quiz (`contestID`, `userID`) VALUES (?, ?)";

    result = await excuteQuery({ query: sql, values: [result.insertId, 1] });

    if (result.affectedRows > 0) {
      return { success: true, contestID: result.insertId };
    } else {
      return { success: false, message: "Contest Haven't Created" };
    }
  } else {
    return { success: false, message: "Contest Haven't Created" };
  }
}

async function putContest(data, res) {
  let sql,
    result,
    id = data.contestID;
  sql = `UPDATE contest SET ? WHERE contestID = ${id}`;
  // sql = `UPDATE contest SET ? WHERE contestID = ${id}`;
  // sql = `UPDATE contest SET ? WHERE contestID = ${data[0].contestID}`;
  result = await excuteQuery({ query: sql, values: data });
  if (result.affectedRows > 0) {
    return "Update Success";
  } else {
    return "Update Fail";
  }
}
async function deleteContest(id, res) {
  sql = `DELETE FROM contest WHERE id = ${id}`;
  let result = await excuteQuery({ query: sql });
  if (result.affectedRows > 0) {
    return "Delete Success";
  } else {
    return "Delete Fail";
  }
}

// Create a async arrow function with name asyncArrow

async function postImage(req) {
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const form = new IncomingForm();

      form.parse(req, (err, _fields, files) => {
        console.log("Line 129");
        console.log(files);
        if (err) {
          console.log(err);
          reject("Parser Error");
        } else {
          console.log(files);
          const oldPath = files.img.filepath,
            newPath = `./public/contest/${new Date().getMonth()}/${new Date().getDate()}/${
              files.img.originalFilename
            }`;

          fs.rename(oldPath, newPath, function (err) {
            if (err) {
              reject("File Not Uploaded");
            } else {
              const img = `/contest/${new Date().getMonth()}/${new Date().getDate()}/${
                files.img.originalFilename
              }`;

              resolve({
                img,
              });
            }
          });
        }
      });
    });
  }, 4000);
}
