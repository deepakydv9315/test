import { Router, useRouter } from "next/router";
import { useState, useEffect, useRef } from "react";

import { GiCheckMark } from "react-icons/gi";

import { IoMdClose } from "react-icons/io";

import Link from "next/link";

export default function Quiz({ totalQuiz, quizy, isLogin }) {
  // set First Quiz
  const [quiz_no, setQuizNo] = useState(1); // current quiz no
  const [correctAnswer, setCorrect] = useState(0);
  const [wrongAnswer, setWrong] = useState(0);

  const router = useRouter();

  const Ref = useRef(null);

  // The state for our timer
  const [timer, setTimer] = useState("60");

  const getTimeRemaining = (e) => {
    const total = Date.parse(e) - Date.parse(new Date());
    const seconds = Math.floor((total / 1000) % 60);

    return {
      total,
      seconds,
    };
  };

  const startTimer = (e) => {
    let { total, seconds } = getTimeRemaining(e);
    if (total >= 0) {
      // update the timer
      // check if less than 10 then we need to
      // add '0' at the beginning of the variable
      setTimer(seconds > 9 ? seconds : "0" + seconds);

      if (seconds === 0) {
        router.push("/start");
      }

      removeClass();
    }
  };

  const clearTimer = (e) => {
    // If you adjust it you should also need to
    // adjust the Endtime formula we are about
    // to code next
    setTimer("60");

    // If you try to remove this line the
    // updating of timer Variable will be
    // after 1000ms or 1sec
    if (Ref.current) clearInterval(Ref.current);
    const id = setInterval(() => {
      startTimer(e);
    }, 1000);
    Ref.current = id;
  };

  const getDeadTime = () => {

    let deadline = new Date();

    // This is where you need to adjust if
    // you entend to add more time
    deadline.setSeconds(deadline.getSeconds() + 60);
    return deadline;
  };

  /* 
  We can use useEffect so that when the component
  mount the timer will start as soon as possible

  We put empty array to act as componentDid
  mount only
 */

  useEffect(() => {

    clearTimer(getDeadTime());
  }, []);

  //   <<<<<<<<<<<<<<< Don't Edit This >>>>>>>>>>>>>>>

  const removeClass = () => {
    const quiz = document.querySelectorAll(".quiz-option");
    quiz.forEach((item) => {
      item.classList.remove("true");
      item.classList.remove("false");
      item.classList.remove("disable-btn");
    });
  };

  const handleClick = (ans) => (e) => {
    e.preventDefault();

    const getBalance = parseInt(getCookie("balance"));

    if (typeof window !== "undefined") {
      const quiz = document.querySelectorAll(".quiz-option");
      quiz.forEach((item) => {
        item.classList.add("disable-btn");
      });

      let newBalance = 0;

      // alert("Hey I am Running")

      if (quizy[0][quiz_no - 1].quizAnswer == ans) {
        // IF answer is correct

        // To Set Cookie Balance
        newBalance = getBalance + 10;
        setCookie("balance", newBalance, 1);

        // To Store Coins in Local Storage
        let getCoin = localStorage.getItem("coin");
        if (getCoin === null) {
          localStorage.setItem("coin", 10);
        } else {
          localStorage.setItem("coin", parseInt(getCoin) + 10);
        }

        // To Store Correct Answer in Local Storage
        localStorage.setItem("correctAnswer", parseInt(correctAnswer) + 1);

        setCorrect(correctAnswer + 1);
        e.currentTarget.classList.add("true");

        setTimeout(() => {
          if (quiz_no < totalQuiz) {
            setQuizNo(quiz_no + 1);
          } else {
            router.push("/start");
          }
        }, 500);
      } else {
        // IF answer is wrong
        e.currentTarget.classList.add("false");

        setWrong(wrongAnswer + 1);

        // To Store Wrong Answer in Local Storage
        localStorage.setItem("wrongAnswer", parseInt(wrongAnswer) + 1);

        var element = document.getElementById(quizy[0][quiz_no - 1].quizAnswer);
        element.classList.add("true");

        setTimeout(() => {
          if (quiz_no < totalQuiz) {
            setQuizNo(quiz_no + 1);
          } else {
            router.push("/start");
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

  function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(";");
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == " ") {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }

  return (
    <>
      {/*  >>>>>>>>>>>>>>>>>>>>>>> quiz head  <<<<<<<<<<<<<<<<<<<<<<<   */}
      {/* <div className="quiz-name">{`Play and Win 200000coin`}</div> */}
      <div className="flex-r quiz-head quiz-info">
        <div className="flex-r right-num">
          <span className="right-ans">
            {" "}
            <GiCheckMark />{" "}
          </span>
          <span>{correctAnswer}</span>
        </div>

        <div className="flex-c clock">
          <span id="second">{timer}</span>
          <span>sec left</span>
        </div>

        <div className="flex-r wrong-num">
          <span className="wrong-ans">
            <IoMdClose />
          </span>
          <span>{wrongAnswer}</span>
        </div>
      </div>

      {/*  >>>>>>>>>>>>>>>>>>>>>>> quiz questions content <<<<<<<<<<<<<<<<<<<<<<<   */}
      <div className="quiz-wrapper">
        <h1 className="ques-wrapper">
          <span className="ques-num">
            Question-
            {quiz_no}/{totalQuiz}{" "}
          </span>
          <span className="ques">{quizy[0][quiz_no - 1].quiz_name}</span>
        </h1>

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

          {isLogin ? (
            <> </>
          ) : (
            <>
              <div className="p-login-line wh-text">
                Existing user?{" "}
                <Link href="/login">
                  <a className="wh-text">Login</a>
                </Link>
              </div>
            </>
          )}
        </div>
      </div>

      {/*  >>>>>>>>>>>>>>>>>>>>>>> quiz list content <<<<<<<<<<<<<<<<<<<<<<<   */}
      <ul className="quiz-list">
        <h2 className="yl-text">Play Quiz and Win Coins!</h2>
        <li>Get coins on the completion of each quiz</li>
        <li>Upgrade your skills with our top quizzes.</li>
        <li>
          We have many top trending categories like Cricket, World, India,
          Business & many more!
        </li>
        <li>Millions of quiz admirer like you showed trust on us.</li>
        <li>Challenge lakhs of players from across the world!</li>
      </ul>
    </>
  );
}
