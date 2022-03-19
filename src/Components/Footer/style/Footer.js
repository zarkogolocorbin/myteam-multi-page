import styled from "styled-components";

export const Ftr = styled.footer`
  background-color: #002529;
  padding: 2.2rem calc(10vw - 13.5px);
  display: flex;
  flex-direction: column;
  column-gap: 12.5rem;
  row-gap: 4rem;

  @media screen and (min-width: 1024px) {
    padding: 4.8rem calc(10vw + 21px);
    flex-direction: row;
  }

  .address {
    color: #fff;
    opacity: 0.6;
    margin: 0 auto;
    text-align: center;

    p {
      font-weight: 600;
      font-size: 1.5rem;
      line-height: 25px;
    }
  }

  @media screen and (min-width: 1024px) {
    .address {
      margin: 0;
      text-align: start;
    }
  }

  .logo-link {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin: 0 auto;
    text-align: center;
    row-gap: 2.4rem;

    .links {
      display: flex;
      column-gap: 3.2rem;
      justify-content: center;
    }

    img {
      width: 16rem;
      height: 4rem;
    }

    a {
      color: #fff;
      text-decoration: none;
      font-family: Livic, sans-serif;
      font-weight: 600;
      font-size: 1.8rem;
      line-height: 28px;
      transition: color 0.2s ease-in-out;
    }

    a:hover {
      color: #f67e7e;
    }
  }

  @media screen and (min-width: 1024px) {
    .logo-link {
      margin: 0;
      .links {
        justify-content: flex-start;
      }
    }
  }

  .social-media {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    row-gap: 2.4rem;

    .social-icons {
      display: flex;
      align-items: center;
      justify-content: center;
      column-gap: 1.6rem;
    }

    img {
      filter: brightness(0) invert(1);
      transition: all 0.2s ease-in-out;
    }

    img:hover {
      filter: brightness(1) invert(0);
      transform: scale(1.2);
    }

    p {
      color: #fff;
      font-weight: 600;
      font-size: 1.5rem;
      line-height: 25px;
      text-align: center;
    }
  }
  @media screen and (min-width: 1024px) {
    .social-media {
      margin-left: auto;
      .social-icons {
        justify-content: flex-end;
      }
      p {
        text-align: right;
      }
    }
  }
`;
