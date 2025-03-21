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
  width: 90%;  /* 너비를 90%로 설정 */
  max-width: 1000px;  /* 최대 너비를 1000px로 설정하여 더 넓게 */
  margin: 0 auto;
  padding: 20px 0;  /* 여백 추가 */
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
  font-size: 30px;  /* 폰트 사이즈 키움 */
  font-weight: bold;
  color: #333;
  text-align: center;
  margin-bottom: 30px;  /* 더 여유 있게 마진 추가 */
`;

export const chartLegend = css`
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
  font-size: 1.2rem;  /* 폰트 사이즈 키움 */
`;

export const legendItem = css`
  display: flex;
  align-items: center;
  font-size: 1.2rem;  /* 폰트 사이즈 키움 */
  color: #333;
`;

export const legendDot = css`
  width: 14px;  /* 범례 점 크기 키움 */
  height: 14px;  /* 범례 점 크기 키움 */
  border-radius: 50%;
  margin-right: 10px;  /* 점과 텍스트 간 간격을 넓힘 */
`;
