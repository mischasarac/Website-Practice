import "./styling/SeeWorkButton.css";
import { Link } from "react-router-dom";

function SeeWorkButton() {
  return (
    <div>
      <Link to="/projects">
        <button type="button" className="wrk-btn">
          {" "}
          see my work
        </button>
      </Link>
    </div>
  );
}

export default SeeWorkButton;
