import Head from 'next/head'
import Image from 'next/image'

// Import components
import Header from '../../components/header/header'
import Login from '../../components/login/login'

export default function LoginByID({contestID}) {
  return (
    <>
      <Head>
        <title>Login - Quizy</title>
        <meta name="description" content="Login Page" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <section className="mobile login">
        <Header ham={false} />

        <Login contestID={contestID} />


      </section>
    </>
  )
}

export async function getServerSideProps(ctx) {
    const { id } = ctx.query;

    return {
        props : { contestID : id}
    }
}