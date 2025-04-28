import { css } from "@emotion/react";

export const container = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 150px;
  width: 100%;
  height: 100%;
`;

export const title = css`
  font-size: 2.5rem;
  font-weight: bold;
  color: #1e88e5;
  margin-bottom: 30px;
  text-align: center;
`;

export const chartContainer = css`
  width: 90%;
  max-width: 1000px;
  margin: 0 auto;
  padding: 20px 0;
`;

export const noDataMessage = css`
  color: #ff0000;
  font-size: 1.2rem;
  text-align: center;
`;

export const inputGroup = css`
  display: flex;
  flex-direction: column;
  margin-top: 5px;
`;

export const label = css`
  margin-bottom: 5px;
  font-weight: bold;
  color: #1565c0;
  font-size: 18px;
`;

export const input = css`
  padding: 10px;
  border: 1px solid #64b5f6;
  border-radius: 4px;
  transition: border-color 0.3s;
  font-size: 17px;
  background: #ffffff;

  &:focus {
    border-color: #1e88e5;
    outline: none;
  }
`;

export const recordContainer = css`
  width: 100%;
  height: 100%;
`;

export const form = css`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const submitButton = css`
  padding: 12px;
  background-color: #1e88e5;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.1);

  &:hover {
    background-color: #1565c0;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
  }

  &:active {
    background-color: #0d47a1;
  }
`;

export const graphContainer = css`
  width: 100%;
  height: 100%;
`;

export const resultText = css`
  text-align: center;
  padding-bottom: 20px;
  color: #1e88e5;
  font-weight: bold;
  border-bottom: 3px solid #1e88e5;
  margin-bottom: 30px;
`;

export const errorMessage = css`
  text-align: center;
  font-size: 16px;
  color: #d32f2f;
  font-weight: bold;
  background: #ffccbc;
  padding: 18px;
  border-radius: 12px;
  border: 1px solid #e57373;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  margin-top: 20px;
`;

export const chartTitle = css`
  font-size: 30px;
  font-weight: bold;
  color: #333;
  text-align: center;
  margin-bottom: 30px;
`;

export const chartLegend = css`
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
  font-size: 1.2rem;
`;

export const legendItem = css`
  display: flex;
  align-items: center;
  font-size: 1.2rem;
  color: #333;
`;

export const legendDot = css`
  width: 14px;
  height: 14px;
  border-radius: 50%;
  margin-right: 10px;
`;
