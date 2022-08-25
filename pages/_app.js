import "../styles/globals.css";

import { useEffect, useState } from "react";
import { TokenExpiredError } from "jsonwebtoken";
import { useRouter } from "next/router";
import { Cookies } from "next/dist/server/web/spec-extension/cookies";

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  const [login, setLogin] = useState(false);
  const [balance, setBalance] = useState(0);
  const [token, setToken] = useState(null);

  // Redirection Completed
  useEffect(() => {
    const redirect = getCookie("redirect");

    setTimeout(() => {
      if (redirect === "" || redirect === "true") {
        if (
          router.pathname === "/intro" ||
          router.pathname === "/intro/question" ||
          router.pathname === "/intro/start"
        ) {
        } else {
          // timer for 2 second
          router.push("/intro");
        }
      } else {
        setTokenBalnce(); // It is Function not A Variable
      }
    }, 500);

    async function setTokenBalnce() {
      const isTokenSet = getCookie("token");

      if (isTokenSet || isTokenSet.length >= 5) {
        setLogin(true);
        const isBalanceSet = getCookie("balance");
        if (isBalanceSet) {
          setBalance(isBalanceSet);
        }
      } else {
        setLogin(false);
        const isBalanceSet = getCookie("balance");
        if (isBalanceSet) {
          setBalance(isBalanceSet);
        }
      }
    }
  }, [router]);

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

  return <Component {...pageProps} isLogin={login} currentBalance={balance} />;
}

export default MyApp;
