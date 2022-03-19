import { timsDb } from "../../db";
import { TimContainer } from "./style/Tim";

export default function Tim() {
  return (
    <div className="container">
      <TimContainer>
        <h2>Meet the directors</h2>
        <div className="cards">
          {timsDb.map((item, index) => {
            return (
              <div key={index}>
                <div className="card">
                  <div className="first-part">
                    <img
                      className="card-img"
                      src={`/assets/${item.img}`}
                      alt={item.img}
                    />
                    <h3>{item.name}</h3>
                    <p className="position">{item.position}</p>
                  </div>
                  <div className="second-part">
                    <h3>{item.name}</h3>
                    <p>{item.text}</p>
                    <div className="social-icon">
                      <img
                        src="/assets/icon-linkedin.svg"
                        alt="icon-linkedin.svg"
                      />
                      <img
                        src="/assets/icon-twitter.svg"
                        alt="icon-twitter.svg"
                      />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </TimContainer>
    </div>
  );
}
