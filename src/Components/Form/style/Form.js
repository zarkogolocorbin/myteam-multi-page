import styled from "styled-components";

export const FormContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  .form-control:not(:last-child) {
    margin-bottom: 1.8rem;
  }

  input,
  textarea {
    font-weight: 600;
    font-size: 1.5rem;
    line-height: 25px;
    color: #2c6269;
    font-family: "Livvic", sans-serif;
    width: 100%;
    background-color: transparent;
    border: none;
    outline: none;
    padding: 1.4rem 1.4rem;
    border-bottom: 2px solid #2c6269;
  }

  input::placeholder,
  textarea::placeholder {
    font-weight: 600;
    font-size: 1.5rem;
    line-height: 25px;
    letter-spacing: -0.12px;
  }

  .error-input {
    border-color: #f67e7e;

    &::placeholder {
      color: #f67e7e;
    }
  }

  .error {
    font-weight: 700;
    font-size: 1rem;
    line-height: 12.55px;
    margin-top: 1rem;
    color: #f67e7e;
    text-align: end;
  }
`;
