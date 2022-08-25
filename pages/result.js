import Head from "next/head"

import Result from "../components/result"

export default function result() {
  return (
    <>
      <Head>
        <title>Result | Quizzy </title>
        <meta name="description" content="Entry Page" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <section className="mobile result">
        <Result />
      </section>
    </>
  )
}
