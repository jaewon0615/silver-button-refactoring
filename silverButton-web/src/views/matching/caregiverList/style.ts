/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

export const CaregiverListContainer = css`
  padding: 30px;
  font-family: 'Arial', sans-serif;
  border-radius: 16px;
  height: 770px;
  width: 100%;
  padding: 0 150px 20px 150px;
`;

export const Title = css`
  font-size: 28px;
  font-weight: bold;
  text-align: center;
  color: #1e88e5; 
  margin-bottom: 30px;
  margin-top: 10px;
  border-bottom: 2px solid #1e88e5;
`;

export const CaregiverListWrapper = css`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-start;
  gap: 30px; /* 항목 사이의 간격 증가 */
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const CaregiverItem = css`
  width: calc(50% - 20px); /* 두 항목을 한 줄에 배치하면서 간격을 고려 */
  background: #ffffff; /* 흰색 배경 */
  border: 1px solid #add8e6; /* 연한 파란색 테두리 */
  padding: 24px;
  border-radius: 16px;
  font-size: 20px;
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
  text-align: center;
  overflow: hidden;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
    background: #f0f8ff; /* 연한 파란색 호버 효과 */
  }
`;

export const CaregiverName = css`
  font-size: 22px;
  font-weight: bold;
  margin-bottom: 14px;
  color: #003366; /* 다크 블루 */
  text-transform: uppercase;
  letter-spacing: 1px;
`;

export const CaregiverInfo = css`
  font-size: 16px;
  color: #5a5d8f; /* 중간 블루 */
  line-height: 1.6;
  font-weight: 500;
`;

export const ViewProfileButton = css`
  display: block;
  margin-top: 20px;
  padding: 12px 22px;
  background: #007bff; /* 파란색 버튼 */
  color: white;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  font-weight: bold;
  font-size: 18px;


  &:hover {
    background: #0056b3; /* 어두운 파란색 호버 효과 */
    transform: scale(1.05);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.25);
  }
`;

export const NoDataMessage = css`
  text-align: center;
  font-size: 18px;
  color: #5a5d8f; /* 중간 블루 */
  font-style: italic;
  padding: 12px;
  border-radius: 10px;
  background: #e6f7ff; /* 연한 파란색 배경 */
  border: 1px solid #a3bffa; /* 연한 파란색 테두리 */
`;

export const ErrorMessage = css`
  text-align: center;
  font-size: 16px;
  color: #d32f2f; /* 빨간색 */
  font-weight: bold;
  background: #ffccbc; /* 연한 빨간색 배경 */
  padding: 14px;
  border-radius: 12px;
  border: 1px solid #e57373; /* 연한 빨간색 테두리 */
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
`;

export const CaregiverNameStyle = css`
  font-size: 24px; /* 폰트 크기 조정 */
  font-weight: bold; /* 굵게 */
  color: #003366; /* 다크 블루 */
  margin-bottom: 10px; /* 아래 여백 */
`;

export const CaregiverNicknameStyle = css`
  font-size: 20px; /* 폰트 크기 조정 */
  color: #007bff; /* 파란색 */
  margin-bottom: 8px; /* 아래 여백 */
`;

export const CaregiverEmailStyle = css`
  font-size: 18px; /* 폰트 크기 조정 */
  color: #5a5d8f; /* 중간 블루 */
  margin-bottom: 8px; /* 아래 여백 */
`;

export const CaregiverBirthDateStyle = css`
  font-size: 18px; /* 폰트 크기 조정 */
  color: #5a5d8f; /* 중간 블루 */
`;

export const paginationContainer = css`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  padding: 16px;
  border-radius: 8px;
  background-color: #f9f9f9; /* 연한 회색 배경 */
`;

export const paginationButton = css`
  background-color: rgba(147, 129, 255, 0.2); /* 보라색 배경 */
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
  background-color: rgba(147, 129, 255, 0.8); /* 활성화된 버튼의 배경 */
  color: #ffffff; /* 텍스트 색상 */
  border-color: rgba(147, 129, 255, 1);

  &:hover {
    background-color: rgba(147, 129, 255, 1); /* 호버 시 더 진한 색 */
  }
`;

export const arrowButton = css`
  background-color: rgba(147, 129, 255, 0.2); /* 버튼 배경 */
  border: 1px solid rgba(147, 129, 255, 0.5); /* 테두리 */
  color: rgba(147, 129, 255, 0.8); /* 텍스트 색상 */
  border-radius: 4px;
  padding: 8px 12px;
  font-size: 14px;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s, border-color 0.3s;

  &:hover:not(:disabled) {
    background-color: rgba(147, 129, 255, 0.3); /* 호버 시 밝은 색상 */
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