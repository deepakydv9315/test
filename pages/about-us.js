import Header from "../components/header/header";
import About from "../components/about";

import Head from "next/head";

export default function contest_rule() {
  return (
    <>
    <Head>
        <title>About Us - Apay Quiz</title>
        <meta name="description" content="Apay Quiz - Play Quiz And Win Coin" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      
        <Header />
        <About />
    </>
  )
}
