import { ContactContainer, ContactCard } from "./style/Contact";
import Forms from "../Form";

export default function Contact() {
  return (
    <div className="container">
      <ContactContainer>
        <div className="left-part">
          <h1>Contact</h1>
          <p>Ask us about</p>
          <ContactCard>
            <div className="card">
              <img src="/assets/icon-person.svg" alt="icon-person.svg" />
              <p>The quality of our talent network</p>
            </div>
            <div className="card">
              <img src="/assets/icon-cog.svg" alt="icon-cog.svg" />
              <p>Usage & implementation of our software</p>
            </div>
            <div className="card">
              <img src="/assets/icon-chart.svg" alt="icon-chart.svg" />
              <p>How we help drive innovation</p>
            </div>
          </ContactCard>
        </div>
        <div className="right-part">
          <Forms />
        </div>
      </ContactContainer>
    </div>
  );
}
