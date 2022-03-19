import styled from "styled-components";

export const StartContainer = styled.section`
  padding: 8rem calc(10vw - 13.5px);
  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 2.4rem;
  }

  h2 {
    font-weight: 700;
    font-size: 3.2rem;
    line-height: 32px;
    color: #012f34;
    text-align: center;
  }

  @media screen and (min-width: 768px) {
    padding: 8.5rem calc(10vw + 21px);
    .content {
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    }
  }

  @media screen and (min-width: 1024px) {
    h2 {
      font-size: 4.8rem;
      line-height: 48px;
    }
  }
`;
