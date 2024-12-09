import "./styling/ContactContainer.css";
import React from "react";
import contactImage from "../assets/Germany 2023 crop.png";

function ContactContainer() {
    return (
        <div className="contact-container">
            <div className="content">
                <div className="heading">
                    <h1>Thanks for Checking Out My Website!</h1>
                </div>
                <div className="image-container">
                    <img src={contactImage} alt="Contact" />
                </div>
                <p>
                    I appreciate you taking the time to explore my website! If you'd like to reach out, feel free to connect with me via the links below. Whether it’s about a project, collaboration, or just to say hello, I'd love to hear from you!
                </p>
                <div className="links">
                    <a href="https://github.com/mischasarac" target="_blank" rel="noopener noreferrer">
                        GitHub
                    </a>
                    <a href="mailto:mischa@gmail.com">Email</a>
                    <a href="https://www.linkedin.com/in/mischa-sarac-394918258" target="_blank" rel="noopener noreferrer">
                        LinkedIn
                    </a>
                </div>
            </div>
        </div>
    );
}

export default ContactContainer;
