import Head from "next/head";

import Quiz from "../../components/quiz";

export default function Uiz({ totalQuiz, quiz, isLogin }) {
  // const [quizID, setQuizNo] = useState(null);

  return (
    <>
      <Head>
        <title>{`Apay Quiz - Play And Win with Quizy`}</title>
        <meta name="description" content="Login Page" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <section className="mobile start">
        <Quiz totalQuiz={totalQuiz} quizy={quiz} isLogin={isLogin} />
      </section>
    </>
  );
}

export async function getServerSideProps(ctx) {
    const { id } = ctx.query;
  const res = await fetch(`${ process.env.BASE_URL}/api/quiz?id=${id}`);
  const data = await res.json();

  return {
    props: {
      quiz: data.message,
      totalQuiz: data.message[0].length,
    },
  };
}
