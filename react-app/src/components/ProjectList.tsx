import React from "react";
import ProjectContainer from "./ProjectContainer";
import craterImage from "../assets/Event Crater Detection 2.png";
import HughMongus from "../assets/Hugh Mongus Hearts.png";
import MoonwaterGully from "../assets/Moonwater Gully.png";

function ProjectList() {
  const projects = [
    {
      title: "YOLO Crater Detection",
      description: (
        <>
          Developed an AI-based model to predict weather patterns using neural
          networks. This project explored different machine learning algorithms
          and their effectiveness in forecasting. <br />
          <br />
          Tools used include TensorFlow, NumPy, and Pandas.
        </>
      ),
      languages: ["Python", "OpenCV", "YOLO"],
      imageFilePath: craterImage,
    },
    {
      title: "Volunteering Website",
      description: (
        <>
          Designed and created a volunteering website as a group project with
          friends. This was the first major web dev project I had taken part in,
          where my role was primarily surrounding database design, and focusing
          specifically on individual branch posts & members. <br />
          <br />
          This project was developed using Vue, AJAX, and Node.js.
        </>
      ),
      languages: ["HTML", "CSS", "JavaScript"],
      imageFilePath: HughMongus,
    },
    {
      title: "Farming Game",
      description: (
        <>
          Created an interactive dashboard for tracking sales and inventory
          metrics for an online retail store. The project involved creating
          dynamic charts and integrating real-time updates with REST APIs.{" "}
          <br />
          <br />
          Developed with React, Chart.js, and Express.js.
        </>
      ),
      languages: ["C++", "SFML"],
      imageFilePath: MoonwaterGully,
    },
    {
      title: "Blockchain Voting System",
      description: (
        <>
          Built a decentralized voting system using blockchain technology to
          ensure transparency and immutability. The project included developing
          a smart contract and integrating it into a web app. <br />
          <br />
          Tools used include Solidity, Web3.js, and Ethereum.
        </>
      ),
      languages: ["Solidity", "JavaScript", "Web3.js"],
      imageFilePath: craterImage,
    },
  ];

  return (
    <>
      {projects.map((project, index) => (
        <ProjectContainer
          key={index}
          title={project.title}
          description={project.description}
          languages={project.languages}
          imageFilePath={project.imageFilePath}
        />
      ))}
    </>
  );
}

export default ProjectList;
