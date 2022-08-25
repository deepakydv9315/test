import React from "react";
import Image from "next/image";

export default function About() {
  return (
    <>
      <section className="flex-c mobile about">
        <Image
          src={"/media/about-us-page-image.svg"}
          width={446}
          height={542}
          alt={"About Us Image"}
        />
        <h1>A Widely Accepted Platform for Fun Seekers</h1>
        <p>
          Apayquiz is a completely new platform for the online games lovers. The
          best part is that all games available on our website are free and can
          be enjoyable on multiple devices, including desktop, mobile phones,
          tablets, and iPhones or iPads. So, all you need to bother only about
          what kind of new online game you want to try and start having fun!
        </p>
        <p>
          It is our pleasure to help players of all ages to explore the best
          world of PC and HTML5 games for free. We respect the feelings and
          tastes of every gamer right from those who are crazy for death-defying
          action challenges to the foodies who love to practice their culinary
          skills by checking out a huge variety of cooking games.
        </p>

        <h1>We Compile Best Online Games in One Place</h1>
        <p>
          On APAYQUIZ, we have got you covered with all the popular online games
          categories, such as high flying airplane games, mind boggling puzzles,
          adrenaline-infused racing games, thrilling shooting games, many more.
          You can even find a fabulous collection of stickman games such as
          Stickman Downhill, Stickman Dirtbike, and Stickman Freeride.
        </p>
      </section>
    </>
  );
}
