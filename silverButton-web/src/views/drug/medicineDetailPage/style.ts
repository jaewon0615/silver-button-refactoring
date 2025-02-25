
import { css } from "@emotion/react";



export const contSt = css`
  width: 100%;
  min-height: 100vh; /* 최소 높이를 화면 전체로 설정 */
  display: flex;
  justify-content: center;
  align-items: flex-start; /* 위쪽 정렬 */
  padding: 10px 150px;
`;

export const conttSt = css`
  width: 100%;
  height: auto; /* 자동 높이 조정 */
  background-color: rgba(162, 143, 199, 0.15);
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1); /* 그림자 추가 */
`;

export const listCt = css`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const medicineAll = css`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const medicineRow = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #e0e0e0;
  padding-bottom: 10px;
  margin-bottom: 10px;
`;

export const medicineName = css`
  font-size: 1.5rem;
  font-weight: bold;
  color: #333;
`;

export const imageBox = css`
  text-align: center;
  img {
    max-width: 100%;
    max-height: 300px;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
`;

export const medicneDeatail = css`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const detailText = css`
  font-size: 15px;
  line-height: 1.5;
  color: #555;
  margin-top: 20px;
`;

export const text = css`
  font-weight: 600;
  color: #222;
  font-size: 25px;
  color: blue;
`;

export const button = css`
  display: inline-block;
  background-color: #007bff;
  color: #fff;
  padding: 10px 20px;
  border-radius: 5px;
  border: none;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.5);
  }
`;

export const saveMessage = css`
  margin-top: 10px;
  font-size: 1rem;
  color: #28a745;
  text-align: center;
`;

export const error = css`
  color: #dc3545;
  text-align: center;
  font-size: 1.1rem;
  margin-top: 10px;
`;

export const loading = css`
  color: #6c757d;
  text-align: center;
  font-size: 1.1rem;
  margin-top: 10px;
`;

export const saveButton = css`
  padding: 8px 12px;
  background-color: transparent;
  color: black;
  border: none;
  border-radius: 4px;
  font-size: 18px;
  font-weight: bold;
  margin-left: 15px;
  margin-top: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  border: 1px solid rgba(162, 143, 199, 0.8);
  &:hover {
    background-color: blue;
    color: white;
  }

  &:active {
    background-color: red;
  }
`;

// 모달 스타일
export const modal = css`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;

`;

export const modalContent = css`
  background-color: #ffffff;
  padding: 40px;
  border-radius: 12px; /* 매끈한 모서리 */
  width: 500px; /* 적당한 너비 */
  text-align: center;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1); /* 깔끔하고 세련된 그림자 */
  color: #333;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif; /* 모던한 글꼴 */
  border: none;
  transition: all 0.3s ease-in-out; /* 부드러운 애니메이션 */

  &:hover {
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15); /* 호버 시 더 부드러운 그림자 효과 */
    transform: translateY(-5px); /* 모달이 살짝 올라오는 효과 */
  }
`;

export const modalButton = css`
  background-color: #4CAF50; /* 세련된 녹색 */
  color: white;
  border: none;
  padding: 12px 24px;
  margin: 15px 0;
  border-radius: 8px; /* 둥글고 깔끔한 버튼 */
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.2s ease;

  &:hover {
    background-color: #45a049; /* 호버 시 버튼 색상 */
    transform: translateY(-2px); /* 버튼 호버 효과 */
  }
`;

export const closeButton = css`
  background-color: #f1f1f1; /* 부드러운 회색 */
  color: #333;
  padding: 12px 24px;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  margin-top: 10px;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.2s ease;
  margin-left: 20px;

  &:hover {
    background-color: #e0e0e0; /* 호버 시 버튼 색상 */
    transform: translateY(-2px); /* 버튼 호버 효과 */
  }
`;



export const modalText = css`
font-size: 20px;
`;
