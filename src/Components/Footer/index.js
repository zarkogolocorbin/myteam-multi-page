import { Link } from "react-router-dom";
import { Ftr } from "./style/Footer";

export default function Footer() {
  return (
    <div className="container">
      <Ftr>
        <div className="logo-link">
          <img src="/assets/logo.svg" alt="logo" />
          <div className="links">
            <Link to="/">home</Link>
            <Link to="/about">about</Link>
          </div>
        </div>
        <div className="address">
          <p>987 Hillcrest Lane</p>
          <p>Irvine, CA</p>
          <p>California 92714</p>
          <p>Call Us : 949-833-7432</p>
        </div>
        <div className="social-media">
          <div className="social-icons">
            <Link to="/">
              <img src="/assets/icon-facebook.svg" alt="facebook-icon" />
            </Link>
            <Link to="/">
              <img src="/assets/icon-pinterest.svg" alt="pinterst-icon" />
            </Link>
            <Link to="/">
              <img src="/assets/icon-twitter.svg" alt="twitter" />
            </Link>
          </div>
          <p>
            Copyright {new Date().getFullYear().toString()}. All Rights Reserved
          </p>
        </div>
      </Ftr>
    </div>
  );
}
