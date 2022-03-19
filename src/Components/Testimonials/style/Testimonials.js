import styled from "styled-components";

export const TestimonialsContainer = styled.section`
  padding: 8rem calc(10vw - 13.5px);
  display: flex;
  flex-direction: column;
  row-gap: 4.8rem;
  background-color: #004047;

  .testimonials-title {
    color: #ffffff;
    font-weight: 700;
    font-size: 3.2rem;
    line-height: 32px;
    text-align: center;

    span {
      color: #c4fffe;
    }
  }

  .testimonials {
    display: flex;
    flex-direction: column;
    column-gap: 3rem;
    row-gap: 4.8rem;
  }

  .testimonial {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    background: url("/assets/icon-quotes.svg");
    background-position: center top;
    background-repeat: no-repeat;
    .text {
      font-weight: 600;
      font-size: 1.5rem;
      line-height: 25px;
      padding-top: 3.6rem;
      color: #fff;
    }
  }

  img {
    border: 2px solid #c4fffe;
    width: 62px;
    height: 62px;
    border-radius: 50%;
    display: block;
  }

  h3 {
    font-size: 1.8rem;
    line-height: 28px;
    color: #79c8c7;
    margin-top: 1.6rem;
  }

  .position {
    font-size: 1.3rem;
    line-height: 18px;
    color: #fff;
    font-style: italic;
    margin-bottom: 1.6rem;
  }

  @media screen and (min-width: 768px) {
    padding: 8rem calc(10vw + 21px);
  }

  @media screen and (min-width: 1024px) {
    .testimonials-title {
      font-size: 4.8rem;
      line-height: 48px;
    }
    .testimonials {
      flex-direction: row;
    }
  }

  @media screen and (min-width: 1440px) {
    padding-left: 16.5rem;
    padding-right: 16.5rem;
  } ;
`;
