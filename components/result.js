import React from "react";

export default function result() {
  return (
    <>
      {/* result wrapper  */}
      <div className="flex-c result-wrapper">
        <h3>Bollywood Actresses</h3>
        <h1>{`Time's up, well played!`}</h1>
        <p>winners for this quiz will be announced at 05:00pm</p>
        <div className="flex-r score">
          <div className="flex-c score-card">
            <div className="score-head">Your score:</div>
            <div className="score-num">540</div>
          </div>
          <div className="flex-c score-card">
            <div className="score-head">Current rank:</div>
            <div className="score-num">1</div>
          </div>
        </div>
        <p className="rank-line">view rank breakup</p>
      </div>

      <div className="flex-c home-list">
        <div className="list-card">
          <div className="flex-r list-card-tp">
            <div className="list-card-img"></div>
            <div className="flex-c list-card-text">
              <h3> Winner of 22 July </h3>
              <h1>Play & Win: 10</h1>
              <p>Winner announcement : 11:24:00</p>
            </div>
          </div>
          <div className="flex-r list-card-bt">
            <span>LIVE</span>
            <span>Entry: 100</span>
            <button className="btn">Play Now</button>
          </div>
        </div>

        <div className="list-card">
          <div className="flex-r list-card-tp">
            <div className="list-card-img"></div>
            <div className="flex-c list-card-text">
              <h3> Winner of 22 July </h3>
              <h1>Play & Win: 10</h1>
              <p>Winner announcement : 11:24:00</p>
            </div>
          </div>
          <div className="flex-r list-card-bt">
            <span>LIVE</span>
            <span>Entry: 100</span>
            <button className="btn">Play Now</button>
          </div>
        </div>
      </div>

      {/* http://localhost:3000/result */}
    </>
  );
}
