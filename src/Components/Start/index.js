import { StartContainer } from "./style/Start";
import { Link } from "react-router-dom";

export default function Start() {
  return (
    <div className="container">
      <StartContainer>
        <div className="content">
          <h2>Ready to get started?</h2>
          <button className="btn btn-green">
            <Link to="/contact">Contact Us</Link>
          </button>
        </div>
      </StartContainer>
    </div>
  );
}
