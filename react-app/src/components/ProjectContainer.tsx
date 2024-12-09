import React from "react";
import "./styling/ProjectContainer.css";

// Define props interface
interface ProjectContainerProps {
  title: string;
  description: string | JSX.Element; // Allow strings or JSX
  languages: string[];
  imageFilePath: string;
}

const ProjectContainer: React.FC<ProjectContainerProps> = ({
  title,
  description,
  languages,
  imageFilePath,
}) => {
  return (
    <div className="container">
      <div className="description">
        <h1>{title}</h1>
        <div className="skills-container">
          {languages.map((language, index) => (
            <div className="skills" key={index}>
              {language}
            </div>
          ))}
        </div>
        <p>{description}</p>
      </div>
      <div className="image">
        <img src={imageFilePath} alt={title} />
      </div>
    </div>
  );
};

export default ProjectContainer;
