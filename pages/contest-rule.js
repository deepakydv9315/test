import Header from "../components/header/header";
import Rules from "../components/rules";
import Head from "next/head";

export default function contest_rule() {
  return (
    <>
      <Head>
        <title>Contest Rules - Apay Quiz</title>
        <meta name="description" content="Apay Quiz - Play Quiz And Win Coin" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <Header />
      <Rules />
    </>
  );
}
