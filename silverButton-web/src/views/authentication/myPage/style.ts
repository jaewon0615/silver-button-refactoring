/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

// MyPage Container
export const myPageContainer = css`
  width: 100%;
  height: 100%;
  padding: 20px 150px;
  border-radius: 8px;
`;

// Header
export const myPageHeader = css`
  text-align: center;
  margin-bottom: 20px;
`;

export const myPageHeaderTitle = css`
  font-size: 24px;
  color: #3b82f6;  // Blue color
`;

// Main Section
export const myPageMain = css`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 20px;
`;

export const myPageLeft = css`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
  padding: 20px;
  border-radius: 8px;
  border: 1px solid #e0e0e0;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const profileImg = css`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const profileImgStyle = css`
  width: 100%;
  height: auto;
  border-radius: 50%;
`;

// Edit button for profile image
export const editButton = css`
  background-color: #3b82f6;  // Blue color
  color: white;
  padding: 8px 16px;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  font-size: 14px;
  margin-left: 40px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }

  &:active {
    transform: scale(0.98);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  }
`;

export const myPageRight = css`
  flex: 2;
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
`;


export const formItem = css`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 20px;
`;

export const small = css`
  font-size: 12px;
  color: red;
  font-weight: bold;
`;

export const inputField = css`
  padding: 12px;
  font-size: 20px;
  border: 1px solid #d1d5db;  // Light grey border
  border-radius: 15px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  transition: border-color 0.3s ease, box-shadow 0.3s ease;
  outline: none;
  background-color: white;

  &:focus {
    border-color: #3b82f6;  // Blue border on focus
    box-shadow: 0 0 4px rgba(59, 130, 246, 0.5);  // Blue glow
  }

  &::placeholder {
    color: #a1a1a1;  // Placeholder color
  }
`;

export const tmiButtons = css`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 20px;
  margin-top: 40px;
`;

export const messageButton = css`
background-color: #4F93F5;  // Purple color
color: white;
font-size: 40px;
font-weight: bold;
padding: 10px 15px;
border: none;
border-radius: 15px;
cursor: pointer;
transition: transform 0.3s ease, box-shadow 0.3s ease;
width: 50%;  // Increased width for a wider button
height: 150px;

&:hover {
  transform: scale(1.05);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

&:active {
  transform: scale(0.98);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}
`;

export const medicineButton = css`
  background-color: #F59E0B;  // Purple color
  color: white;
  font-size: 40px;
  font-weight: bold;
  padding: 10px 15px;
  border: none;
  border-radius: 15px;
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  width: 35%;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }

  &:active {
    transform: scale(0.98);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  }
`;

export const recordButton = css`
  background-color: #34D399;  // Purple color
  color: white;
  font-size: 40px;
  font-weight: bold;
  padding: 10px 15px;
  border: none;
  border-radius: 15px;
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  width: 35%;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }

  &:active {
    transform: scale(0.98);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  }
`;

export const emergencyButton = css`
  background-color: #dc3545;  // Purple color
  color: white;
  font-size: 40px;
  font-weight: bold;
  padding: 10px 15px;
  border: none;
  border-radius: 15px;
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  width: 35%;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }

  &:active {
    transform: scale(0.98);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  }
`;

export const diaryButton = css`
  background-color: #6f42c1;  // Purple color
  color: white;
  font-size: 40px;
  font-weight: bold;
  padding: 10px 15px;
  border: none;
  border-radius: 15px;
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  width: 35%;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }

  &:active {
    transform: scale(0.98);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  }
`;

export const exerciseButton = css`
  background-color: rgb(189, 183, 107);  // Purple color
  color: white;
  font-size: 40px;
  font-weight: bold;
  padding: 10px 15px;
  border: none;
  border-radius: 15px;
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  width: 35%;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }

  &:active {
    transform: scale(0.98);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  }
`;

export const expenseButton = css`
  background-color: #D9C29B;  // Purple color
  color: white;
  font-size: 40px;
  font-weight: bold;
  padding: 10px 15px;
  border: none;
  border-radius: 15px;
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  width: 35%;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }

  &:active {
    transform: scale(0.98);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  }
`;

