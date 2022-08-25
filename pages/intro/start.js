import Head from "next/head";

// Import components
import Header from "../../components/header/header";
import Start from "../../components/intro/start";

export default function start({isLogin, currentBalance}) {

  return (
    <>
      <Head>
        <title>{`Let's Start - Quizy`}</title>
        <meta name="description" content="Login Page" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <section className="mobile start">
        <Start />
      </section>
    </>
  );
}
