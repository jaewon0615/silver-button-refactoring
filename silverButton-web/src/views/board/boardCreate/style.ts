import { css } from "@emotion/react";

export const formWrapper = css`
  display: flex;
  flex-direction: column; /* 세로 방향으로 정렬 */
  align-items: center; /* 중앙 정렬 */
  width: 100%; /* 전체 너비 */
  padding: 20px; /* 여백 추가 */
`;

export const formContainer = css`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 90%;
  margin: 0 auto;
  padding: 20px;
  min-height: 70vh;
  border: 1px solid #ddd;
  border-radius: 12px;
`;

export const titleInput = css`
  margin-bottom: 1px;
  padding: 12px;
  font-size: 18px;
  width: 100%;
  border: 1px solid #ccc;
  border-radius: 8px;
  &:focus {
    border-color: #6ee7b7;
    box-shadow: 0 0 4px rgba(110, 231, 183, 0.5);
    outline: none;
  }
`;

export const fileInput = css`
  margin-bottom: 1px;
  padding: 12px; /* 패딩 증가 */
  font-size: 16px; /* 폰트 크기 유지 */
  width: 100%;
  border: 2px solid #3b82f6; /* 강조된 테두리 색상 */
  border-radius: 4px; /* 둥글게 설정 */
  background-color: #e7f3ff; /* 연한 파란색 배경색 */
  color: #3b82f6; /* 텍스트 색상 */
  cursor: pointer; /* 커서 포인터로 설정 */
  transition: border-color 0.3s, box-shadow 0.3s; /* 부드러운 전환 효과 */

  &:focus {
    border-color: #1e88e5; /* 포커스 시 더 진한 파란색 */
    box-shadow: 0 0 4px rgba(30, 136, 229, 0.5); /* 강조된 그림자 */
    outline: none; /* 기본 아웃라인 제거 */
  }

  &:hover {
    border-color: #1e88e5; /* 호버 시 테두리 색상 변경 */
    background-color: #d1e8ff; /* 호버 시 배경색 변경 */
  }
`;



// 이미지 스타일 (이미지가 삽입될 위치 설정)
export const imagePreview = css`
  margin-top: 16px;
  max-width: 100%;
  max-height: 400px; /* 이미지의 최대 높이를 설정하여 화면에 적당히 표시 */
  object-fit: contain; /* 이미지의 비율을 유지하며 크기를 조정 */
  border-radius: 8px;
  border: 1px solid #ccc;
`;

export const contentTextarea = css`
  margin-bottom: 1px;
  padding: 12px;
  font-size: 16px;
  width: 100%;
  height: 48vh;
  border: 1px solid #ccc;
  border-radius: 8px;
  overflow-y: auto;
  resize: vertical;
  &:focus {
    border-color: #6ee7b7;
    box-shadow: 0 0 4px rgba(110, 231, 183, 0.5);
    outline: none;
  }
`;

export const buttonContainer = css`
  display: flex;
  justify-content: space-between;
  gap: 16px;
`;

export const submitButton = css`
  width: 10%;
  padding: 12px;
  background-color: #4a90e2;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  text-align: center;

  &:hover {
    background-color: #357abd;
  }

  &:active {
    background-color: #2c6693;
  }
`;

export const exitButton = css`
  width: 10%;
  padding: 12px;
  background-color: #ff4d4d; /* 부드러운 빨간색 */
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  text-align: center;

  &:hover {
    background-color: #ff1a1a; /* 호버 시 더 진한 빨간색 */
  }

  &:active {
    background-color: #e60000; /* 클릭 시 더욱 진한 빨간색 */
  }
`;

export const pageTitle = css`
  margin-bottom: 20px;
  font-size: 26px;
  color: #1e88e5;
  font-weight: bold;
  border-bottom: 2px solid #64b5f6;
  padding-bottom: 5px;
  width: 90%; /* 전체 너비를 차지하도록 설정 */
  text-align: center; /* 중앙 정렬 */
`;

export const titleContainer = css`
  text-align: center; /* 중앙 정렬 */
  margin-bottom: 20px; /* 아래 여백 */
`;

