import { useRouter, Router } from "next/router";
import { FaRegFileImage } from "react-icons/fa";
import { useState, useEffect } from "react";
import Link from "next/link";
import { JsonWebTokenError } from "jsonwebtoken";

export default function Contest() {
  const [contest, setContest] = useState([]);

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
      contest.megaQuiz === ""
    ) {
      alert("Please fill in all fields");
    } else {
      // upload image using fetch api
      const formData = new FormData();
      formData.append("img", contest.img);
      const res = fetch("/api/uploadFile", {
        method: "POST",
        body: formData,
      });

      console.log(res);
      const data = await res.json();
      console.log("Data Line No 63 : ");
      console.log(data);

/* 
      if (data.success) {
        const send_data = {
          title: contest.title,
          img: data.img,
          entryFees: contest.entryFees,
          prize: contest.prize,
          announcement: contest.announcement,
          type: contest.type,
          megaQuiz: contest.megaQuiz,
        };

        const res = await fetch("/api/contest", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(send_data),
        });

        const data = await res.json();
        if (data.success) {
          alert("Contest created successfully");
          // router.push("/");
        } else {
          alert(data.message);
        }
      } else {
        alert(data.message);
      }
 */
    }

    /* let res = fetch("/api/uploadFile", {
        method: "POST",
        body: JSON.stringify({ test: "Hi", img : contest.img})
      });

      res.then((res) => {
        if (res.status == 200) {
          res.json().then((data) => {
            if (data.success == true) {
              console.log(data.message);
            } else {
              console.log(data.message);
            }
          });
        } else {
          console.log("Something went wrong");
        }
      }); */

    /* 
      let res = fetch("/api/contest", {
        method: "POST",
        headers: {
          // "Content-Type": "multipart/form-data",
        },
        body: JSON.stringify(contest),
      });

      res.then((res) => {
        if (res.status == 200) {
          res.json().then((data) => {
            if (data.success == true) {
              console.log(data);
               router.push("/dashboard/addQuiz");
            }
          });
        }
      });
 */
  };

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
            <input
              onChange={handleChange}
              type="text"
              name="prize"
              className="contest-info"
              placeholder="Contest Prize..."
              /* required */
            />
            <input
              onChange={handleChange}
              type="text"
              name="entryFees"
              className="contest-info"
              placeholder="Entry Fees..."
              /* required */
            />
            <input
              onChange={handleChange}
              type="date"
              name="date"
              className="contest-info"
              /* required */
            />
            <input
              onChange={handleChange}
              type="time"
              name="announcement"
              className="contest-info"
              /* required */
            />
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
          </div>

          <div className="flex-r upload-contest-pic">
            {/* icon here  */}
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
