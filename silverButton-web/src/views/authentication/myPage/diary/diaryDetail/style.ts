/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

export const detailContainer = css`
  width: 100%;
  height: 100%;
  padding: 30px 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f4f7fc; /* 밝은 배경색 */
`;

export const diaryContainer = css`
  width: 100%;
  max-width: 800px;
  padding: 40px;
  border: 2px solid #4a90e2; /* 파란색 테두리 */
  border-radius: 10px;
  background-color: white; /* 흰색 배경 */
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1); /* 부드러운 그림자 효과 */
  margin-bottom: 20px; /* 하단 여백 */
`;

export const title = css`
  color: #7f3fbf; /* 보라색 */
  font-size: 36px;
  font-weight: 600;
  margin-bottom: 20px; /* 여백 추가 */
  text-align: center;
  line-height: 1.3;
`;

export const info = css`
  color: #e74c3c; /* 빨간색 */
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 15px; /* 여백 추가 */
  text-align: center;
`;

export const content = css`
  color: #2ecc71; /* 초록색 */
  font-size: 18px;
  font-weight: 400;
  margin-bottom: 20px; /* 여백 추가 */
  line-height: 1.6;
`;

export const backButton = css`
  color: white; /* 버튼 글자색 */
  margin-top: 20px; /* 여백 */
  cursor: pointer;
  text-align: center;
  font-size: 18px;
  font-weight: bold;
  background-color: #4a90e2; /* 파란색 배경 */
  width: 150px; /* 고정 너비 */
  padding: 10px; /* 내부 여백 */
  border-radius: 8px; /* 둥근 모서리 */
  border: none; /* 테두리 없앰 */
  transition: background-color 0.3s, transform 0.2s; /* 호버 및 클릭 시 부드러운 효과 */

  &:hover {
    background-color: #007bb5; /* 호버 시 어두운 파란색 배경 */
    transform: translateY(-2px); /* 호버 시 위로 살짝 이동 */
  }

  &:active {
    background-color: #005f8d; /* 클릭 시 더 어두운 파란색 배경 */
    transform: translateY(1px); /* 클릭 시 살짝 아래로 이동 */
  }
`;



export const icon = css`
  width: auto;
  height: auto;
`;

export const weather = css`
  font-weight: 700;
  font-size: 24px;
  color: #3498db; /* 파란색 */
  text-align: center;
`;

export const column = css`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  background-color: #f4f7fc; /* 밝은 파란색 배경 */
  padding: 15px;
  border-radius: 8px;
  margin-top: 25px;
`;

export const contents = css`
  background-color: #f9f9f9; /* 부드러운 회색 배경 */
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
  color: #3498db; /* 파란색 */
  font-weight: bold;
  text-align: center;
`;
