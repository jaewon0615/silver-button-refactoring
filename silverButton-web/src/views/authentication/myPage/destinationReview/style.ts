import { css } from '@emotion/react';

export const recordContainer = css`
  width: 100%;
  margin: 0 auto;
  padding: 20px 150px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  gap: 35px;
`;

export const conttSt = css`
  width: 100%;
  height: 100%;
  background-color: rgba(147, 129, 255, 0.08);
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  padding-top: 10px;
`;

export const resultText = css`
  font-size: 30px;
  font-weight: bold;
  margin-top: 20px;
  color: #222;
`;

export const searchInput = css`
  width: 100%;
  padding: 12px;
  margin-top: 10px;
  border: 1px solid #ccc;
  border-radius: 6px;
  font-size: 16px;

`;

export const recordItem = css`
  padding: 15px;
  margin-bottom: 15px;
  border-radius: 10px;
  background: #ffffff;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.08);
  display: flex;
  flex-direction: row;
  gap: 8px;
  text-align: left;
  justify-content: space-between;
`;

export const title = css`
  font-size: 23px;
  font-weight: bold;
  color: orange;
`;

export const name = css`
  font-size: 17px;
  font-weight: bold;
  color: #0056b3;
`;

export const errorMessage = css`
  text-align: center;
  font-size: 18px;
  color: #d9534f;
  margin-top: 20px;
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

export const starRating = css`
  color: #f39c12;
  font-size: 1.5rem;
  margin-bottom: 10px;
`;

export const colck = css`
  font-weight: bold;
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

export const buttonCt = css`
  display: flex;
  flex-direction: row;
  width: 50%;
  height: 100%;
  align-items: center;
  justify-content: flex-end;
`;

export const itemCt = css`
  display: flex;
  flex-direction: column;
`;

export const icon = css`
  width: 30px;
  height: 30px;
`;

