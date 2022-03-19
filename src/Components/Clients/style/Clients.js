import styled from "styled-components";
export const ClientContainer = styled.section`
  padding: 0 calc(10vw - 13.5px) 8rem;
  background-color: #012f34;
  display: flex;
  flex-direction: column;
  row-gap: 6rem;

  h2 {
    font-weight: 700;
    font-size: 3.2rem;
    line-height: 32px;
    text-align: center;
    color: #fff;
  }

  .images {
    display: grid;
    row-gap: 6rem;
    img {
      place-self: center;
    }
    img:nth-child(1) {
      width: 165px;
      height: 28px;
    }
    img:nth-child(2) {
      width: 184px;
      height: 23px;
    }
    img:nth-child(3) {
      width: 180px;
      height: 28px;
    }
    img:nth-child(4) {
      width: 165px;
      height: 28px;
    }
    img:nth-child(5) {
      width: 98px;
      height: 45px;
    }
  }

  @media screen and (min-width: 768px) {
    padding: 0 calc(10vw + 21px) 14rem;
    .images {
      display: grid;
      grid-template-columns: repeat(5, 1fr);
      img:nth-child(1) {
        width: 103px;
        height: 17px;
      }
      img:nth-child(2) {
        width: 114px;
        height: 14px;
      }
      img:nth-child(3) {
        width: 112px;
        height: 17px;
      }
      img:nth-child(4) {
        width: 103px;
        height: 17px;
      }
      img:nth-child(5) {
        width: 61px;
        height: 28px;
      }
    }
  }

  @media screen and (min-width: 1024px) {
    row-gap: 6.4rem;

    h2 {
      font-size: 4.8rem;
      line-height: 48px;
    }

    .images {
      img:nth-child(1) {
        width: 147px;
        height: 24px;
      }
      img:nth-child(2) {
        width: 162px;
        height: 20px;
      }
      img:nth-child(3) {
        width: 160px;
        height: 24px;
      }
      img:nth-child(4) {
        width: 174px;
        height: 24px;
      }
      img:nth-child(5) {
        width: 87px;
        height: 40px;
      }
    }
  }

  @media screen and (min-width: 1440px) {
    padding-left: 16.5rem;
    padding-right: 16.5rem;
  } ;
`;
