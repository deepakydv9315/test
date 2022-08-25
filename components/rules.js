import { MdOutlineArrowRight } from "react-icons/md";

export default function fules() {
  return (
    <>
      <section className="flex-c mobile contest-rule">
        <ul className="list">
            <h1>
                Contest Rules!
            </h1>
            <li>
                <MdOutlineArrowRight />
                <span>
                    The winners for each quiz will be declared based on
                    the scores they obtain during the participation in the quiz.
                </span>

            </li>
            <li>
            <MdOutlineArrowRight />
                <span>
                    There will be a fixed time for declaring the winners of each quiz
                </span>
            </li>

            <li>
                <MdOutlineArrowRight />
                <span>
                    You will have overall 60 seconds to solve as many as questions from 20 questions in quiz.
                </span>
            </li>

            <li>
                <MdOutlineArrowRight />
                <span>
                    There will be 4 options given below each question and one will be the answer for it out of them.
                </span>
            </li>

            <li>
                {/*  icon  here   */}
                <span>
                    Each right answer fetches you 25 points.
                </span>
            </li>

            <li>
                {/*   icon here   */}
                <span>
                    Each wrong answer gives you (-) 10 points.
                </span>
            </li>

            <li>
                <MdOutlineArrowRight />
                <span>
                    Do not forget to use the lifelines in case if you are stuck during the contest.
                </span>
            </li>

            <li>
                <MdOutlineArrowRight />
                <span>
                    Remember users can use each lifeline once during the each contest. Use a given amount of coins
                    from your coin bank or watch an ad for a few secs to use the lifeline for free!
                </span>
            </li>
        </ul>
    </section>
    </>
  )
}
