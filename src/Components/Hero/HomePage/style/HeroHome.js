import styled from "styled-components";

export const HeroContainer = styled.section`
  text-align: center;
  padding: 16.5rem calc(10vw - 13.5px);
  display: flex;
  flex-direction: column;
  row-gap: 1.8rem;
  color: #002529;
  h1 {
    font-size: 4rem;
    line-height: 40px;
    span {
      color: #f67e7e;
    }
  }

  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 4rem;

    p {
      font-weight: 600;
      font-size: 1.8rem;
      line-height: 28px;
    }
  }

  @media screen and (min-width: 768px) {
    padding: 4.8rem calc(10vw + 21px);

    h1 {
      font-size: 6.4rem;
      line-height: 56px;
    }
  }

  @media screen and (min-width: 1024px) {
    flex-direction: row;
    text-align: left;
    column-gap: 3.5rem;
    padding-top: 14rem;
    padding-bottom: 14rem;
    h1 {
      font-size: 10rem;
      line-height: 100px;
      flex-basis: 50%;
    }

    .content {
      align-items: flex-start;
      align-self: center;
      flex-basis: 50%;

      p {
        font-size: 2.4rem;
        line-height: 24px;
      }
    }
  }

  @media screen and (min-width: 1440px) {
    padding-left: 165px;
    padding-right: 165px;
  }
`;
