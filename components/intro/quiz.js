import { Router, useRouter } from "next/router";
import { useState, useEffect } from "react";

import Link from "next/link";

export default function Quiz({ quizy, isLogin }) {
  // set First Quiz
  const [quiz_no, setQuizNo] = useState(1); // current quiz no
  const router = useRouter();

  useEffect(() => {
    // Remove Class
    const removeClass = () => {
      const quiz = document.querySelectorAll(".quiz-option");
      quiz.forEach((item) => {
        item.classList.remove("true");
        item.classList.remove("false");
        item.classList.remove("disable-btn");
      });
    };

    removeClass();
  });

  const handleClick = (ans) => (e) => {
    e.preventDefault();

    if (typeof window !== "undefined") {
      const quiz = document.querySelectorAll(".quiz-option");
      quiz.forEach((item) => {
        item.classList.add("disable-btn");
      })

      if (quizy[0][quiz_no - 1].quizAnswer == ans) { // IF answer is correct

        e.currentTarget.classList.add("true");

        setTimeout(() => {
          if (quiz_no < 2) {
            setQuizNo(quiz_no + 1);
          } else {
            setCookie("balance", 200, 1)
            router.push("/intro/start");
          }
        }, 500);

      } else { // IF answer is wrong

        e.currentTarget.classList.add("false");

        var element = document.getElementById(quizy[0][quiz_no - 1].quizAnswer);
        element.classList.add("true");

        setTimeout(() => {
          if (quiz_no < 2) {
            setQuizNo(quiz_no + 1);
          } else {
            setCookie("balance", 200, 1)
            router.push("/intro/start");
          }
        }, 500);

      }

    }

  };

  function setCookie(cname, cvalue, exdays) {
    const d = new Date();

    if (exdays) {
      d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
      let expires = "expires=" + d.toUTCString();
      document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    } else {
      document.cookie = cname + "=" + cvalue + ";path=/";
    }
  }


  return (
    <>
      {/*  >>>>>>>>>>>>>>>>>>>>>>> quiz head  <<<<<<<<<<<<<<<<<<<<<<<   */}
      <div className="quiz-head">
        <h1 className="head-text">{`Quick Start!`}</h1>
        <p>
          Just answer 2 questions and win{" "}
          <span className="yl-text">200 coins</span>
        </p>
      </div>

      {/*  >>>>>>>>>>>>>>>>>>>>>>> quiz questions content <<<<<<<<<<<<<<<<<<<<<<<   */}
      <div className="quiz-wrapper">
        <div className="ques-wrapper">
          <span className="ques-num">
            Question-
            {quiz_no}/{2}{" "}
          </span>
          <span className="ques">{quizy[0][quiz_no - 1].quiz_name}</span>
        </div>

        <div className="flex-r ans-wrapper">
          <span
            id={quizy[0][quiz_no - 1].quizAnswer}
            onClick={handleClick(1)}
            className="ans-box quiz-option"
          >
            {quizy[0][quiz_no - 1].quiz_option_One}
          </span>

          <span
            id={quizy[0][quiz_no - 1].quizAnswer}
            onClick={handleClick(2)}
            className="ans-box quiz-option"
          >
            {quizy[0][quiz_no - 1].quiz_option_two}
          </span>

          <span
            id={quizy[0][quiz_no - 1].quizAnswer}
            onClick={handleClick(3)}
            className="ans-box quiz-option"
          >
            {quizy[0][quiz_no - 1].quiz_option_three}
          </span>

          <span
            id={quizy[0][quiz_no - 1].quizAnswer}
            onClick={handleClick(4)}
            className="ans-box quiz-option"
          >
            {quizy[0][quiz_no - 1].quiz_option_four}
          </span>

          <div className="p-login-line wh-text">
            Existing user?{" "}
            <Link href="/login">
              <a className="wh-text">Login</a>
            </Link>
          </div>
        </div>
      </div>

      {/*  >>>>>>>>>>>>>>>>>>>>>>> quiz list content <<<<<<<<<<<<<<<<<<<<<<<   */}
      <ul className="quiz-list">
        <h2 className="yl-text">Play Quiz and Win Coins!</h2>
        <li>
          Get coins on the completion of each quiz
        </li>
        <li>Upgrade your skills with our top quizzes.</li>
        <li>
          We have many top trending categories like Cricket, World,
          India, Business & many more!
        </li>
        <li>Millions of quiz admirer like you showed trust on us.</li>
        <li>Challenge lakhs of players from across the world!</li>
      </ul>
    </>
  );
}
