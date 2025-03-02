/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

export const MatchingProfileContainer = css`
  font-family: "Arial", sans-serif;
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
  border: 1px solid #add8e6;
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
  border: 1px solid #add8e6;
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.1);
`;

export const InfoHeader = css`
  font-size: 1.8rem;
  margin-bottom: 15px;
  color: #003366;
  font-weight: bold;
`;

export const InfoText = css`
  font-size: 1.2rem;
  margin: 10px 0;
  color: #5a5d8f;
  line-height: 1.5;
  font-family: "Arial", sans-serif;
`;

export const ButtonsContainer = css`
  display: flex;
  justify-content: center;
  margin-top: 30px;
`;

export const Button = css`
  padding: 12px 30px;
  font-size: 1.2rem;
  border: 2px solid #3b82f6;
  border-radius: 12px;
  cursor: pointer;
  color: #3b82f6;
  font-weight: bold;
  background: white;
  margin-right: 20px;
  transition: background 0.3s ease, color 0.3s ease, box-shadow 0.3s ease;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  &:hover {
    background: #3b82f6;
    color: white;
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
  }

  &:active {
    background: #1e40af;
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
