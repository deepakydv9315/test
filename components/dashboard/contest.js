import { useRouter, Router } from "next/router";
import { FaRegFileImage } from "react-icons/fa";
import { useState, useEffect } from "react";
import Link from "next/link";
import { JsonWebTokenError } from "jsonwebtoken";

export default function Contest() {
  const [contest, setContest] = useState([]);
  const [error, setError] = useState(false);

  const router = useRouter();

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;

    if (name === "title") {
      setContest({ ...contest, title: value });
    } else if (name === "img") {
      e.target.files[0] && setContest({ ...contest, img: e.target.files[0] });
      // setContest({ ...contest, img: value });
    } else if (name === "entryFees") {
      setContest({ ...contest, entryFees: value });
    } else if (name === "prize") {
      setContest({ ...contest, prize: value });
    } else if (name === "announcement") {
      setContest({ ...contest, announcement: value });
    } else if (name === "type") {
      setContest({ ...contest, type: value });
    } else if (name === "megaQuiz") {
      setContest({ ...contest, megaQuiz: value });
    } else if( name === "date") {
      setContest({ ...contest, date: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      contest.title === "" ||
      contest.img === "" ||
      contest.entryFees === "" ||
      contest.prize === "" ||
      contest.announcement === "" ||
      contest.type === "" ||
      contest.megaQuiz === "" ||
      contest.date === ""
    ) {
      setError("Please fill in all fields");
      console.log(error);
    } else {
      // upload image using fetch api
      const formData = new FormData();
      formData.append("img", contest.img);
      const res = fetch("/api/uploadFile", {
        method: "POST",
        body: formData,
      });

      res.then((res) => {
        res.json().then((data) => {
          if (data.success) {
            const send_data = {
              title: contest.title,
              img: data.img,
              entryFees: contest.entryFees,
              prize: contest.prize,
              announcement: contest.announcement,
              type: contest.type,
              megaQuiz: contest.megaQuiz,
              contestDate: contest.date,
            };

            const res = fetch("/api/contest", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(send_data),
            });

            res.then((res) => {
              res.json().then((data) => {
                if (data.success) {
                  router.push("/dashboard/addQuiz");
                } else {
                  setError(data.message);
                console.log(data.message);
                }
              }).catch((err) => {
                setError(err.message);
                console.log(err.message);
              });
            });
          }
        }).catch((err) => {
          setError(err.message);
          console.log(err.message);
        });
      });
    }
  }

  return (
    <>
      <section className="mobile contest">
        <h1 className="wh-text">Add Contest</h1>
        <form onSubmit={handleSubmit} encType="multipart/form-data">
          <div className="flex-c contest-wrapper">
            <input
              onChange={handleChange}
              type="text"
              name="title"
              className="contest-info contest-title"
              placeholder="Contest Title..."
              /* required */
            />
            <span> {contest.title } </span> 
            <input
              onChange={handleChange}
              type="text"
              name="prize"
              className="contest-info"
              placeholder="Contest Prize..."
              /* required */
            />
            <span> {contest.prize } </span>
            <input
              onChange={handleChange}
              type="text"
              name="entryFees"
              className="contest-info"
              placeholder="Entry Fees..."
              /* required */
            />
            <span> {contest.entryFees } </span>
            <input
              onChange={handleChange}
              type="date"
              name="date"
              className="contest-info"
              /* required */
            />
            <span> { contest.date } </span>
            <input
              onChange={handleChange}
              type="time"
              name="announcement"
              className="contest-info"
              /* required */
            />
            <span> {contest.announcement } </span>
          </div>

          <div className="flex-r contest-cat">
            <div className="flex-c">
              <span>Mega Quiz</span>
              <div className="flex-r input-box">
                <input
                  onChange={handleChange}
                  type="radio"
                  name="megaQuiz"
                  value="0"
                />
                <span>ON</span>
              </div>
              <div className="flex-r input-box">
                <input
                  onChange={handleChange}
                  type="radio"
                  name="megaQuiz"
                  value="1"
                />
                <span>OFF</span>
              </div>
            </div>
            <span> { contest.megaQuiz } </span>
            <div className="flex-c">
              <span>Quiz cat.</span>
              <div className="flex-r input-box">
                <input
                  onChange={handleChange}
                  type="radio"
                  name="type"
                  value="0"
                />
                <span>IPL/Cricket</span>
              </div>
              <div className="flex-r input-box">
                <input
                  onChange={handleChange}
                  type="radio"
                  name="type"
                  value="1"
                />
                <span>Quiz</span>
              </div>
            </div>
            <span> { contest.type } </span>
          </div>

          <div className="flex-r upload-contest-pic">
            <FaRegFileImage />
            <input
              onChange={handleChange}
              type="file"
              name="img" /* required */
            />
          </div>

          <input type="submit" className="btn or-btn" value="ADD" />
        </form>
      </section>
    </>
  );
}
