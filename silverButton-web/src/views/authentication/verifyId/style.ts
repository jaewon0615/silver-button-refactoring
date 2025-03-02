/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const Container = css`
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
  padding: 20px;
  text-align: center;
`;

export const Header = css`
  margin-bottom: 30px;
`;

export const Main = css`
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: #f9f9f9;
`;

export const ResultContainer = css`
  margin-top: 20px;

  h2 {
    font-size: 1.5rem;
    color: #333;
  }

  p {
    font-size: 1.25rem;
    color: #000;
    font-weight: bold;
  }
`;

export const VerifyButton = styled.button`
  padding: 10px 20px;
  background: linear-gradient(to right bottom, #9381ff, #6ee7b7);
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 20px;
  transition: opacity 0.3s;

  &:hover {
    opacity: 0.8;
  }
`;

export const ErrorMessage = styled.p`
  color: red;
  font-size: 1.1rem;
  margin-top: 20px;
`;
