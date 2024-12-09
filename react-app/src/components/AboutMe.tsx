// including AboutMe.css
import React from "react";
import "./styling/AboutMe.css";
import SeeWorkButton from "./SeeWorkButton";

function AboutMe() {
  return (
    <div className="outerGroup">
      <div className="Heading">
        <h2>
          Hi, I’m Mischa. <br />
          <div className="Highlight">Welcome to my website!</div>
        </h2>
      </div>
      <div className="TextSpace">
        <p>
          I am a passionate and dedicated student at{" "}
          <mark>Adelaide University </mark> <br />
          studying a Bachelor of Computer Science (Advanced). <br />
          <br />
          In my spare time, I like to play volleyball, exercise at the gym, and{" "}
          <br />
          spontaneously go out on adventures. <br />
          <br />
          Currently in my second year, I am seeking{" "}
          <mark>potential internships </mark> for <br />
          the summer of 2025/2026. <br />
        </p>
      </div>
      <SeeWorkButton />
    </div>
  );
}

export default AboutMe;
