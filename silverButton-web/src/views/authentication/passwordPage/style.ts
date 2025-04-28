import { css } from "@emotion/react";

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
  text-align: center;
  width: 100%;
  max-width: 700px;
  height: 300px;
  border: 3px solid rgba(147, 129, 255, 0.5);
`;

export const passwordCardTitle = css`
  font-size: 30px;
  color: #333;
  font-weight: bold;
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
  background-color: #03a9f4;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 20px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  text-align: center;

  &:hover {
    background-color: #0288d1;
  }

  &:active {
    background-color: #0277bd;
  }
`;

export const togglePasswordButton = css`
  width: 100px;
  height: 40px;
  margin-left: 20px;
  font-size: 16px;
  font-weight: bold;
  border-radius: 8px;
  background-color: #28a745;
  color: white;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 15px;

  &:hover {
    background-color: #218838;
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.98);
  }
`;

export const inputWrapper = css`
  display: flex;
  align-items: center;
`;
