import { useState } from "react";

import Image from "next/image";
import Link from "next/link";
import { Router, useRouter } from "next/router";
import { getCookieParser } from "next/dist/server/api-utils";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const router = useRouter();

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "email") {
        setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === "" || password === "") {
      setError("Please fill in all fields");
    } else {
      const data = { email, password, usrCoin: getCookie("balance") };

      let res = fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      res.then((res) => {
        if (res.status == 200) {
          res.json().then((data) => {
            if (data.success == true) {
              setCookie("token", data.token, 1);
              setCookie("balance", data.usrCoin, 1);
                router.push(`/`);
            } else {
              setError(data.message);
            }
          });
        } else {
          setError("Something went wrong");
        }
      });
    }
  };

  function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
    let expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
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
      {/*  >>>>>>>>>>>>>>>>>>>>>>> login page img <<<<<<<<<<<<<<<<<<<<<<<   */}
      <div className="flex-c login-img">
        <Image src="/media/login-img.png" alt="" width={100} height={100} />
        <h2>Join Quizy now</h2>
        <h2>and start earning coins</h2>
      </div>
      {/*  >>>>>>>>>>>>>>>>>>>>>>> login wrapper <<<<<<<<<<<<<<<<<<<<<<<   */}

      <div className="flex-c login-wrapper">
        <p className="spam-line">*We promise we will never spam you</p>
        <form onSubmit={handleSubmit} className=" flex-c login-form">
          <input
            onChange={handleChange}
            type="mail"
            name="email"
            placeholder="E-Mail"
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
            title="Must contain @ and ."
            required
          />
          {error ? <p className="error">{error}</p> : null}

          <input
            onChange={handleChange}
            type="password"
            name="password"
            placeholder="Password"
            required
          />

          <p className="tc-line">
            By continuing, you agree to our <Link href="#">Privacy Policy</Link>{" "}
            {`&`} <Link href="#">Terms of use</Link>
          </p>
          <input className="btn" type="submit" value="LOGIN" />
        </form>
        <ul className="login-list">
          <li>Over 40 million quiz enthusiasts have played with us</li>
          <li> {`We are India’s favorite Quiz destination`} </li>
          <li>Over 100 quizzes are waiting for you</li>
        </ul>
      </div>
    </>
  );
}
