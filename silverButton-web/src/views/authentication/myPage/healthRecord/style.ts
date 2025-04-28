/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { ex } from "@fullcalendar/core/internal-common";

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

export const title = css`
  text-align: center;
  color: #1e88e5;
  padding-bottom: 20px;
  font-weight: bold;
  border-bottom: 2px solid #1e88e5;
`;

export const form = css`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const inputGroup = css`
  display: flex;
  flex-direction: column;
  margin-top: 30px;
`;

export const label = css`
  margin-bottom: 5px;
  font-weight: bold;
  color: #1565c0;
  font-size: 25px;
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

export const submitButton = css`
  padding: 12px 20px; /* 위아래 여백, 좌우 여백을 다르게 설정 */
  background-color: #1e88e5; /* 기본 배경색 */
  color: white; /* 글자색 */
  border: none;
  border-radius: 8px; /* 둥근 모서리 */
  cursor: pointer;
  font-size: 18px; /* 글자 크기 */
  font-weight: bold; /* 글자 굵게 */
  transition: background-color 0.3s, transform 0.2s ease-in-out; /* 배경색과 변환 애니메이션 */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* 버튼 그림자 */

  &:hover {
    background-color: #1565c0; /* hover 상태일 때 배경색 */
    transform: translateY(-2px); /* 마우스 오버 시 버튼이 약간 위로 이동 */
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3); /* hover 상태일 때 그림자 더 강하게 */
  }

  &:active {
    background-color: #0d47a1; /* 클릭 시 배경색 */
    transform: translateY(0); /* 클릭 시 버튼이 눌린 효과 */
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* 클릭 시 그림자 효과 감소 */
  }
`;

export const chartButton = css`
  padding: 12px 20px;
  background-color: #ff7043; /* 오렌지색 배경 */
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 18px;
  font-weight: bold;
  transition: background-color 0.3s, transform 0.2s ease-in-out;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  width: 100%;
  margin-top: 28px;

  &:hover {
    background-color: #f4511e; /* hover 시 어두운 오렌지 */
    transform: translateY(-2px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
  }

  &:active {
    background-color: #e64a19; /* 클릭 시 더 어두운 오렌지 */
    transform: translateY(0);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
`;

export const recordList = css`
  margin-top: 20px;
  border-top: 1px solid #64b5f6;
  padding-top: 10px;
`;

export const recordItem = css`
  background-color: #f9f9f9;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: "Nanum Gothic", sans-serif; /* 한글 폰트 설정 */
  border: 1px solid rgba(147, 129, 255, 0.3);
  margin-top: 30px;
`;

export const recordContainer = css`
  width: 100%;
  height: 100%;
`;

export const resultContainer = css`
  width: 100%;
  height: 600px;
`;

export const resultText = css`
  text-align: center;
  padding-bottom: 20px;
  color: #1e88e5;
  font-weight: bold;
  border-bottom: 2px solid #1e88e5;
`;

export const deleteButton = css`
  padding: 8px 13px;
  background-color: #e53935;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 20px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  text-align: center;
  width: auto;
  display: inline-block;
  white-space: nowrap;

  &:hover {
    background-color: #d32f2f;
  }

  &:active {
    background-color: #c62828;
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

export const recordDetails = css`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 8px;
  font-size: 14px;
  color: #333;
`;

export const recordLabel = css`
  font-weight: bold;
  color: #555;
`;

export const recordValue = css`
  margin-left: 5px;
  color: #777;
`;

export const createdDate = css`
  font-size: 12px;
  color: #888;
  margin-top: 10px;
`;

export const resultPageText = css`
  font-weight: bold;
  margin-top: 12.2px;
`;

export const dataText = css`
  font-weight: bold;
  color: red;
`;
export const errorMessage = css`
  text-align: center;
  font-size: 16px;
  color: #d32f2f;
  font-weight: bold;
  background: #ffccbc;
  padding: 14px;
  border-radius: 12px;
  border: 1px solid #e57373;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
  margin-top: 20px;
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
`;
