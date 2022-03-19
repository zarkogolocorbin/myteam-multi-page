import styled from "styled-components";

export const ContactContainer = styled.section`
  padding: 8rem calc(10vw - 13.5px);
  display: flex;
  flex-direction: column;
  row-gap: 6.4rem;

  .left-part {
    display: flex;
    flex-direction: column;
    align-items: center;

    row-gap: 2rem;

    h1 {
      font-weight: 700;
      font-size: 4rem;
      line-height: 40px;
      color: #002529;
    }

    p {
      font-weight: 600;
      font-size: 3.2rem;
      line-height: 48px;
      color: #f67e7e;
    }
  }

  @media screen and (min-width: 768px) {
    padding: 14rem calc(10vw + 21px);

    .left-part {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
    }
  }

  @media screen and (min-width: 1024px) {
    flex-direction: row;
    column-gap: 3.2rem;
    justify-content: space-between;
    .left-part {
      flex-basis: 50%;
      align-items: flex-start;
      h1 {
        font-weight: 700;
        font-size: 6.4rem;
        line-height: 100px;
        color: #002529;
      }
    }

    .right-part {
      flex-basis: 50%;
    }
  }

  @media screen and (min-width: 1440px) {
    padding-left: 16.5rem;
    padding-right: 16.5rem;
  }
`;

export const ContactCard = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 2rem;

  .card {
    display: flex;
    align-items: center;
    column-gap: 2.3rem;

    p {
      font-weight: 700;
      font-size: 1.8rem;
      line-height: 28px;
      color: #002529;
    }
  }
`;
