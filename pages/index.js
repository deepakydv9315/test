import Head from "next/head";
import Image from "next/image";

// Import components
import Home from "../components/home";
import Eader from "../components/header/header";
import { useEffect } from "react";
import { useRouter } from "next/router";

export default function Index({ isLogin, currentBalance }) {

  return (
    <>
      <Head>
        <title>Apay Quiz</title>
        <meta name="description" content="Apay Quiz - Play Quiz And Win Coin" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <section className="mobile quiz">
        <Eader isLogin={isLogin} balance={currentBalance} showBalance={true} />
        <Home />
      </section>
    </>
  );
}

function getCookie(cname, cookies) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(cookies);
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

export async function getServerSideProps(context) {
  const cookies = context.req.headers.cookie;
  const isRedirtect = getCookie("redirect", cookies);

  if ( isRedirtect === "" || isRedirtect === "true" || isRedirtect.length === 0) {

    context.res.writeHead(302, {
      Location: "/intro",
    });
    context.res.end();
  } else {
  }

  return {
    props: {},
  };
}
