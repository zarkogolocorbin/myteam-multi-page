import { ClientContainer } from "./style/Clients";

export default function Clients() {
  return (
    <div className="container">
      <ClientContainer>
        <h2>Some of our clients</h2>
        <div className="images">
          <img src="/assets/logo-the-verge.png" alt="logo-the-verge.png" />
          <img
            src="/assets/logo-jakarta-post.png"
            alt="logo-jakarta-post.png"
          />
          <img
            src="/assets/logo-the-guardian.png"
            alt="logo-the-guardian.png"
          />
          <img src="/assets/logo-tech-radar.png" alt="logo-tech-radar.png" />

          <img src="/assets/logo-gadgets-now.png" alt="logo-gadgets-now.png" />
        </div>
      </ClientContainer>
    </div>
  );
}
