/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

export const chartContainer = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  width: 80%;
  margin: 0 auto;
  padding: 20px;
  border-radius: 10px;
  

  h2 {
    color: #333;
    font-size: 20px;
    margin-bottom: 10px;
  }
`;

export const resultText = css`
  text-align: center;
  padding-bottom: 20px;
  color: #1e88e5;
  font-weight: bold;
  border-bottom: 2px solid #1e88e5;
`;