/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

export const detailContainer = css`
  width: 100%;
  margin: 0 auto;
  padding: 20px 150px;
  border-radius: 8px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 35px;
`;

export const diaryContainer = css`
  width: 100%;
  max-width: 800px;
  padding: 40px;
  border: 2px solid #4a90e2;
  border-radius: 10px;
  background-color: white;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
`;

export const title = css`
  color: #7f3fbf;
  font-size: 36px;
  font-weight: 600;
  margin-bottom: 20px;
  text-align: center;
  line-height: 1.3;
`;

export const info = css`
  color: #e74c3c;
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 15px;
  text-align: center;
`;

export const content = css`
  color: #2ecc71;
  font-size: 18px;
  font-weight: 400;
  margin-bottom: 20px;
  line-height: 1.6;
`;

export const backButton = css`
  color: white;
  margin-top: 20px;
  cursor: pointer;
  text-align: center;
  font-size: 18px;
  font-weight: bold;
  background-color: #4a90e2;
  width: 150px;
  padding: 10px;
  border-radius: 8px;
  border: none;
  transition: background-color 0.3s, transform 0.2s;

  &:hover {
    background-color: #007bb5;
    transform: translateY(-2px);
  }

  &:active {
    background-color: #005f8d;
    transform: translateY(1px);
  }
`;

export const icon = css`
  width: auto;
  height: auto;
`;

export const weather = css`
  font-weight: 700;
  font-size: 24px;
  color: #3498db;
  text-align: center;
`;

export const column = css`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  background-color: #f4f7fc;
  padding: 15px;
  border-radius: 8px;
  margin-top: 25px;
`;

export const contents = css`
  background-color: #f9f9f9;
  padding: 20px;
  font-weight: 500;
  font-size: 18px;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05);
  margin-top: 25px;
  height: 500px;
`;

export const time = css`
  margin-top: 15px;
  font-size: 18px;
  color: #3498db;
  font-weight: bold;
  text-align: center;
`;

export const conttSt = css`
  width: 100%;
  height: auto;
  background-color: rgba(147, 129, 255, 0.08);
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: row;
  gap: 30px;
  justify-content: center;
`;

export const container = css`
  width: 100%;
  margin: 0 auto;
  padding: 20px 150px;
  border-radius: 8px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 35px;
`;
