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
      style={{
        position: "relative",
        width: "100%", // Adjust to full page width
        height: "100vh", // Set to full viewport height
        overflow: "hidden", // Ensure the image doesn't overflow the container
      }}
    >
      <img
        src={landingImage}
        className="img-fluid"
        alt="landing"
        style={{
          width: "120%", // Scale the image width
          height: "120%", // Scale the image height
          objectFit: "cover", // Ensure proportional cropping
          position: "absolute", // Enable precise positioning
          top: "-5%", // Adjust vertical position
          left: "10%",
          transform: "scale(1.2)", // Additional scaling for finer control
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "90%",
          height: "90%",
        }}
      >
        {children}
      </div>
    </div>
  );
}

export default LandingImage;
