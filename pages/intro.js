import Head from "next/head";
import { useEffect } from "react";
import { useRouter } from "next/router";

// Import components
import Intro from "../components/intro";

export default function Intro_Page() {
  const router = useRouter();
  
  useEffect(() => {
      
    setTimeout(() => {
      router.push("/intro/question");
    }, 2000);

  });
 
  return (
    <>
      <Head>
        <title>{`Intro - Quizy`}</title>
        <meta name="description" content="Login Page" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <Intro />
    </>
  );
}