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
  background: #eef5ff;
`;

export const title = css`
  text-align: center;
  color: #1e88e5;
  padding-bottom: 20px;
  font-weight: bold;
  border-bottom: 2px solid #1e88e5 ;
`;

export const form = css`
  display: flex;
  flex-direction: column;
  gap: 15px;
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
  font-size: 20px;
`;

export const labels = css`
  font-weight: bold;
  color: #1565c0;
  font-size: 20px;
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

export const contentInput = css`
  padding: 10px;
  border: 1px solid #64b5f6;
  border-radius: 4px;
  transition: border-color 0.3s;
  font-size: 17px;
  background: #ffffff;
  height: 430px;

  &:focus {
    border-color: #1e88e5;
    outline: none;
  }
`;



export const submitButton = css`
  padding: 10px;
  background-color: #1e88e5;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  margin-top: 20px;

  &:hover {
    background-color: #1565c0;
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
  margin-bottom: 15px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  font-family: 'Nanum Gothic', sans-serif; /* 한글 폰트 설정 */
  border: 1px solid rgba(147, 129, 255, 0.3);
  margin-top: 5px;
  flex-direction: column;
`;

export const recordContainer = css`
  width: 100%;
  height: 100%;
`;

export const resultContainer = css`
  width: 100%;
  height: 600px;
  background: #f0f8ff;
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
  background-color: #e53935; /* Red */
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 20px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  text-align: center;
  width: auto;
  display: inline-block; /* Align horizontally */
  white-space: nowrap; /* Prevent text from wrapping */

  &:hover {
    background-color: #d32f2f; /* Darker red */
  }

  &:active {
    background-color: #c62828; /* Even darker red */
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
`;

export const nameText = css`
  font-weight: bold;
  color: orange;
`;

export const dataText = css`
  font-weight: bold;
  color: red;
`
export const searchInput = css`
  width:100%;
    padding: 10px;
    border:1px solid #ccc;
    border-radius:5px;
    font-size: 16px;
    outline: none;
    transition: border-color 0.3s;
    margin-top: 10px;
    :focus{
      border-color: '#007BFF', // 포커스 시 테두리 색상 변경

    }
`;

export const linkStyle = css`
  color: #007bff; /* 파란색 링크 */
  font-weight: 600; /* 글자 굵게 */
  font-size: 18px; /* 크기 조정 */
  transition: color 0.3s, text-decoration 0.3s; /* 부드러운 호버 효과 */
  cursor: pointer;
  
  &:hover {
    color: #0056b3; /* 호버 시 어두운 파란색 */
    text-decoration: underline; /* 밑줄 추가 */
    transform: scale(1.05); /* 호버 시 크기 살짝 커짐 */
  }
  
  &:active {
    color: #003d80; /* 클릭 시 더 어두운 파란색 */
    transform: scale(1); /* 클릭 시 크기 원래대로 */
  }
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