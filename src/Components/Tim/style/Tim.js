import styled from "styled-components";

export const TimContainer = styled.section`
  padding: 8rem calc(10vw - 13.5px);
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 6.4rem;
  background-color: #012f34;

  h2 {
    font-weight: 700;
    font-size: 3.2rem;
    line-height: 32px;
    color: #c4fffe;
  }

  .cards {
    width: 100%;
    display: grid;
    grid-gap: 3rem;
  }

  .card {
    position: relative;
    overflow: hidden;

    max-width: 350px;
    width: 100%;
    margin: 0 auto;

    .first-part {
      max-width: 350px;
      margin: 0 auto;
      width: 100%;
      text-align: center;
      background-color: #2c6269;
      padding: 3.6rem 2.4rem;

      .card-img {
        display: block;
        width: 96px;
        height: 96px;
        border: 2px solid #c4fffe;
        border-radius: 50%;
        margin: 0 auto;
      }

      h3 {
        font-weight: 700;
        font-size: 1.8rem;
        font-weight: 28px;
        color: #c4fffe;
        margin-top: 1.8rem;
      }

      p {
        font-weight: 500;
        font-size: 1.5rem;
        line-height: 25px;
        color: #fff;
        font-style: italic;
      }
    }

    .second-part {
      position: absolute;
      top: 0;
      left: 50%;
      transform: translate(-50%, 100%);
      background: rgba(121, 200, 199, 0.2);
      backdrop-filter: blur(18px);
      max-width: 350px;
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      row-gap: 2.4rem;
      padding: 3.2rem 2.4rem;
      transition: all 0.2s ease;

      h3 {
        font-weight: 700;
        font-size: 2.4rem;
        font-weight: 28px;
        color: #fff;
      }

      p {
        font-weight: 500;
        font-size: 1.5rem;
        line-height: 25px;
        color: #fff;
      }

      .social-icon {
        display: flex;
        column-gap: 3rem;
      }
    }

    &:hover {
      .second-part {
        transform: translate(-50%, 0);

        img {
          cursor: pointer;
          filter: brightness(0) invert(1);
          transition: filter 0.2s ease-in;
          &:hover {
            filter: brightness(1) invert(0);
          }
        }
      }
    }
  }

  @media screen and (min-width: 768px) {
    padding: 12rem calc(10vw + 21px);

    h2 {
      font-size: 4.8rem;
      line-height: 48px;
    }
    .cards {
      grid-template-columns: 1fr 1fr;
    }
  }
  @media screen and (min-width: 1024px) {
    .cards {
      grid-template-columns: 1fr 1fr 1fr;
    }
  }
  @media screen and (min-width: 1440px) {
    padding-left: 16.5rem;
    padding-right: 16.5rem;
  }
`;
