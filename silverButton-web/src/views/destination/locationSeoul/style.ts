import { css } from "@emotion/react";

export const container = css`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  text-align: center;
`;

export const searchInput = css`
  width: 100%;
  max-width: 400px;
  padding: 10px;
  margin: 20px 0;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
`;

export const gridContainer = css`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin-top: 20px;
`;

export const card = css`
  background: white;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.2s ease-in-out;
  &:hover {
    transform: translateY(-5px);
  }
`;

export const image = css`
  width: 100%;
  height: 180px;
  object-fit: cover;
`;

export const cardContent = css`
  padding: 15px;
  text-align: left;
`;

export const title = css`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 5px;
`;

export const category = css`
  font-size: 14px;
  color: #666;
  margin-bottom: 5px;
`;

export const location = css`
  font-size: 14px;
  color: #333;
  margin-bottom: 5px;
`;

export const viewCount = css`
  font-size: 12px;
  color: #999;
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

export const buttonContainer = css`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 20px;
`;

export const buttonStyle = css`
  background-color: #007bff;
  color: white;
  border: none;
  width: 13%;
  height: 60px;
  font-size: 20px;
  border-radius: 15px;
  cursor: pointer;
  font-weight: bold;

  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: #0056b3;
  }

  &:active {
    background-color: #004494;
  }

  &:disabled {
    background-color: #cccccc;
    cursor: not-allowed;
  }
`;