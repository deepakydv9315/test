import excuteQuery from "../../config/db.js";

export default async function handler(req, res) {
  let msg, req_data;

  if (req.method === "GET") {
    if (req.query.type !== null && req.query.type !== undefined) {
      msg = await getContestByType(req.query.type);

      res.status(200).json({ method: req.method, message: msg });
    } else if (req.query.id !== null && req.query.id !== undefined) {
      msg = await getContestById(req.query.id);

      res.status(200).json(msg);
    }
  } else if (req.method === "POST") {
    const data = {
      announcement: req.body.announcement,
      contestTitle: req.body.title,
      contestDate: req.body.contestDate,
      entryFees: req.body.entryFees,
      contestIMG: req.body.img,
      prize: req.body.prize,
      type: req.body.type,
      megaQuiz: req.body.megaQuiz,
    };

    msg = await postContest(data, res);

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

async function postContest(data, res) {
  const query_one = "INSERT INTO `contest` SET ? ";

  const result_one = await excuteQuery({ query: query_one, values: data });
  if (result_one.affectedRows > 0) {
    let result_data = {
      contestID: result_one.insertId,
      userID: 2,
    };
    const query_two = "INSERT INTO `quiz` SET ? ";

    const result_two = await excuteQuery({
      query: query_two,
      values: result_data,
    });
    if (result_two.affectedRows > 0) {
      return { success: true, contestID: result_data.contestID };
    } else {
      return { success: false, message: "Quiz Haven't Linked" };
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
