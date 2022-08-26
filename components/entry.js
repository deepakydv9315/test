import Link from "next/link";
import Image from "next/image";

import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { FaCoins, FaHandPointRight } from "react-icons/fa";

export default function Entry({
  isLogin,
  contestID,
  entryFees,
  prize,
  currentBalance,
  img
}) {
  const router = useRouter();


  const cutCoinFromBalance = (e) => {
    e.preventDefault();
    const newBalance = currentBalance - entryFees;
    setCookie("balance", newBalance, 1);

    // To Clear Coin wrongAnswer and correctAnswer into Local Storage
    localStorage.clear("coin");
    localStorage.clear("wrongAnswer");
    localStorage.clear("correctAnswer");
    router.push(`/quiz/${contestID}`);
  };

  function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
    let expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }
 
  return (
    <>
      {/*  >>>>>>>>>>>>>>>>>>>>>>> entry  content <<<<<<<<<<<<<<<<<<<<<<<   */}
      <div className="flex-r entry-img-wrapper">
        <span className="entry-img">
          <Image
            src={img}
            alt={"Alt Text"}
            width={100}
            height={100}
          />
        </span>
        <span className="flex-c entry-text">
          <h3>Play an Win</h3>
          <div className="flex-r entry-coin">
            <FaCoins className="yl-text" />
            <p>{prize}</p>
          </div>
        </span>
      </div>

      {/*  >>>>>>>>>>>>>>>>>>>>>>> entry text content <<<<<<<<<<<<<<<<<<<<<<<   */}
      <div className="flex-c entry-text-wrapper">
        <div className="flex-r entry-list">
          <FaHandPointRight className="bl-text" />
          <span>You got 60 seconds</span>
        </div>
        <div className="flex-r entry-list">
          <FaHandPointRight className="bl-text" />
          <span>Answer as many question as you can</span>
        </div>
        <div className="flex-r entry-list">
          <FaHandPointRight className="bl-text" />
          <span>
            Entry Fee : 
            {entryFees ? (
              <span>
                {" "}<FaCoins className="yl-text" /> {entryFees}{" "}
              </span>
            ) : (
              " Free "
            )}
          </span>
        </div>

        {entryFees ? (
          <>
            <div className="flex-r entry-list">
              <span>
                Your current balance <FaCoins className="yl-text" />{" "}
                {currentBalance}
              </span>
            </div>
            <p>
              Tap below to start playing this quiz, {entryFees} coins will be
              deducted from your wallet when you tap below
            </p>
          </>
        ) : (
          ""
        )}
        <div className="flex-c entry-btn">
          {isLogin ? (
            <>
                <a
                  className="btn"
                  onClick={(e) => {
                    cutCoinFromBalance(e);
                  }}
                >
                  Start Quiz
                </a>
            </>
          ) : (
            <>
              {" "}
              <Link href={`/login/${contestID}`}>
                <a className="or-btn">Join Now</a>
              </Link>
              <a>
                <span
                className="btn"
                  onClick={(e) => {
                    cutCoinFromBalance(e);
                  }}
                >
                  Play as Guest
                </span>
              </a>
            </>
          )}
        </div>
      </div>
    </>
  );
}
