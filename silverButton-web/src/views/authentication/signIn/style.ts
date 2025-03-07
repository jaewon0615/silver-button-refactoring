/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

// 전체 컨테이너 스타일 (배경 그라디언트)
export const signinContainer = css`
  display: flex;
  justify-content: center;
  /* align-items: center; */
  height: 100vh;
  padding: 20px;
  width: 100%;
`;

// 로그인 카드 스타일 (더 컴팩트하게 조정)
export const signinCard = css`
  width:40%;
  background: #ffffff;
  border-radius: 12px;
  text-align: center;
`;

// 제목 스타일
export const signinTitle = css`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 15px;
  color: #333;
`;

// 입력 필드 스타일
export const inputField = css`
  width: 100%;
`;

// 에러 메시지 스타일
export const errorMessage = css`
  font-size: 14px;
  color: #e63946;
  text-align: left;
`;

// 로그인 버튼 스타일 (보라색 & 파란색 그라디언트)
export const loginButton = css`
   background-color: rgba(162, 143, 199, 0.8);
  color: #ffffff;
  padding: 12px;
  font-size: 20px;
  font-weight: bold;
  border-radius: 8px;
  width: 100%;
  height: 73px;
  margin-top: 10px;
  justify-content: space-between;

  &:hover {
    border: 1px solid rgba(162, 143, 199, 0.8);
    background-color: white;
    color: black;
  }
`;

// 카카오 & 네이버 로그인 버튼 (동일한 크기로 정렬)
export const socialButton = css`
  padding: 10px;
  font-size: 14px;
  font-weight: bold;
  border-radius: 8px;
  width: 100%;
  height: 60px;
  margin-top: 10px;
`;

export const kakaoButton = css`
  background-color: #FEE500;
  color: black;
  padding: 12px;
  font-size: 20px;
  font-weight: bold;
  border-radius: 8px;
  width: 100%;
  margin-top: 20px;
  justify-content: space-between;

  &:hover {
    background: #D4B700;
  }
  
`;

export const naverButton = css`
  background: #03C75A;
  color: #ffffff;
  padding: 12px;
  font-size: 20px;
  font-weight: bold;
  border-radius: 8px;
  width: 100%;
  margin-top: 20px;
  justify-content: space-between;

  &:hover {
    background: #029A45 ;
  }
`;

// 하단 링크 (아이디 찾기, 회원가입)
export const linkContainer = css`
  display: flex;
  justify-content: space-between;
  margin-top: 15px;
`;

export const linkButton = css`
  color: #5b63d0;
  font-size: 14px;
  font-weight: 500;
  text-decoration: none;
  cursor: pointer;
  transition: color 0.3s;

  &:hover {
    color: #7a3ff1;
  }
`;

export const mainIcon = css`
  width: 15%;
  height: 40px;
  display: flex;
  align-items: flex-end;
  margin-right: 30px;
`;

export const kakaoIcon = css`
  width: 15%;
  height: 50px;
  display: flex;
  align-items: flex-start;
`;

export const naverIcon = css`
  width: 15%;
  height: 50px;
  display: flex;
  align-items: flex-start;
`;

export const mainLogin = css`
  display: flex;
  justify-content: space-between;
`;

export const footerButtonContainer = css`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 30px;
  gap: 10px;
`;


export const footerButton = css`
  width: 35%;
  height: auto;
  font-size: 18px;
  font-weight: bold;
  color: #fff;  /* Change text color to white */
  background-color: #4b8df8;  /* Blue background */
  border: none;  /* Remove default border */
  border-radius: 8px;  /* Rounded corners */
  padding: 12px 20px;
  text-align: center;
  cursor: pointer;
  transition: all 0.3s ease;  /* Smooth transition for hover effects */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);  /* Subtle shadow for depth */

  &:hover {
    background-color: #357ae8;  /* Darker blue on hover */
    transform: translateY(-2px);  /* Slight lift effect */
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);  /* More prominent shadow on hover */
  }

  &:focus {
    outline: none;  /* Remove focus outline */
  }

  &:active {
    background-color: #3060c7;  /* Darker color when clicked */
    transform: translateY(0);  /* Reset lift effect on click */
  }
`;
