import { FaCoins } from "react-icons/fa";

import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

import Image from "next/image";

export default function Home() {
  // Fetch Data from API
  const [contest, setContest] = useState([]);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [type, setType] = useState(0); // 0: Quiz, 1: Cricket/IPL
  // To Fetch DAta From API
  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(`/api/contest?type=0`, {
        method: "GET",
        // body: JSON.stringify({ id : ids }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();

      setContest(data.message);
    };
    fetchData();
  }, []);

  // Handle Click
  async function fetchTabData(type) {
    const res = await fetch(`/api/contest?type=${type}`, {
      method: "GET",
      // body: JSON.stringify({ id : ids }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();

    setContest(data.message);
  }

  function tConvert(time) {
    // Check correct time format and split into components
    time = time
      .toString()
      .match(/^([01]\d|2[0-3])(:)([0-5]\d)(:[0-5]\d)?$/) || [time];

    if (time.length > 1) {
      // If time format correct
      time = time.slice(1); // Remove full string match value
      time[5] = +time[0] < 12 ? " AM" : " PM"; // Set AM/PM
      time[0] = +time[0] % 12 || 12; // Adjust hours
    }
    return time.join(""); // return adjusted time or original string
  }

  return (
    <>
      {/*  >>>>>>>>>>>>>>>>>>>>>>> home wrapper <<<<<<<<<<<<<<<<<<<<<<<   */}

      <div className="flex-r home-tab">
        <span
          className={type === 0 ? "quiz-tab" : "ipl-tab"}
          onClick={() => {
            setType(0);
            fetchTabData(0);
          }}
        >
          Quiz
        </span>
        <span
          className={type === 1 ? "quiz-tab" : "ipl-tab"}
          onClick={() => {
            setType(1);
            fetchTabData(1);
          }}
        >
          IPL/Cricket
        </span>
      </div>

      {/*  >>>>>>>>>>>>>>>>>>>>>>> home list wrapper <<<<<<<<<<<<<<<<<<<<<<<   */}
      <div className="flex-c home-list">
        {contest &&
          contest.map((item, index) => (
            <div className="list-card" key={index}>
              <div className="flex-r list-card-tp">
                <div className="list-card-img"></div>
                <div className="flex-c list-card-text">
                  <h3> {item.contestTitle} </h3>
                  <h1>Play & Win: {item.prize}</h1>
                  <p>
                    {"Winner announcement : " + tConvert(item.announcement)}
                  </p>
                </div>
              </div>
              <div className="flex-r list-card-bt">
                <div className="live-wp">
                  <span className="live-blink">live</span>
                </div>
                <div className="entry-fee">
                  Entry :<span> {item.entryFees}</span>
                  <Image
                    src={"/media/coin-icon.png"}
                    width={15}
                    height={15}
                    alt={"Coins"}
                  />
                </div>
                <button
                  onClick={() =>
                    router.push({
                      pathname: `/entry/[id]`,
                      query: { id: item.contestID },
                    })
                  }
                  className="btn shine"
                  style={{ backgroundColor: "#e9711f" }}
                >
                  Play
                </button>
              </div>
            </div>
          ))}
      </div>
    </>
  );
}
