import React from "react";
import landingImage from "../assets/Landing.jpg";
// import Button from "./Button";

interface Props {
  children: React.ReactElement;
}

function LandingImage({ children }: Props) {
  return (
    <div
      className="landing-image"
      style={{ position: "relative", display: "inline-block" }}
    >
      <img src={landingImage} className="img-fluid" alt="landing" />
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        {children}
      </div>
    </div>
  );
}

export default LandingImage;
