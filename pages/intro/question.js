import Head from "next/head";

// Import components
import Quiz from "../../components/intro/quiz";

export default function Questions({ quiz, isLogin }) {
  return (
    <>
      <Head>
        <title>{`Quiz - Play And Win with Quizy`}</title>
        <meta name="description" content="Login Page" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <section className="mobile start">
        {/* <span> {quiz} </span> */}
        {
          // !loading ? <Quiz totalQuiz={2} quizy={quiz} /> : <></>
        }

        <Quiz quizy={quiz} isLogin={isLogin} />
      </section>
    </>
  );
}

export async function getServerSideProps() {
  const res = await fetch(`${process.env.BASE_URL}/api/quiz`);
  const data = await res.json();

  return { props: { quiz: data.message } };
}
