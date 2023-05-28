import React from "react";

//import clock
import FlipClock from "@leenguyen/react-flip-clock-countdown";

//clock css
import "@leenguyen/react-flip-clock-countdown/dist/index.css";

//import video
import VideoBg from "../src/assets/video.mp4";

//import css
import "./styles.css";

const App = () => {
  return (
    <section className="page">
      {/* overlay */}
      <div className="overlay"></div>
      {/* video */}
      <video src={VideoBg} autoPlay loop muted></video>
      {/* content */}
      <div className="page__content">
        <h1> Launching Soon</h1>
        <h3>
          Leave your email and we'll let you know once the site goes lives.
        </h3>
        {/* Flip Clock */}
        <FlipClock to={new Date().getTime() + 24 * 3600 * 1000 + 5000} className='flip-clock' />
      {/* */}
      <button className="btn"> Notify Me </button>
      </div>
    </section>
  );
};

export default App;
