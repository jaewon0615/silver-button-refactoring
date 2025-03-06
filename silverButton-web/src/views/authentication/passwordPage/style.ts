import { css } from '@emotion/react';

export const passwordContainer = css`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  height: 100vh;
  padding-top: 50px;
`;

export const passwordCard = css`
  background: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
  width: 100%;
  max-width: 400px;
`;

export const passwordCardTitle = css`
  font-size: 24px;
  color: #333;
  margin-bottom: 10px;
`;

export const passwordCardDescription = css`
  font-size: 14px;
  color: #666;
  margin-bottom: 20px;
`;

export const passwordItem = css`
  margin-bottom: 20px;
  text-align: left;
`;

export const inputField = css`
  width: 100%;
  padding: 10px;
  font-size: 14px;
  border: 1px solid #ddd;
  border-radius: 4px;
  box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.1);
`;

export const errorMessage = css`
  color: red;
  font-size: 12px;
  margin-top: 5px;
`;

export const passwordSubmitButton = css`
  padding: 12px 20px;
  background-color: #03a9f4; /* Blue */
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 20px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  text-align: center;

  &:hover {
    background-color: #0288d1; /* Darker blue */
  }

  &:active {
    background-color: #0277bd; /* Even darker blue */
  }
`;
