/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

export const contailner = css`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #ffffff;
  padding: 20px 150px;
  border-radius: 10px;
`;

export const gameContainer = css`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #ffffff;
  padding: 20px 150px;
  border-radius: 10px;
  border: 2px solid #4a148c;
`;

export const gameTitle = css`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 20px;
  color: #4a148c;
`;

export const buttonContainer = css`
  display: flex;
  gap: 15px;
  margin-bottom: 20px;
`;

export const cardGrid = css`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 15px;
  margin-top: 30px;
  width: 80%;
`;

export const card = css`
  width: 90px;
  height: 90px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  border: 2px solid #7e57c2;
  background: #b39ddb;
  cursor: pointer;
  box-shadow: 3px 3px 7px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease-in-out, background 0.3s;
  border-radius: 8px;

  &:hover {
    transform: scale(1.1);
    background: #7e57c2;
    color: white;
  }
`;

export const matched = css`
  opacity: 0.6;
`;

export const winMessage = css`
  margin-top: 20px;
  font-size: 1.5rem;
  font-weight: bold;
  color: #1e88e5;
`;

export const levelText = (level: number) => css`
  font-size: 1.5rem;
  font-weight: bold;
  text-align: center;
  color: ${level < 6 ? "#283593" : level < 11 ? "#1565c0" : "#8e24aa"};
  transition: color 0.3s ease-in-out;
  margin-top: 30px;


  ${level >= 11 &&
  `animation: pulse 1s infinite alternate;
   @keyframes pulse {
     0% { transform: scale(1); }
     100% { transform: scale(1.1); }
   }`}
`;

export const modalOverlay = css`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const modalContent = css`
  background: #fff;
  padding: 40px; /* Increased padding for more space */
  border-radius: 12px;
  width: 90%; /* Increased width to 90% for a larger modal */
  max-width: 800px; /* Increased max-width */
  text-align: center;
  box-shadow: 0px 5px 25px rgba(0, 0, 0, 0.3); /* Increased shadow for better emphasis */
`;


export const infoButton = css`
  padding: 12px 25px;
  background: #3949ab;
  color: #fff;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-weight: bold;
  transition: background 0.3s;
  margin-left: 20px;
  font-size: 20px;

  &:hover {
    background: #283593;
  }
`;

export const restartButton = css`
  padding: 12px 25px;
  background: #d32f2f;
  color: #fff;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-weight: bold;
  transition: background 0.3s;
  font-size: 20px;

  &:hover {
    background: #b71c1c;
  }
`;

export const closeButton = css`
  padding: 12px 25px;
  background: #43a047;
  color: #fff;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-weight: bold;
  transition: background 0.3s;
  font-size: 20px;

  &:hover {
    background: #2e7d32;
  }
`;

export const listStyle = css`
  margin-top: 40px;
  font-weight: bold;
  color: black;
  font-size: 20px;
`;

export const list = css`
  list-style: none;
  padding-left: 0;
`;

export const indexStyle = css`
  color: #FF5722;
  font-weight: bold;
`;

// style.ts 파일에 추가할 스타일 예시

export const timerText = css`
  font-size: 1.5rem;
  font-weight: bold;
  color: #333;
  margin-top: 20px;
  text-align: center;
  background-color: #f1f1f1;
  padding: 10px 20px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: fit-content;
  margin-left: auto;
  margin-right: auto;
  font-family: 'Arial', sans-serif;

  /* 게임 테마에 맞는 색상 또는 스타일을 추가 */
  color: #4caf50; // 초록색 텍스트 (게임의 성공적인 느낌을 주기 위해)

  /* 타이머 숫자가 바뀔 때 조금 더 강조되는 효과 */
  animation: timerBlink 1s infinite;
  
  @keyframes timerBlink {
    0% { opacity: 1; }
    50% { opacity: 0.7; }
    100% { opacity: 1; }
  }
`;
