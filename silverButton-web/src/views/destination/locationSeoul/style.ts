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
  margin-top: 20px;
  display: flex;
  justify-content: center;
  gap: 10px;
`;

export const paginationButton = css`
  padding: 8px 12px;
  border: none;
  background-color: #007bff;
  color: white;
  border-radius: 5px;
  cursor: pointer;
  transition: background 0.2s ease-in-out;
  &:hover {
    background-color: #0056b3;
  }
  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
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