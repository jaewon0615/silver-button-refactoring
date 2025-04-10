// style.ts
import { css } from "@emotion/react";

export const container = css`
  width: 100%;
  height: 100vh;
  margin: 0 auto;
  padding: 20px 150px;
  font-family: 'Arial', sans-serif;
`;

export const conttSt = css`
  background-color: #f9f9f9;
  padding: 40px 30px;
  border-radius: 20px;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.08);
`;

export const header = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;

  h1 {
    margin: 0;
    font-size: 32px;
    font-weight: bold;
  }

  button {
    font-size: 16px;
    font-weight: 600;
    padding: 10px 20px;
    border-radius: 12px;
    border: none;
    cursor: pointer;
    transition: box-shadow 0.2s ease;
  }

  button:hover {
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  }
`;

export const inquiryCard = css`
  background-color: #fff;
  padding: 20px;
  border-radius: 15px;
  margin-bottom: 20px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 16px rgba(0,0,0,0.12);
  }
`;

export const inquiryTitle = css`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 8px;
  text-decoration: underline;

  &:hover{
    cursor: pointer;
    color: blue;
  }
`;

export const inquiryNick = css`
  font-size: 15px;
  font-weight: bold;
  margin-bottom: 8px;
`;

export const inquiryStatus = css`
  font-size: 15px;
  color: #666;
`;

export const title = css`
  color: #7f3fbf; /* 보라색 */
  font-size: 36px;
  font-weight: bold;
  margin-bottom: 20px; /* 여백 추가 */
  text-align: center;
  line-height: 1.3;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const paginationContainer = css`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  padding: 16px;
  border-radius: 8px;
`;

export const paginationButton = css`
  background-color: rgba(147, 129, 255, 0.2);
  border: 1px solid rgba(147, 129, 255, 0.5);
  border-radius: 4px;
  padding: 8px 12px;
  font-size: 14px;
  color: rgba(147, 129, 255, 0.8);
  cursor: pointer;
  transition: background-color 0.3s, border-color 0.3s, color 0.3s;

  &:hover {
    background-color: rgba(147, 129, 255, 0.3);
    border-color: rgba(147, 129, 255, 0.8);
    color: #ffffff;
  }
`;

export const paginationButtonActive = css`
  background-color: rgba(147, 129, 255, 0.8);
  color: #ffffff;
  border-color: rgba(147, 129, 255, 1);

  &:hover {
    background-color: rgba(147, 129, 255, 1);
  }
`;

export const arrowButton = css`
  background-color: rgba(147, 129, 255, 0.2);
  border: 1px solid rgba(147, 129, 255, 0.5);
  color: rgba(147, 129, 255, 0.8);
  border-radius: 4px;
  padding: 8px 12px;
  font-size: 14px;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s, border-color 0.3s;

  &:hover:not(:disabled) {
    background-color: rgba(147, 129, 255, 0.3);
    border-color: rgba(147, 129, 255, 0.8);
    color: #ffffff;
  }

  &:disabled {
    cursor: not-allowed;
    background-color: rgba(147, 129, 255, 0.1);
    color: rgba(147, 129, 255, 0.5);
    border-color: rgba(147, 129, 255, 0.2);
  }
`;