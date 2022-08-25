import Image from "next/image";
import { useRouter } from "next/router";

export default function Intro() {
  const router = useRouter();

  const handleClick = () => {
    router.push("/");
  };

  return (
    <>
      <section className="mobile intro">
        {/*  >>>>>>>>>>>>>>>>>>>>>>> intro head  <<<<<<<<<<<<<<<<<<<<<<<   */}
        <div className="intro-head">
          {/* Add Image */}
          <Image
            src={"/media/logo.png"}
            width={132}
            height={27}
            alt={"Apay Quiz Logo"}
          />
        </div>

        {/*  >>>>>>>>>>>>>>>>>>>>>>> quiz questions content <<<<<<<<<<<<<<<<<<<<<<<   */}
        <div className="flex-c intro-wrapper">
          <h1>Quizzes for everyone!</h1>

          <div className="flex-r intro-box">
            <div className="flex-c box">
              <span>25+</span>
              <span>quiz</span>
              <span>categories</span>
            </div>

            <div className="flex-c box">
              <span>40M+</span>
              <span>users &</span>
              <span>counting</span>
            </div>

            <div className="flex-c box">
              <span>5L+</span>
              <span>daily</span>
              <span>coins</span>
            </div>
          </div>
          <h1>Play GK, Maths, History,</h1>
          <h1>IPL & Mega Quizzes to win</h1>
        </div>

        {/*  >>>>>>>>>>>>>>>>>>>>>>> intro page image<<<<<<<<<<<<<<<<<<<<<<<   */}
        <Image
          className="intro-img"
          src=""
          alt=""
          width={380}
          height={418}
        />

        <div className="flex-r p-intro-line">
          <span>Redirecting in 2 seconds..</span>
          {/* Redirect Direct */}
          <span  onClick={handleClick}>skip</span>
        </div>
      </section>
    </>
  );
}
