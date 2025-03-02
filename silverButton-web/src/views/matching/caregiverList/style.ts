/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

export const CaregiverListContainer = css`
  padding: 30px;
  font-family: "Arial", sans-serif;
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
  gap: 30px;
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const CaregiverItem = css`
  width: calc(50% - 20px);
  background: #ffffff;
  border: 1px solid #add8e6;
  padding: 24px;
  border-radius: 16px;
  font-size: 20px;
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
  text-align: center;
  overflow: hidden;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
    background: #f0f8ff;
  }
`;

export const CaregiverName = css`
  font-size: 22px;
  font-weight: bold;
  margin-bottom: 14px;
  color: #003366;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

export const CaregiverInfo = css`
  font-size: 16px;
  color: #5a5d8f;
  line-height: 1.6;
  font-weight: 500;
`;

export const ViewProfileButton = css`
  display: block;
  margin-top: 20px;
  padding: 12px 22px;
  background: #007bff;
  color: white;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  font-weight: bold;
  font-size: 18px;

  &:hover {
    background: #0056b3;
    transform: scale(1.05);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.25);
  }
`;

export const NoDataMessage = css`
  text-align: center;
  font-size: 18px;
  color: #5a5d8f;
  font-style: italic;
  padding: 12px;
  border-radius: 10px;
  background: #e6f7ff;
  border: 1px solid #a3bffa;
`;

export const ErrorMessage = css`
  text-align: center;
  font-size: 16px;
  color: #d32f2f;
  font-weight: bold;
  background: #ffccbc;
  padding: 14px;
  border-radius: 12px;
  border: 1px solid #e57373;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
`;

export const CaregiverNameStyle = css`
  font-size: 24px;
  font-weight: bold;
  color: #003366;
  margin-bottom: 10px;
`;

export const CaregiverNicknameStyle = css`
  font-size: 20px;
  color: #007bff;
  margin-bottom: 8px;
`;

export const CaregiverEmailStyle = css`
  font-size: 18px;
  color: #5a5d8f;
  margin-bottom: 8px;
`;

export const CaregiverBirthDateStyle = css`
  font-size: 18px;
  color: #5a5d8f;
`;

export const paginationContainer = css`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  padding: 16px;
  border-radius: 8px;
  background-color: #f9f9f9;
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
