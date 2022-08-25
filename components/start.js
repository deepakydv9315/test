import Link from "next/link";
import Image from "next/image";

import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function Start({}) {
  const [gainCoin, setGainCoin] = useState(0);
  const router = useRouter();

  useEffect(() => {
    // Set Cookie for Coin Balance
    const isLogin = getCookie("token"),
      balance = getCookie("balance");

    if (isLogin || isLogin.login >= 5) {
      // store balance in database
      let res = fetch("/api/balance", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          authorization: `${isLogin}`,
        },
        body: JSON.stringify({ balance }),
      });

      res.then((res) => {
        if (res.status == 200) {
          res.json().then((data) => {
            if (data.success == true) {
            }
          });
        }
      });
    }
    // getCorrectAnswer * 20
  });

  useEffect(() => {
    setGainCoin(localStorage.getItem("coin"));
  }, []);

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
      {/*  >>>>>>>>>>>>>>>>>>>>>>> start main content <<<<<<<<<<<<<<<<<<<<<<<   */}
      <div className="flex-c start-wrapper">
        <h1 className="wh-text">Time is over! Well Played 🤟</h1>
        <p>Winner announcement will be @ 5:45 PM</p>
        <div className="flex-r cr-info">
          <Image
            className="trophy-img"
            src={"/media/trophy.svg"}
            alt={"Trophy"}
            width={80}
            height={80}
          />
          <div>
            <h2 style={{ fontSize: "18px", fontWeight: "400" }}>
              You Win Coin
            </h2>
            <h3 style={{ fontSize: "38px", fontWeight: "400" }}>
              {" "}
              {gainCoin ? (<> {gainCoin} </>) : (<> 0 </>) }{" "}
            </h3>
          </div>
        </div>
        <Link href="#">
          <a
            onClick={() => {
              router.push("/");
            }}
            className="or-btn"
          >{`Play More`}</a>
        </Link>
      </div>

      {/*  >>>>>>>>>>>>>>>>>>>>>>> start list content <<<<<<<<<<<<<<<<<<<<<<<   */}

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
