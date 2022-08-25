import Link from "next/link";
import Image from "next/image";

import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Start({ currentBalance }) {
  const router = useRouter();

  useEffect(() => {
    function preventBack() {
      window.history.forward();
    }

    setTimeout(preventBack(), 0);

    window.onunload = function () {
      null;
    };
  });

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
      {/*  >>>>>>>>>>>>>>>>>>>>>>> start main content <<<<<<<<<<<<<<<<<<<<<<<   */}

      <div className="flex-c intro-start-wrapper">
        {/* image here  */}
        <Image
          src={"/media/coins-image.png"}
          width={169}
          height={69}
          alt={"Coin Image"}
        />
        <h1 className="wh-text">You have got 200 coins</h1>
        <p>
          Check out more quizzes to test your skills and keeps grabbing more
          coins!
        </p>

        <a
          onClick={() => {
            setCookie("redirect", "false");
            router.push("/");
          }}
          className="or-btn"
        >
          {`Play More`}
        </a>
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
