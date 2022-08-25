import { FaRegFileImage } from "react-icons/fa";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

export default function Contest() {
  const [quizList, setQuizList] = useState([]);
  const [no_of_quiz, setno_of_quiz] = useState(0);

  // To Clear All Input Fields
  const clearInputFields = (e) => {
    e.preventDefault();
    if (typeof window !== "undefined") {
      /* document.getElementById("quiz-title").value = "";
      document.getElementById("quiz-option-1").value = "";
      document.getElementById("quiz-option-2").value = "";
      document.getElementById("quiz-option-3").value = "";
      document.getElementById("quiz-option-4").value = ""; */
      Array.from(document.querySelectorAll("input[type=text]")).forEach(
        input => (input.value = "")
      );
      Array.from(document.querySelectorAll("input[type=radio]")).forEach(
        input => (input.checked = false)
      );
      // document.getElementById("correctAnswer")[0].checked = false;
    }
  };

  // To Store Data In Quiz Lit Variable
  const handleChangeValue = (e) => {
    const { name, value } = e.target;
    setQuizList((prevState) => ({
      ...prevState,
      [name]: value.toLowerCase(),
    }));
    // push no_of_quiz to quizList

  };

  // For Previous And Next Button
  const handleChangeButton = (btn) => (e) => {
    e.preventDefault();
    if (btn === "next") {
      setno_of_quiz(no_of_quiz + 1);
      clearInputFields(e);
    } else if (btn === "prev") {
      setno_of_quiz(no_of_quiz - 1);
      clearInputFields(e);
    }
  };

  // To Get Contest ID from Contest

  // To Post Data Into Quiz
  const handleSubmit = async (e) => {
    e.preventDefault();
    // make a post request to the server
    let res = await fetch("/api/quiz", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      // Send quizList and no_of_quiz as body
      body: JSON.stringify({
        quizList,
        no_of_quiz,
      }),
        
        
    });

    // get the response body (the data) and parse it as JSON
    let data = await res.json();
    console.log(data);

    if (data.success === true) {
      alert("Quiz Added");
    } else {
      alert("Something Went Wrong");
    }

    // clear the input fields
    clearInputFields(e);
  };
  return (
    <>
      <section className="mobile contest">
        <h1 className="wh-text">Add Quiz</h1>
        <div className="flex-c contest-wrapper">
          <h2 className="wh-text">
            Quiz number: <span className="yl-text"> {no_of_quiz} </span>
          </h2>

          <input
            onChange={handleChangeValue}
            id="quiz-title"
            type="text"
            name={"quiz_title_" + (no_of_quiz + 1) }
            className="contest-info contest-title"
            placeholder="Question Title..."
            required
          />

          <input
            onChange={handleChangeValue}
            id="quiz-option-1"
            type="text"
            name={"quiz_option_one_" + (no_of_quiz + 1)}
            className="contest-info"
            placeholder="Option A"
            required
          />
          <input
            onChange={handleChangeValue}
            id="quiz-option-2"
            type="text"
            name={"quiz_option_two_" + (no_of_quiz + 1)}
            className="contest-info"
            placeholder="Option B"
            required
          />
          <input
            onChange={handleChangeValue}
            id="quiz-option-3"
            type="text"
            name={"quiz_option_three_" + (no_of_quiz + 1)}
            className="contest-info"
            placeholder="Option C"
            required
          />
          <input
            onChange={handleChangeValue}
            id="quiz-option-4"
            type="text"
            name={"quiz_option_four_" + (no_of_quiz + 1)}
            className="contest-info"
            placeholder="Option D"
            required
          />
        </div>

        <div className="flex-r quiz-ans">
          <span className="flex-r">
            <span>A:</span>
            <input
              onChange={handleChangeValue}
              id="correctAnswer"
              type="radio"
              name={"quiz_answer_" + (no_of_quiz + 1)}
              value="1"
            />
          </span>

          <span className="flex-r">
            <span>B:</span>
            <input
              onChange={handleChangeValue}
              id="correctAnswer"
              type="radio"
              name={"quiz_answer_" + (no_of_quiz + 1)}
              value="2"
            />
          </span>

          <span className="flex-r">
            <span>C:</span>
            <input
              onChange={handleChangeValue}
              id="correctAnswer"
              type="radio"
              name={"quiz_answer_" + (no_of_quiz + 1)}
              value="3"
            />
          </span>

          <span className="flex-r">
            <span>D:</span>
            <input
              onChange={handleChangeValue}
              id="correctAnswer"
              type="radio"
              name={"quiz_answer_" + (no_of_quiz + 1)}
              value="4"
            />
          </span>
        </div>

        <div className="flex-r quiz-nav-btn">
          <button className="btn" onClick={handleChangeButton("prev")}>
            Prev
          </button>
          <button className="btn" onClick={handleChangeButton("next")}>
            Next
          </button>
        </div>

        <button className="btn or-btn" onClick={handleSubmit}>
          Add Quiz
        </button>
      </section>
    </>
  );
}
