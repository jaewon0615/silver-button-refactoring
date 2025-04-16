import { css } from '@emotion/react';

export const container = css`
  width: 100%;
  height: 100vh;
  padding: 20px 150px;
  margin: 0 auto;
  font-family: 'Arial', sans-serif;
`;

export const inquiryList = css`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const inquiryCard = css`
  padding: 20px;
  border: 1px solid #e2c9b0;
  border-radius: 12px;
  background-color: #fff8f3;
  box-shadow: 0 4px 12px rgba(223, 190, 160, 0.2);
  transition: transform 0.2s, box-shadow 0.2s;
  display: flex;
  flex-direction: row;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 6px 16px rgba(223, 190, 160, 0.3);
  }
`;

export const inquiryTitle = css`
  font-size: 20px;
  font-weight: bold;
  color: #5e4a3a;
  margin-bottom: 10px;
  text-decoration: underline;
  cursor: pointer;
  &:hover{
    color: blue;
  }
`;

export const inquiryDate = css`
  font-size: 14px;
  color: #a38264;
`;

export const noInquiry = css`
  text-align: center;
  color: #a38264;
  font-size: 18px;
  padding: 40px;
  background-color: #fff0e5;
  border-radius: 8px;
`;

export const deleteButton = css`
  padding: 15px 20px;
  background-color: #e53935; /* Red */
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 20px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  text-align: center;
  width: auto;
  display: inline-block; /* Align horizontally */
  white-space: nowrap; /* Prevent text from wrapping */
  display: flex;
  justify-content: flex-start;
  margin-left: 30%;
  &:hover {
    background-color: #d32f2f; /* Darker red */
  }

  &:active {
    background-color: #c62828; /* Even darker red */
  }
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