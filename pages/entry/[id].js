import Head from "next/head";

import Entry from "../../components/entry";

export default function Etry({
  isLogin,
  entryFees,
  currentBalance,
  id,
  prize,
  contestIMG,
}) {
  return (
    <>
      <Head>
        <title>Entry Page </title>
        <meta name="description" content="Entry Page" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <section className="mobile entry">
        <Entry
          isLogin={isLogin}
          contestID={id}
          currentBalance={currentBalance}
          entryFees={entryFees}
          prize={prize}
          img={contestIMG}
        />
      </section>
    </>
  );
}

export async function getServerSideProps(ctx) {
  const { query } = ctx;
  const { id } = query;

  const res = await fetch(`${process.env.BASE_URL}/api/contest?id=${id}`);
  const data = await res.json();

  const { entryFees, prize, contestIMG } = data[0];
  return {
    props: {
      entryFees,
      prize,
      id,
      contestIMG,
    },
  };
}
