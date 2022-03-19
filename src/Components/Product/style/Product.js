import styled from "styled-components";

export const ProductContainer = styled.section`
  background-color: #012f34;
  padding: 8rem calc(10vw - 13.5px);

  display: flex;
  flex-direction: column;
  row-gap: 5.6rem;
  text-align: center;
  h2 {
    color: #fff;
    font-weight: 700;
    font-size: 3.2rem;
    line-height: 32px;
  }

  .products {
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 4.8rem;

    .card {
      display: flex;
      flex-direction: column;
      align-items: center;

      h3 {
        color: #f67e7e;
        font-weight: 700;
        font-size: 1.8rem;
        line-height: 28px;
        margin: 1.6rem 0 0.8rem 0;
      }

      p {
        color: #fff;
        opacity: 0.8;
        font-size: 1.5rem;
        line-height: 25px;
      }
    }
  }

  @media screen and (min-width: 768px) {
    padding: 8.6rem calc(10vw + 21px);
    justify-content: space-between;
    column-gap: 12.5rem;

    .products {
      .card {
        text-align: start;
        flex-direction: row;
        column-gap: 2.3rem;
      }
    }
  }

  @media screen and (min-width: 1024px) {
    flex-direction: row;
    text-align: start;
    padding-top: 7.2rem;
    padding-bottom: 7.2rem;

    h2 {
      font-size: 4.2rem;
      line-height: 40px;
      width: 50%;
      align-self: center;
    }
  }
`;
