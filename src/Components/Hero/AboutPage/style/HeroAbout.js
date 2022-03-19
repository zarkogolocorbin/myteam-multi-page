import styled from "styled-components";

export const HeroContainer = styled.section`
  padding: 8rem calc(10vw - 13.5px);
  display: flex;
  flex-direction: column;
  row-gap: 1.6rem;
  text-align: center;
  color: #012f34;

  h1 {
    font-weight: 700;
    font-size: 4rem;
    line-height: 40px;
  }

  p {
    font-weight: 600;
    font-size: 1.5rem;
    line-height: 28px;
  }

  @media screen and (min-width: 768px) {
    row-gap: 2.4rem;
    h1 {
      font-size: 6.4rem;
      line-height: 56px;
    }
    p {
      font-size: 1.8rem;
      line-height: 28px;
    }
  }
  @media screen and (min-width: 1024px) {
    text-align: left;
    flex-direction: row;
    column-gap: 3rem;

    p {
      margin-left: auto;
      flex-basis: 730px;
    }
  }

  @media screen and (min-width: 1024px) {
    padding-left: 16.5rem;
    padding-right: 16.5rem;
  }
`;
