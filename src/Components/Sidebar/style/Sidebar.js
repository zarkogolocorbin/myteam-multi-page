import styled, { css } from "styled-components";

export const AsideContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 37, 41, 0.8);
  transition: all 0.4s ease-in;
  overflow: hidden;
  visibility: hidden;
  z-index: 4;
  ${(props) =>
    props.isVisible &&
    css`
      visibility: visible;
    `};
`;

export const AsideContent = styled.div`
  position: absolute;
  top: 0;
  left: 30%;
  right: 0;
  bottom: 0;
  background-color: #002529;
  display: flex;
  flex-direction: column;
  row-gap: 2.8rem;
  padding: 2.8rem calc(10vw - 13.5px);
  transition: all 0.4s ease-in;
  transform: translateX(100%);
  overflow: hidden;

  ${(props) =>
    props.isVisible &&
    css`
      transform: translateX(0%);
    `};

  .links {
    display: flex;
    flex-direction: column;
    row-gap: 2.4rem;

    a {
      font-weight: 600;
      font-size: 1.8rem;
      line-height: 28px;
      color: #fff;
      text-decoration: none;
    }
  }

  .close-button {
    margin-left: auto;
    background-color: transparent;
    border: none;
    cursor: pointer;
  }
`;
