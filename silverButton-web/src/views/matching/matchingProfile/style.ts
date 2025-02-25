/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

export const MatchingProfileContainer = css`
  font-family: 'Arial', sans-serif;
  padding: 40px;
  text-align: center;
`;

export const MatchingProfileContent = css`
  display: flex;
  justify-content: space-between;
  gap: 40px;
  flex-wrap: wrap;
`;

export const CaregiverInfo = css`
  background-color: #ffffff;
  padding: 50px;
  margin: 20px;
  border-radius: 12px;
  flex: 1;
  min-width: 400px;
  max-width: 800px;
  box-sizing: border-box;
  border: 1px solid #add8e6; /* 연한 파란색 테두리 */
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.1);
`;

export const DependentInfo = css`
  background-color: #ffffff;
  padding: 50px;
  margin: 20px;
  border-radius: 12px;
  flex: 1;
  min-width: 400px;
  max-width: 800px;
  box-sizing: border-box;
  border: 1px solid #add8e6; /* 연한 파란색 테두리 */
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.1);
`;

export const InfoHeader = css`
  font-size: 1.8rem;
  margin-bottom: 15px;
  color: #003366; /* 다크 블루 */
  font-weight: bold; /* 굵게 */
`;

export const InfoText = css`
  font-size: 1.2rem;
  margin: 10px 0;
  color: #5a5d8f; /* 중간 블루 */
  line-height: 1.5; /* 줄 간격 조정 */
  font-family: 'Arial', sans-serif; /* 폰트 패밀리 */
`;

export const ButtonsContainer = css`
  display: flex;
  justify-content: center;
  margin-top: 30px;
`;

export const Button = css`
  padding: 12px 30px;
  font-size: 1.2rem;
  border: 2px solid #3b82f6; /* 테두리 추가 */
  border-radius: 12px;
  cursor: pointer;
  color: #3b82f6; /* 텍스트 색상 */
  font-weight: bold;
  background: white; /* 흰색 배경 */
  margin-right: 20px;
  transition: background 0.3s ease, color 0.3s ease, box-shadow 0.3s ease;

  /* 기본 상태에서 그림자 효과 */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  &:hover {
    background: #3b82f6; /* 호버 시 배경색 변경 */
    color: white; /* 호버 시 텍스트 색상 변경 */
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2); /* 호버 시 그림자 효과 증가 */
  }

  &:active {
    background: #1e40af; /* 클릭 시 배경색 변경 */
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
