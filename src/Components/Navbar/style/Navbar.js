import styled from "styled-components";

export const Nav = styled.nav`
  background-color: #002529;
  display: flex;
  align-items: center;
  padding: 2.2rem calc(10vw - 13.5px);
  height: 9.6rem;

  @media screen and (min-width: 768px) {
    padding: 2.4rem calc(10vw + 21px);
    column-gap: 6rem;
  }

  .logo {
    img {
      width: 12.8rem;
      height: 3.2rem;
      @media screen and (min-width: 768px) {
        width: 14rem;
      }
    }
  }

  .links {
    align-items: center;
    display: none;
    @media screen and (min-width: 768px) {
      display: flex;
      column-gap: 4rem;
    }
    a {
      color: #fff;
      text-decoration: none;
      font-size: 1.8rem;
      line-height: 28px;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.2s ease-in-out;

      &:hover {
        color: #f67e7e;
      }
    }
  }

  .btn {
    margin-left: auto;
    display: none;
    @media screen and (min-width: 768px) {
      display: block;
    }
  }

  .hamburger-menu {
    margin-left: auto;
    cursor: pointer;

    @media screen and (min-width: 768px) {
      display: none;
    }
  }
`;
