import { css } from '@emotion/react';

export const detailContainer = css`
  width: 100%;
  margin: 0 auto;
  padding: 20px 150px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  gap: 35px;
  height: 100vh;
`;

export const subCt = css`
  width: 100%;
  height: 100%;
  background-color: rgba(147, 129, 255, 0.08);
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  gap: 30px;
  
`;

export const title = css`
  font-size: 30px;
  font-weight: bold;
  display: flex;
  justify-content: center;
`;

export const destinationTitle = css`
  font-size: 2rem;
  font-weight: 600;
  margin-bottom: 20px;
  text-align: center;
  color: #2c3e50;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.1);
`;

export const reviewListContainer = css`
  width: 100%;
`;

export const reviewBox = css`
  border: 1px solid #ddd;
  padding: 15px;
  margin-bottom: 10px;
  border-radius: 10px;
  background-color: #ffffff;
  width: 100%;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-in-out;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  }
`;

export const reviewNickname = css`
  font-weight: 600;
  color: #3498db;
  font-size: 1.1rem;
  margin-bottom: 5px;
`;

export const starRating = css`
  color: #f39c12;
  font-size: 1.5rem;
  margin-bottom: 10px;
`;

export const reviewText = css`
  margin-top: 10px;
  color: #555;
  font-size: 1.1rem;
  line-height: 1.6;
  text-align: justify;
  word-wrap: break-word;
`;

export const name = css`
  font-size: 20px;
  font-weight: bold;
  color: orange;
`;

export const colck = css`
  font-weight: bold;
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

export const averageRating = css`
  font-size: 20px;
  font-weight: bold;
  color: #ff9800;
`;

export const count = css`
  display: flex;
  flex-direction: row;
  gap: 20px;
  margin-top: 5px;
`;

export const likeButton = css`
  display: flex;
  align-items: center;
  gap: 5px;
  background-color: #f0f0f0;
  border: none;
  padding: 8px 12px;
  border-radius: 5px;
  font-size: 15px;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s;
  &:hover {
    background-color: #e0e0e0;
  }
  svg {
    color: #007bff;
  }
`;

export const icon = css`
  width: 30px;
  height: 20px;
`;

export const countText = css`
  font-size: 15px;
`;
