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




export const item = css`
  display: flex;
  flex-direction: column;
  gap: 8px;
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


export const tmiButton = css`
background-color: #6b5bff;  // Purple color
  color: white;
  font-size: 25px;
  font-weight: bold;
  padding: 10px 15px;
  border: none;
  border-radius: 15px;
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  text-align: center;
  width: 100%;  // Ensuring buttons have equal width

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }

  &:active {
    transform: scale(0.98);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  }
`;

export const myPageFooter = css`
display: flex;
  justify-content: space-between;
  gap: 20px;
  flex: 1;
`;

// Save button style for saving changes
export const saveButton = css`
background-color: #3b82f6;  // Blue color
  color: white;
  font-size: 25px;
  font-weight: bold;
  padding: 10px 15px;
  border: none;
  border-radius: 15px;
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  justify-content: space-between;
  height: 130px;
  width: 45%;  // Ensuring buttons have equal width

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
  color: #ff4d4d;  // Red for errors
  font-size: 12px;
  margin-top: 5px;
`;

export const passwordSubmitButton = css`
  background-color: #6b5bff;  // Purple color
  color: white;
  font-size: 25px;
  font-weight: bold;
  padding: 10px 15px;
  border: none;
  border-radius: 15px;
  cursor: pointer;
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

export const messageIcon = css`
  width: 20%;
  height: 90px;
  display: flex;
  align-self: flex-start;
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

export const deleteButton = css`
  background-color: #f44336;  // Red color for delete
  color: white;
  font-size: 25px;
  font-weight: bold;
  padding: 10px 15px;
  border: none;
  border-radius: 15px;
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  text-align: center;
  justify-content: space-between;
  height: 130px;
  width: 45%;  // Ensuring buttons have equal width

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }

  &:active {
    transform: scale(0.98);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  }
`;
