import excuteQuery from "../../config/db.js";

export default async function handler(req, res) {
  let msg,
    req_data,
    send = [];

  if (req.method === "GET") {
    if (req.query.id) {
      msg = await getQuiz(req.query.id, res);

      msg.quiz_list.map((item) => {
        send.push(JSON.parse(item));
      });

      res.status(200).json({ method: "GET", message: send });
    } else {
      // Genrate random id
      msg = await getQuizRandom(res);

      msg.quiz_list.map((item) => {
        send.push(JSON.parse(item));
      });

      res.status(200).json({ method: "GET", message: send });
    }
  } else if (req.method === "POST") {
    let no_of_quiz = req.body.no_of_quiz,
      quiz_list = [],
      i;

    for (i = 1; i <= no_of_quiz + 1; i++) {
      quiz_list.push({
        quiz_id: i,
        quiz_name: req.body.quizList["quiz_title_" + i],
        quiz_option_One: req.body.quizList["quiz_option_one_" + i],
        quiz_option_two: req.body.quizList["quiz_option_two_" + i],
        quiz_option_three: req.body.quizList["quiz_option_three_" + i],
        quiz_option_four: req.body.quizList["quiz_option_four_" + i],
        quizAnswer: req.body.quizList["quiz_answer_" + i],
      });
    }

    msg = await postQuiz(JSON.stringify(quiz_list));

    res.status(200).json({ success: true, message: msg });
    // res.status(200).json({ method: "POST"});
  } else if (req.method === "PUT") {
    let no_of_quiz = req.body.no_of_quiz,
      quiz_list = [],
      i,
      id;
    id = req.body.id;
    for (i = 1; i <= no_of_quiz; i++) {
      quiz_list.push({
        quiz_id: i,
        quiz_name: req.body["quiz_title_" + i],
        quiz_option_One: req.body["quiz_option_one_" + i],
        quiz_option_two: req.body["quiz_option_two_" + i],
        quiz_option_three: req.body["quiz_option_three_" + i],
        quiz_option_four: req.body["quiz_option_four_" + i],
        quizAnswer: req.body["quiz_answer_" + i],
      });
    }

    msg = await putQuiz(id, JSON.stringify(quiz_list), res);

    res.status(200).json({ method: "PUT", message: msg });
  } else if (req.method === "DELETE") {
    msg = await deleteQuiz(req.body.id);

    res.status(200).json({ method: "DELETE", message: msg });
  } else {
    res.status(404).json({ method: "Not found" });
  }
}

let sql;
async function getQuiz(id, res) {
  let quiz_list = [];
  sql = `SELECT * FROM quiz_list WHERE quizID = ?`;
  let result = await excuteQuery({ query: sql, values: [id] });
  if (result.length > 0) {
    result.map((item) => {
      quiz_list.push([item.quizOption]);
    });

    return { quiz_list };
  } else {
    return "No data";
  }
}

// Get Randm Quiz
async function getQuizRandom(res) {
  let quiz_list = [];
  sql = `SELECT * FROM quiz_list ORDER BY RAND() LIMIT 1`;
  let result = await excuteQuery({ query: sql });
  if (result.length > 0) {
    result.map((item) => {
      quiz_list.push([item.quizOption]);
    });

    return { quiz_list };
  } else {
    return "No data";
  }
}

async function postQuiz(data, res) {
  sql = "INSERT INTO quiz_list (`quizOption`) VALUES (?)";
  excuteQuery({ query: sql, values: data }).then((result) => {
    const quizID = result.insertId;
    sql = "SELECT `contestID` FROM quiz_list ORDER BY quizID DESC LIMIT 1";

    excuteQuery({ query: sql }).then((result) => {
      const contestID =  result[0].contestID ;
      sql = "UPDATE `quiz` SET `quizID`= ? WHERE `contestID` = ?";

      excuteQuery({ query: sql, values: [quizID, contestID] }).then((result) => {
        return "Quiz added successfully";
      })

    })

  })
}

async function putQuiz(id, quiz_data, res) {
  sql = "UPDATE quiz_list SET `quizOption`= ? WHERE `quizID` = ?";
  let result = await excuteQuery({ query: sql, values: [quiz_data, id] });
  if (result.affectedRows > 0) {
    return "Update Success";
  } else {
    return "Update Fail";
  }
}

async function deleteQuiz(id, res) {
  sql = `DELETE FROM quiz_list WHERE id = ${id}`;
  let result = await excuteQuery(sql);
  if (result.affectedRows > 0) {
    return "Delete Success";
  } else {
    return "Delete Fail";
  }
}

/* 
"quiz_title_1" : "Which monument is located in India?",
"quiz_option_one_1" : "STATUE OF UNITY",
"quiz_option_two_1" : "STATUE OF LIBERTY",
"quiz_option_three_1" : "CHRIST THE REDEEMER",
"quiz_option_four_1" : "STATUE OF PRAGUE",
"quiz_answer_1" : 1,

"quiz_title_2" : "Which of these is an art movement?",
"quiz_option_one_2" : "CUBISM",
"quiz_option_two_2" : "ODISSI",
"quiz_option_three_2" : "KABUKI",
"quiz_option_four_2" : "DADA",
"quiz_answer_2" : 1,

"quiz_title_3" : "Which of these is a type of art?",
"quiz_option_one_3" : "PAINTING",
"quiz_option_two_3" : "SCULPTURE",
"quiz_option_three_3" : "DRAWING",
"quiz_option_four_3" : "MUSIC",
"quiz_answer_3" : 1, 
*/
