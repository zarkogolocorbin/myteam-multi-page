import { Link } from "react-router-dom";
import { HeroContainer } from "./style/HeroHome";

export default function HeroHome() {
  return (
    <div className="container">
      <HeroContainer>
        <h1>
          Find the best <span>talent</span>
        </h1>
        <div className="content">
          <p>
            Finding the right people and building high performing teams can be
            hard. Most companies aren’t tapping into the abundance of global
            talent. We’re about to change that.
          </p>
          <button className="btn btn-coral">
            <Link to="/about">About Us</Link>
          </button>
        </div>
      </HeroContainer>
    </div>
  );
}
