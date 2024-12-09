import React from "react";
import ProjectContainer from "./ProjectContainer";
import craterImage from "../assets/Event Crater Detection 2.png";
import HughMongus from "../assets/Hugh Mongus Hearts.png";
import MoonwaterGully from "../assets/Moonwater Gully.png";
import WebsiteImage from "../assets/This website.png";

function ProjectList() {
  const projects = [
    {
      title: "YOLO Crater Detection",
      description: (
        <>
          Researched and applied an AI-based model to automatically detect
          craters from event camera footage. This project explored different
          machine learning algorithms and their effectiveness on top of a vast
          variety of dta processing methods <br />
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
          Created an interactive farming game based on Stardew Valley. Worked on
          designing and modelling character movements in a group setting.
          Developed skills in organisation and UML design setting group project
          deadlines to complete all work well before the due date. <br />
          <br />
          Developed with SFML.
        </>
      ),
      languages: ["C++", "SFML"],
      imageFilePath: MoonwaterGully,
    },
    {
      title: "This Website",
      description: (
        <>
          Self-taught skills with first react website utilising skills
          previously learnt on volunteering website. Performed iterative
          development steps to ensure website quality and scalability remains.
          Set structured development steps to ensure productive time usage.
          <br />
          <br />
          Tools used include Figma, Vite, and CSS styling tools.
        </>
      ),
      languages: ["React", "TypeScript", "CSS"],
      imageFilePath: WebsiteImage,
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
