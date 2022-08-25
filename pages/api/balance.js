import { decode } from "jsonwebtoken";
import excuteQuery from "../../config/db.js";

export default async function handler(req, res) {
  if (req.method === "GET") {
    const token = req.headers.authorization;

    res.status(200).json({ message: "Hello World" });
  } else if (req.method === "PUT") {
    const token = req.headers.authorization,
      coin = req.body.balance;

    const userMail = decode(token).id;

    const balance = await putBalance(userMail, coin);
    res.status(200).json({balance});

  }
}

async function getBalance(id) {
  const sql = "SELECT `userCoin` FROM `users` WHERE `usrID` = ?";
  const result = await excuteQuery({ query: sql, values: id });

  if (result.length > 0) {
    return result[0].userCoin;
  } else {
    return "No Data Found";
  }
}

async function putBalance(userMail, userCoin) {
  const sql = "UPDATE `users` SET `userCoin`= ? WHERE `usrMail` = ?";
  await excuteQuery({ query: sql, values: [userCoin, userMail] }).then(
    (result) => {
      if (result.affectedRows > 0) {

        return { success: "true", message: "Balance Update Successfully" };
      }
    }
  );
}
