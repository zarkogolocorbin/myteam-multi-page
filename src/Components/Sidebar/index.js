import { AsideContainer, AsideContent } from "./style/Sidebar";
import { Link } from "react-router-dom";

export default function Sidebar({ isVisible, setIsVisible }) {
  return (
    <AsideContainer isVisible={isVisible}>
      <AsideContent isVisible={isVisible}>
        <button
          className="close-button"
          onClick={() => setIsVisible(!isVisible)}
        >
          <img src="/assets/icon-close.svg" alt="close-button" />
        </button>
        <div className="links">
          <Link to="/" onClick={() => setIsVisible(!isVisible)}>
            Home
          </Link>
          <Link to="/about" onClick={() => setIsVisible(!isVisible)}>
            About
          </Link>
        </div>
        <button className="btn btn-white">
          <Link to="/contact" onClick={() => setIsVisible(!isVisible)}>
            {" "}
            contact us
          </Link>
        </button>
      </AsideContent>
    </AsideContainer>
  );
}
