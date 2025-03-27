/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import exp from "constants";

export const detailContainer = css`
  width: 100%;
  margin: 0 auto;
  padding: 20px 150px;
  border-radius: 8px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 35px;
  height: 100vh; /* 화면 전체 높이 */
  overflow: hidden; /* 전체 페이지에서 넘치는 부분 숨김 */
`;

export const diaryContainer = css`
  width: 100%;
  max-width: 1100px;
  padding: 20px;
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
  font-weight: bold;
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

export const flex = css`
    display: flex;
  flex-direction: row;
  font-weight: bold;
  gap: 20px;
`;

export const image = css`
  width: 100%;
  height: 350px;
  object-fit: contain; /* 이미지가 잘리지 않고 전체가 보이게 */
  object-position: center;
  border-radius: 8px;
  
`;

export const rating = css`
  display: flex;
  align-items: center;
  gap: 25px; /* 아이콘과 텍스트 간격 */
  font-size: 22px;
  font-weight: bold; /* 강조 */
  color: #ffa500; /* 밝은 오렌지 (가독성 향상) */
  background-color: #fff3cd; /* 연한 배경색으로 강조 */
  padding: 5px 10px;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1); /* 부드러운 그림자 효과 */
  width: fit-content; /* 내용 크기에 맞게 */
  
  
`;

export const star = css`
  color: red;
`;

export const imageContainer = css`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center;
`;

export const saveButton = css`
  background-color: #2c3e50; /* 어두운 네이비 블루 */
  color: white; /* 흰색 글자 */
  font-size: 16px; /* 글자 크기 */
  padding: 12px 24px; /* 상하 12px, 좌우 24px 패딩 */
  border: none; /* 테두리 없음 */
  border-radius: 8px; /* 둥근 모서리 */
  cursor: pointer; /* 마우스를 올리면 포인터로 변경 */
  font-weight: bold; /* 글자 굵게 */
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2); /* 그림자 효과 */
  transition: all 0.3s ease; /* 부드러운 애니메이션 */
  margin-top: 2px;

  &:hover {
    background-color: #34495e; /* 호버 시 색상 변경 */
    transform: translateY(-2px) scale(1.05); /* 약간 위로 이동 + 크기 확대 */
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3); /* 호버 시 그림자 강화 */
  }

  &:active {
    background-color: #1f2a38; /* 클릭 시 색상 변경 */
    transform: translateY(1px) scale(0.98); /* 클릭 시 크기 약간 축소 */
    box-shadow: 0 3px 8px rgba(0, 0, 0, 0.2); /* 그림자 줄이기 */
  }

  &:disabled {
    background-color: #7f8c8d; /* 비활성화 상태 색상 */
    cursor: not-allowed; /* 클릭 불가 */
    box-shadow: none; /* 그림자 제거 */
  }
`;

export const copyButton = css`
  background: none;
  border: none;
  color: black;
  cursor: pointer;
  margin-left: 10px;  
  font-size: 1.2em;
  
  &:hover {
    color: black;
  }
`;
