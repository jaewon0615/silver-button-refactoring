import { css } from '@emotion/react';

export const container = css`
  width: 100%;
  padding: 20px 160px;
`;

export const title = css`
  font-size: 30px;
  margin-bottom: 20px;
  text-align: center;
  font-weight: bold;
`;

export const formContainer = css`
  display: flex;
  flex-direction: column;
`;

export const formTitle = css`
  font-size: 25px;
  margin-bottom: 10px;
  font-weight: bold;
`;

export const starRating = css`
  display: flex;
  gap: 5px;
  font-size: 60px;
`;

export const star = css`
  cursor: pointer;
  color: #ffd700; /* 별 색상 */
`;

export const inputContainer = css`
  margin-bottom: 15px;
`;

export const textarea = css`
  width: 100%;
  height: 100px;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid black;
  font-size: 20px;
`;

export const button = css`
  background-color: #007bff;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 25px;
  font-weight: bold;
  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;

export const reviewbutton = css`
  background-color: yellowgreen;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 25px;
  font-weight: bold;
  margin-top: 20px;
  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;

export const detailContainer = css`
  width: 100%;
  margin: 0 auto;
  padding: 20px 150px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  gap: 35px;
`;

export const conttSt = css`
  width: 100%;
  height: 100%;
  background-color: rgba(147, 129, 255, 0.08);
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

export const charCount = css`
  font-size: 17px;
  color: black;
  text-align: right;
  margin-top: 5px;
`;