export const destinationButton = css`
  background-color: #032132;  // Purple color
  color: white;
  font-size: 40px;
  font-weight: bold;
  padding: 10px 15px;
  border: none;
  border-radius: 15px;
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  width: 35%;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }

  &:active {
    transform: scale(0.98);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  }
`;

export const destinationReviewButton = css`
  background-color: #5D3A00; /* 희귀한 갈색 계열 */
  color: white;
  font-size: 40px;
  font-weight: bold;
  padding: 10px 15px;
  border: none;
  border-radius: 15px;
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  width: 35%;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }

  &:active {
    transform: scale(0.98);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  }
`;

export const sleepButton = css`
  background-color: #3B1E35; /* Charcoal Plum: 어두운 자주색 */
  color: white;
  font-size: 40px;
  font-weight: bold;
  padding: 10px 15px;
  border: none;
  border-radius: 15px;
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  width: 35%;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }

  &:active {
    transform: scale(0.98);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  }
`;

export const reviewButton = css`
  background-color: #014D4E; /* Deep Teal Blue: 희귀하고 세련된 파랑+초록 계열 */
  color: #F0F8FF; /* Alice Blue: 밝고 차분한 흰색 느낌 */
  font-size: 40px;
  font-weight: bold;
  padding: 10px 15px;
  border: none;
  border-radius: 15px;
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  width: 35%;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 4px 6px rgba(1, 77, 78, 0.3);
  }

  &:active {
    transform: scale(0.98);
    box-shadow: 0 2px 4px rgba(1, 77, 78, 0.5);
  }
`;



export const messageIcon = css`
  margin-right: 10px;
`;

export const myPageFooter = css`
  display: flex;
  gap: 10px;
  margin-top: 20px;
  justify-content: flex-end;
`;

export const saveButton = css`
  background-color: #22c55e;  // Green color
  color: white;
  font-size: 23px;
  padding: 10px 20px;
  border: none;
  border-radius: 23px;
  cursor: pointer;
  font-weight: bold;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }

  &:active {
    transform: scale(0.98);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  }
`;

export const deleteButton = css`
  background-color: #ef4444;  // Red color
  color: white;
  font-size: 23px;
  padding: 10px 20px;
  border: none;
  border-radius: 23px;
  cursor: pointer;
  font-weight: bold;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }

  &:active {
    transform: scale(0.98);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  }
`;

export const errorMessage = css`
  color: red;
  font-weight: bold;
  margin-top: 10px;
  font-size: 14px;
`;

export const text = css`
font-size: 20px;
  font-weight: bold;
  color: #3b82f6;  // Blue color
  margin-bottom: 8px;
`;

export const footerBox = css`
display: flex;
  justify-content: space-between;
  gap: 20px;
  flex: 1;
`;

export const buttonStyle = css`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 10px 16px;
  font-size: 14px;
  font-weight: bold;
  color: #fff;
  background-color: #007bff;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;
  
  &:hover {
    background-color: #0056b3;
    transform: scale(1.05);
  }

  &:active {
    background-color: #003d80;
    transform: scale(0.98);
  }
  
  &:focus {
    outline: none;
    box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
  }
`;


export const buttonCarouselContainer = css`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  overflow: hidden;
  margin-bottom: 20px;
`;

export const buttonCarouselWrapper = css`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: center;
  
`;

export const buttonCarousel = css`
  display: flex;
  gap: 10px;
  overflow-x: auto;
  scroll-behavior: smooth;
  white-space: nowrap;
  width: 100%;
  padding: 10px 0;
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const carouselButton = css`
  flex: 0 0 auto;
  padding: 10px 15px;
  font-size: 16px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  background-color: #007bff;
  color: white;
  transition: background 0.3s;

  &:hover {
    background-color: #0056b3;
  }
`;

export const arrowButton = css`
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  margin: 0 10px;
  color: #333;
  transition: color 0.3s;

  &:hover {
    color: #007bff;
  }
`;

export const carouselContainer = css`
  display: flex;
  align-items: center;
  width: 100%;
`;

export const buttonList = css`
  display: flex;
  gap: 10px;
  overflow: hidden;
  scroll-behavior: smooth;
  white-space: nowrap;
  width: 400px;
  padding: 10px 0;
`;

export const hiddenScroll = css`
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;
